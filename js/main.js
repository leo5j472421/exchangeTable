const wsuri = "wss://api2.poloniex.com"; // ws address


// add python like string format 
/*
String.prototype.format = function() {
    var args = [].slice.call(arguments);
    return this.replace(/(\{\d+\})/g, function(a) {
        return args[+(a.substr(1, a.length - 2)) || 0];
    });
};
*/

// ticker Chart Loading
$('#container').block({
    message: '<img src="img/load.gif" height="100" width="100" />',
    css: {
        border: 'none',
        backgroundColor: 'transparent'
    }
});

var historydata = [];
var start;
var startTime;
var start;
var open;
var close = open;
var high = open;
var low = open;
var data0 = []
var timeSpan = 60;
var base = 'ETH';
var quote = 'USDT';
var tradeDisplayLimit = 50;
var volume = [];

var currencyPairs = ['BTC_USDT','ETH_USDT','LTC_USDT','BCH_USDT']


bitfinex = function(currencyPairs) {
    this.cp = currencyPairs;
    const exchangeName = 'Bitfinex';
    let pairNameMap = {};
    let symbol2pair = {};

    for ( let cp of currencyPairs ){
        pairNameMap[cp] = `t${cp.replace('USDT','USD').replace('_','')}`;
        symbol2pair[`t${cp.replace('USDT','USD').replace('_','')}`] = cp;
    }


    let id2symbol={};
    const cps = currencyPairs.map(cp => pairNameMap[cp]);
    const w = new WebSocket('wss://api.bitfinex.com/ws/2');
    let tickinit = false;
    let traderinit = false;
    // store info
    let pairInfos = cps.reduce((map, obj) => {
        map[obj] = {
            asks: {},
            bids: {}
        };
        return map;
    }, {});

    let id2pair = {};


    // subscribing
    w.onopen = () => {
        cps.forEach(cp => {
            w.send(JSON.stringify({
                event: 'subscribe',
                channel: 'ticker',
                symbol: cp
            }));
            w.send(JSON.stringify({
                event: 'subscribe',
                channel: 'book',
                symbol: cp
            }));
        });
    }


    // parsing
    w.onmessage =  e => {
        let data = JSON.parse(e.data);
        // heartbeat, snapshot, update
        if (data instanceof Array) {
            if (data[1] === 'hb') return;

            switch (id2pair[data[0]].channel) {
                case 'ticker':
                Object.assign(id2pair[data[0]].pair, {            // tickerEvent
                    price: data[1][6],
                    change: (data[1][5]*100).toFixed(3),
                    volume: data[1][7]
                });
                if ( currencyPairs.includes(symbol2pair[id2symbol[data[0]]]))
                    updateCompareTable(symbol2pair[id2symbol[data[0]]],true) ;
                break;
                case 'book':
                    if (data[1][0] instanceof Array) {  // receive snapshot   //traderInit
                        data[1].forEach(record => {
                            let price = record[0],
                            amount = record[2];
                            if (amount >= 0)
                                id2pair[data[0]].pair.bids[price] = Math.abs(amount);
                            else
                                id2pair[data[0]].pair.asks[price] = Math.abs(amount);
                        });
                    }
                    else {  // receive update
                        let price = data[1][0],
                        count = data[1][1],
                        amount = data[1][2];
                        if (count > 0) {  // add or update the price level
                            if (amount >= 0)
                                id2pair[data[0]].pair.bids[price] = Math.abs(amount);
                            else
                                id2pair[data[0]].pair.asks[price] = Math.abs(amount);
                        }
                        else if (count == 0) {  // delete the price level
                            let orderFound = true;
                            if (amount >= 0) {
                                if (id2pair[data[0]].pair.bids[price])
                                    delete id2pair[data[0]].pair.bids[price];
                                else
                                    orderFound = false;
                            }
                            else {
                                if (id2pair[data[0]].pair.asks[price])
                                    delete id2pair[data[0]].pair.asks[price];
                                else
                                    orderFound = false;
                            }
                            if (!orderFound) {
                                console.error('Book delete failed, side not found.');
                            }
                        }
                    }
                    break;
                }
            }

        // subscribed Success
        else if (data instanceof Object) {
            if (data.event === 'subscribed') {
                id2symbol[data.chanId] = data.symbol;
                id2pair[data.chanId] = {
                    channel: data.channel,
                    pair: pairInfos[data.symbol]
                };
            }
            else if (data.event === 'error') {
            }
        }
    }


    // public
    this.tick = (currencyPair) => {
        let pairInfo = pairInfos[pairNameMap[currencyPair]];
        return {
            price: pairInfo.price,
            change: pairInfo.change,
            volume: pairInfo.volume
        };
    };
    this.trader = (currencyPair) => {
        let pairInfo = pairInfos[pairNameMap[currencyPair]];
        return {
            asks: pairInfo.asks,
            bids: pairInfo.bids
        };
    };
};

poloniex = function() {
    let t = this;
    let self = {
        'tick': {},
        'trade': {
            'asks': {},
            'bids': {}
        }
    };

    function reserve(str){
        s = str.split('_');
        return `${s[1]}_${s[0]}`;
    }
    this.tick = cp => {
        return self.tick[cp];
    }

    this.tickes = () => {
        return cps;
    }

    this.trade = side => {
        return self.trade[side];
    }

    this.marketChannel = 0;
    let ids = {};
    let cps = {};

    function tickEvent(data) {
        cp = ids[data[0]];
        let change = false

        try {
            if (self.tick[cp].price !== parseFloat(data[1]))
                change = true;
            self.tick[cp].price = parseFloat(data[1]);
            self.tick[cp].high = parseFloat(data[8]);
            self.tick[cp].low = parseFloat(data[9]);
            self.tick[cp].volume = parseFloat(data[5]).toFixed(3);
            self.tick[cp].change = (parseFloat(data[4]) * 100).toFixed(3);
            if (cp.includes('_'+quote)){
                updateTickerTable(cp, change);
                if ( currencyPairs.includes(cp))
                    updateCompareTable(cp, change);
            }


            trade = {
                'rate': self.tick[cp].price,
                'date': Date.now() / 1000
            }

            if (cp === quote + '_' + base) {
                if (trade.date > startTime + timeSpan) {

                    data0.categoryData.push(start)
                    data0.values.push([open, close, low, high])
                    startTime = trade.date;
                    start = timestampToDate(startTime);
                    open = trade.rate;
                    high = open;
                    low = open;
                }


                if (trade.rate > high)
                    high = trade.rate;
                else if (trade.rate < low)
                    low = trade.rate;
                close = trade.rate;
            }
        } catch (err) {
            console.log(err);
        }
    }

    function tickInit() {
        return new Promise(resolve => {
            $.getJSON('https://poloniex.com/public?command=returnTicker', data => {
                let row;
                for (let d in data) {
                    ids[data[d]['id']] = reserve(d);
                    cps[reserve(d)] = data[d]['id'];
                    self.tick[reserve(d)] = {
                        'price': parseFloat(data[d].last),
                        'volume': parseFloat(data[d].baseVolume).toFixed(3),
                        'change': (parseFloat(data[d].percentChange) * 100).toFixed(3),
                        'high': parseFloat(data[d].high24hr),
                        'low': parseFloat(data[d].low24hr)
                    };
                }
                resolve();
            })
        })

    }

    function tradeEvent(datas, cp) {
        for (let i in datas) {
            let data = datas[i];
            if (data[0] === 'o') {
                let side = data[1] ? 'bids' : 'asks';
                let rate = parseFloat(data[2]).toString();
                
                if (data[3] === '0.00000000') {
                    delete self.trade[side][rate];
                    removeTradeRow(side, rate);
                } else {
                    self.trade[side][rate] = parseFloat(data[3]);
                    updateTradeTable(side, rate);

                }
                

            }
        }

    }

    function tradeInit(data, cp) {
        return new Promise(resolve => {
            for (let a in [0, 1]) {
                for (let rate in data[a]) {
                    // 0 asks 1 bids
                    if (a == 1) // bids
                        self.trade.bids[parseFloat(rate).toString()] = parseFloat(data[a][rate]);
                    else self.trade.asks[parseFloat(rate).toString()] = parseFloat(data[a][rate]);
                }
            }

            writeTradeTable('asks');
            writeTradeTable('bids');
            resolve();
        });


    }

    this.webSockets_subscribe = channel => {
        let conn = self.conn
        if (conn.readyState === 1) {
            var params = {
                command: "subscribe",
                channel: channel
            };
            conn.send(JSON.stringify(params));
            console.log(`Subscribe Channel ${channel}`);
        }
    }

    this.webSockets_unsubscribe = channel => {
        let conn = self.conn;
        if (conn.readyState == 1 && channel > 0) {
            if (channel == t.marketChannel)
                t.marketChannel = 0;
            conn.send(JSON.stringify({
                command: "unsubscribe",
                channel: channel
            }));
            console.log(`Unsubscribe Channel ${channel}`);
            if ('subscriptions' in conn)
                delete conn.subscriptions[channel];
        }
    }

    function clear() {
        self = {
            'tick': {},
            'trade': {
                'asks': {},
                'bids': {}
            }
        };

        t.marketChannel = 0;
        ids = {};
        cps = {};

    }

    function creatTickerVue(){
        console.log(self.tick);
        return new Vue({
            'el':'.table100',
            'data': {
                'quote': quote,
                'tickers' : self.tick
            },
            methods: {
                quoteClick: event=>{
                    $(event.target).siblings('.btn-choose').removeClass('btn-choose');
                    $(event.target).addClass('btn-choose');
                    quote = event.target.innerText;
                    tickVue.$data.quote = quote ;
                    setTimeout(()=>{sortTable($('#tickerTable').get(0), 1, 0)},100);
                    //sortTable($('#tickerTable').get(0), 1, 0);
                },
                sort:event=>{
                    sortTable($(event.target).parents('table').get(0), $(event.target).index(), 0)
                }
                ,
                tdId: pair=>{
                    return 'tickTable_' + pair 
                },
                test: event=>{

                    console.log(event)
                    $(event.target).parent().addClass('color');
                    setTimeout(() => {
                        $(event.target).parent().removeClass('color');
                    }, 500);
                },
                changePair:async e => {
                    let target = e.target.tagName.toLowerCase() === 'td' ? $(e.target).parent() : $(e.target);
                    timeSpan = 60;
                    base = target.attr('id').replace('tickTable_' + quote + '_', '');
                    exchange.webSockets_unsubscribe(exchange.marketChannel);
                    $('#asksTable tbody.data').html('');
                    $('#bidsTable tbody.data').html('');
                    $('.traderTable thead tr th.column2').html(base);
                    $('.traderTable thead tr th.column3').html(quote);
                    $('.traderTable thead tr th.column4').html(`Sum(${quote})`);
                    exchange.webSockets_subscribe(quote + '_' + base);
                    $('#container').block({
                        message: '<img src="img/loading.gif" />',
                        css: {
                            border: 'none',
                            backgroundColor: 'transparent'
                        }
                    });

                    await drawTicker()
                    $('#container').unblock();
                }

            },
            watch:{
                'tickers.USDT_BTC.price': event=>{
                    //console.log(event);
                }
            }

        })
    }

    this.start = function() {
        clear();
        const mySocket = new WebSocket(wsuri);

        mySocket.onopen = async function(e) {
            self.conn = e.target;
            await tickInit()
            channel = t.webSockets_subscribe(1002)
            t.webSockets_subscribe('USDT_ETH')
            writeTickerTable();
            writeCompareTable();

            sortTable($('#tickerTable').get(0), 1, 0); //SortByPrice
            await drawTicker();
            $('#container').unblock();
        }

        mySocket.onerror = function(e) {

            console.log('Socket Error');
            console.log(e);
        };

        mySocket.onmessage = async function(e) {
            let data = JSON.parse(e.data);
            let channel = data[0];
            var cp =
            ids[channel];
            if (channel === 1002) {
                if (data[1] === 1) return; // subscript 1002 success
                tickEvent(data[2]);
            } else if (channel === 1010) {}
            // heartbeat
            else if (channel === t.marketChannel) {
                tradeEvent(data[2], cp);
                // Trade Event
            } else {
                self.trade = {
                    'asks': {},
                    'bids': {}
                }
                if (data[1] === 0); // unsubscript
                else if (data[2][0][0] === 'i') { // TradeInit
                    t.marketChannel = channel;
                    await tradeInit(data[2][0][1].orderBook, cp)
                    drawTrader();
                }
                // Trade init
            } // end if
        };

        mySocket.onclose = function() {
            console.log("Websocket connection closed");
            t.start();
        };
    };

    //this.t = new tick();
};

const exchange = new poloniex();
const exchange1 = new bitfinex(currencyPairs);
exchange.start(); // websocket Start



function writeCompareTable(){
    let row ;
    for ( let cp of currencyPairs ){
     row = "<tr class='tickTr' id=compareTable_" + cp + "><td class='column1' >" + cp.replace('_USDT','') + "</td><td class='column2'>" + exchange.tick(cp).price + "</td><td class='column3'>" + exchange.tick(cp).change + " %</td><td class='column2'>" + exchange1.tick(cp).price + "</td><td class='column3'>" + exchange1.tick(cp).change + " %</td></tr>"
     $('#comparetable tbody').append(row);
 }
}


function writeTickerTable(e) {
    let row;
    for (let pair in exchange.tickes()) {

        if (pair.includes('_'+quote )) {
            coin = pair.replace('_'+quote , '');
            row = "<tr class='tickTr' id=tickTable_" + pair + "><td class='column1' >" + coin + "</td><td class='column2'>" + exchange.tick(pair).price + "</td><td class='column3'>" + exchange.tick(pair).volume + "</td><td class='column4'>" + exchange.tick(pair).change + " %</td></tr>"
            $('#tickerTable tbody').append(row);
        }
    }
    return e
}

function updateCompareTable(pair,c){
    let row = "<tr class='tickTr' id=tickTable_" + pair + "><td class='column1' >" + pair.replace('_USDT','') + "</td><td class='column2'>" + exchange.tick(pair).price + "</td><td class='column3'>" + exchange.tick(pair).change + " %</td><td class='column2'>" + exchange1.tick(pair).price + "</td><td class='column3'>" + exchange1.tick(pair).change + " %</td></tr>"
    $('#compareTable_' + pair).html(row);
    if (c) {
        $('#compareTable_' + pair).addClass('color');

        setTimeout(() => {
            $('#compareTable_' + pair).removeClass('color');
        }, 500);
    }

}

// updata table when tick event
function updateTickerTable(pair, c) {

    let coin = pair.replace( '_'+quote , '');
    let row = "<td class='column1'>" + coin + "</td><td class='column2'>" + exchange.tick(pair).price + "</td><td class='column3'>" + exchange.tick(pair).volume + "</td><td class='column4'>" + exchange.tick(pair).change + " %</td>"
    $('#tickTable_' + pair).html(row);
    if (c) {
        $('#tickTable_' + pair).addClass('color');

        setTimeout(() => {
            $('#tickTable_' + pair).removeClass('color');
        }, 500);
    }

}

function writeTradeTable(side) {
    let row;
    let rates;
    let rate;
    $('#' + side + 'Table tbody.data').html('');
    if (side === 'asks')
        rates = Object.keys(exchange.trade('asks')).map(parseFloat).sort((x, y) => {
            return x - y
        });
    else
        rates = Object.keys(exchange.trade('bids')).map(parseFloat).sort((x, y) => {
            return y - x
        });
    for (let index = 0; index <= tradeDisplayLimit && index < rates.length; index++) {
        let rate = rates[index].toString();
        row = "<tr class='" + side + "Tr' id=" + rate.toString() + side + "><td class='column1' >" + rate + "</td><td class='column2'>" + exchange.trade(side)[rate] + "</td><td class='column3'>" + exchange.trade(side)[rate] * parseFloat(rate) + "</td><td class='column4'>" + exchange.trade(side)[rate] + "</td></tr>";
        $('#' + side + 'Table tbody.data').append(row);
    }

    updateTradeSum(side);
    //$('#' + side + 'Table tbody').after("<tbody class='loadMore'><tr class='" + side + "Tr' id=" + rate + side + "><td>load more</td></tr></tbody>");
}

function updateTradeTable(side, rate) {
    rate = rate.toString();
    let row = "<td class='column1'>" + rate + "</td><td class='column2'>" + exchange.trade(side)[rate] + "</td><td class='column3'>" + exchange.trade(side)[rate] * parseFloat(rate) + "</td><td class='column4'>" + exchange.trade(side)[rate] + "</td>"
    if ($('#' + rate.replace('.', '\\.') + side).html() === undefined) {
        $('#' + side + 'Table tbody.data tr:last').after("<tr class='" + side + "Tr' id=" + rate.toString() + side + ">" + row + '</tr>');
        if (side === 'asks')
            sortTable($('#' + side + 'Table').get(0), 0, 1);
        else
            sortTable($('#' + side + 'Table').get(0), 0, 0);
    } else
    $('#' + rate.replace('.', '\\.') + side).html(row);
    updateTradeSum(side);
    $('#' + rate.replace('.', '\\.') + side).addClass('color');
    setTimeout(() => {
        $('#' + rate.replace('.', '\\.') + side).removeClass('color');
    }, 500);


}

function removeTradeRow(side, rate) {
    $('#' + rate.replace('.', '\\.') + side).remove()
}


function updateTradeSum(side) {
    let sum = 0;
    $('.' + side + 'Tr').each(function() {
        sum += parseFloat($(this).children('.column3').html())
        $(this).children('.column4').html(sum);
    });
}


//get trade history from poloniex api
function getHistoryData(pair) {
    return new Promise(async (resolve) => {
        let starttime = (Date.now() / 1000) - 86400 * 30
        let datas = []
        try {
            $.getJSON(`https://poloniex.com/public?command=returnTradeHistory&currencyPair=${pair}&start=${starttime}`, data => {
                for (let trade of data) {
                    trade.date = new Date(trade.date).getTime() / 1000;
                    datas.push(trade)
                }
                datas.sort((x, y) => {
                    return x.date - y.date
                })
                resolve(datas); // Orginal Data from api
            });
        } catch (err) {
            r = getHistoryData(pair);
            resolve(r)
        }
    });
}


// format orginal data to Echarts candlestick data
function historyDataToKline(datas) {
    startTime = datas[0].date;
    //    startTime = startTime - startTime%60
    start = timestampToDate(startTime);
    open = datas[0].rate;
    close = open;
    high = open;
    low = open;
    volume = [];
    historydata = [];
    let v = 0;
    let i = 0;
    for (let trade of datas) {

        if (trade.date > startTime + timeSpan) {
            historydata.push([start, open, close, low, high]);
            volume.push(v);
            startTime = trade.date;
            start = timestampToDate(startTime);
            open = trade.rate;
            high = open;
            low = open;
            v = 0;
            i++;
        }

        if (trade.rate > high)
            high = trade.rate;
        else if (trade.rate < low)
            low = trade.rate;
        close = trade.rate;
        v += parseFloat(trade.amount)

    }

    historydata.push([start, open, close, low, high])

}



function timestampToDate(timestamp) {
    function pad(num, padding) {
        if (typeof num !== "string")
            num = num.toString();

        while (num.length < padding)
            num = "0" + num;

        return num;
    }
    let rDate = new Date(parseInt(timestamp) * 1000);
    let date = rDate.getFullYear() + "-" + pad(rDate.getMonth() + 1, 2) + "-" + pad(rDate.getDate(), 2);
    let time = pad(rDate.getHours(), 2) + ":" + pad(rDate.getMinutes(), 2); // + ":" + pad(rDate.getSeconds(), 2);
    return date + ' ' + time;

}

// Echart Candlestick Start reDrawTicker every 30 sec

window.setInterval(function() {
    drawTicker();
    drawTrader();
}, 30000);



function drawTicker() {
    return new Promise(async function(resolve) {
        let hdatas = await getHistoryData(quote + '_' + base);
        historyDataToKline(hdatas);
        data0 = splitData(historydata);
        let all = data0.categoryData.length
        let startp = ((all - 100) / all) * 100
        if (startp < 0)
            startp = 0;
        let dom = document.getElementById("container");
        let myChart = echarts.init(dom);
        let app = {};
        let tickerOption = null;
        let upColor = '#ec0000';
        let upBorderColor = '#8A0000';
        let downColor = '#00da3c';
        let downBorderColor = '#008F28';

        function splitData(rawData) {
            var categoryData = [];
            var values = []
            for (var i = 0; i < rawData.length; i++) {
                categoryData.push(rawData[i].splice(0, 1)[0]);
                values.push(rawData[i])
            }
            return {
                categoryData: categoryData,
                values: values
            };
        }

        function calculateMA(day) {
            var result = [];
            let dayCount = (86400 / timeSpan) * day;
            for (var i = 0, len = data0.values.length; i < len; i++) {
                if (i < dayCount) {
                    result.push('-');
                    continue;
                }
                var sum = 0;
                for (var j = 0; j < dayCount; j++) {
                    sum += parseFloat(data0.values[i - j][1]);
                }

                result.push(sum / dayCount);
            }
            return result;
        }
        tickerOption = {
            title: {
                text:  base+'_'+quote,
                left: 'center'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                }
            },
            legend: {
                data: ['Kline', 'MA5', 'MA10', 'MA20', 'MA30'],
                left: 'right'
            },
            grid: [{
                left: '10%',
                right: '8%',
                height: '50%'
            },
            {
                left: '10%',
                right: '8%',
                top: '63%',
                height: '16%'
            }
            ],
            xAxis: [{
                type: 'category',
                data: data0.categoryData,
                scale: true,
                boundaryGap: false,
                axisLine: {
                    onZero: false
                },
                splitLine: {
                    show: false
                },
                splitNumber: 20,
                min: 'dataMin',
                max: 'dataMax'
            },
            {
                type: 'category',
                gridIndex: 1,
                data: data0.categoryData,
                scale: true,
                boundaryGap: false,
                axisLine: {
                    onZero: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                splitNumber: 20,
                min: 'dataMin',
                max: 'dataMax'
            }
            ],
            yAxis: [{
                scale: true,
                splitArea: {
                    show: true
                }
            },
            {
                scale: true,
                gridIndex: 1,
                splitNumber: 2,
                axisLabel: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            }
            ],
            dataZoom: [{
                type: 'inside',
                xAxisIndex: [0, 1],
                start: startp,
                end: 100
            },
            {
                show: true,
                xAxisIndex: [0, 1],
                type: 'slider',
                y: '90%',
                start: startp,
                end: 100
            }
            ],
            series: [{
                name: 'Kline',
                type: 'candlestick',
                data: data0.values,
                itemStyle: {
                    normal: {
                        color: upColor,
                        color0: downColor,
                        borderColor: upBorderColor,
                        borderColor0: downBorderColor
                    }
                },
                markPoint: {
                    label: {
                        normal: {
                            formatter: function(param) {
                                return param != null ? param.value.toFixed(3) : '';
                            }
                        }
                    },
                    data: [{
                        itemStyle: {
                            normal: {
                                color: 'rgb(41,60,85)'
                            }
                        }
                    },
                    {
                        name: 'highest value',
                        type: 'max',
                        valueDim: 'highest'
                    },
                    {
                        name: 'lowest value',
                        type: 'min',
                        valueDim: 'lowest'
                    },
                    {
                        name: 'average value on close',
                        type: 'average',
                        valueDim: 'close'
                    }
                    ],
                    tooltip: {
                        formatter: function(param) {
                            return param.name + '<br>' + (param.data.coord || '');
                        }
                    }
                },
                markLine: {
                    symbol: ['none', 'none'],
                    data: [
                    [{
                        name: 'from lowest to highest',
                        type: 'min',
                        valueDim: 'lowest',
                        symbol: 'circle',
                        symbolSize: 10,
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: false
                            }
                        }
                    },
                    {
                        type: 'max',
                        valueDim: 'highest',
                        symbol: 'circle',
                        symbolSize: 10,
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: false
                            }
                        }
                    }
                    ],
                    {
                        name: 'min line on close',
                        type: 'min',
                        valueDim: 'close'
                    },
                    {
                        name: 'max line on close',
                        type: 'max',
                        valueDim: 'close'
                    }
                    ]
                }
            },
            {
                name: 'MA5',
                type: 'line',
                data: calculateMA(5),
                smooth: true,
                lineStyle: {
                    normal: {
                        opacity: 0.5
                    }
                }
            },
            {
                name: 'MA10',
                type: 'line',
                data: calculateMA(10),
                smooth: true,
                lineStyle: {
                    normal: {
                        opacity: 0.5
                    }
                }
            },
            {
                name: 'MA20',
                type: 'line',
                data: calculateMA(20),
                smooth: true,
                lineStyle: {
                    normal: {
                        opacity: 0.5

                    }
                }
            },
            {
                name: 'MA20',
                type: 'line',
                data: calculateMA(20),
                smooth: true,
                lineStyle: {
                    normal: {
                        opacity: 0.5
                    }
                }
            },
            {

                name: 'MA30',
                type: 'line',
                data: calculateMA(30),
                smooth: true,
                lineStyle: {
                    normal: {
                        opacity: 0.5
                    }
                }
            },
            {
                name: 'Volume',
                type: 'bar',
                xAxisIndex: 1,
                yAxisIndex: 1,
                data: volume
            }
            ]
        };
        if (tickerOption && typeof tickerOption === "object") {
            myChart.setOption(tickerOption, true);
            resolve();
        }

    });

}
// Echart Candlestick End



//reDraw Chart and re Write asks bids table When tr been click
$('#tickerTable').on('click', '.tickTr', async (e) => {
    let target = e.target.tagName.toLowerCase() === 'td' ? $(e.target).parent() : $(e.target);
    timeSpan = 60;
    base = target.attr('id').replace('tickTable_', '').replace('_'+quote,'');
    exchange.webSockets_unsubscribe(exchange.marketChannel);
    $('#asksTable tbody.data').html('');
    $('#bidsTable tbody.data').html('');
    $('.traderTable thead tr th.column2').html(base);
    $('.traderTable thead tr th.column3').html(quote);
    $('.traderTable thead tr th.column4').html(`Sum(${quote})`);
    exchange.webSockets_subscribe(quote + '_' + base);
    $('#container').block({
        message: '<img src="img/loading.gif" />',
        css: {
            border: 'none',
            backgroundColor: 'transparent'
        }
    });

    await drawTicker()
    $('#container').unblock();
});


//reDraw Chart with different timespan
$('.btn-timespan').on('click', e => {
    timeSpan = parseInt($(e.target).attr('timeSpan'));
    drawTicker()
});



//re Write Tick Table With different Quote
$('.btn-quote').on('click', e => {
    $(e.target).siblings('.btn-choose').removeClass('btn-choose');
    $(e.target).addClass('btn-choose');
    $('#tickerTable tbody').html('');
    quote = $(e.target).html();
    writeTickerTable()
    sortTable($('#tickerTable').get(0), 1, 0); // sortByPrice
});

//load 100 more
$('tbody.loadMore').on('click', e => {
    tradeDisplayLimit += 100;
    $('.traderTable').block({
        message: '<img src="http://www.broadwaybalancesamerica.com/images/ajax-loader.gif" />',
        css: {
            border: 'none',
            backgroundColor: 'transparent'
        }
    });
    setTimeout(() => $('.traderTable').unblock(), 1000);
    writeTradeTable('asks');
    writeTradeTable('bids');
});


/*Table Sortable Start*/
function sortTable(table, col, reverse) {
    function floatCompare(a, b) {
        if (a === b)
            return 0
        if (a < b)
            return 1
        else if (a > b)
            return -1
    }

    var tb = table.tBodies[0], // use `<tbody>` to ignore `<thead>` and `<tfoot>` rows
        tr = Array.prototype.slice.call(tb.rows, 0), // put rows into array
        i;
        reverse = -((+reverse) || -1);
    tr = tr.sort(function(a, b) { // sort rows
        let reval;
        try {
            if (isNaN(parseFloat(a.cells[col].textContent.trim())))
                throw 'This is String';
            reval = floatCompare(parseFloat(a.cells[col].textContent.trim()) // using `.textContent.trim()` for test cpmpare floats
                , parseFloat(b.cells[col].textContent.trim())
                );
        } catch (err) {
            reval = a.cells[col].textContent.trim() // using `.textContent.trim()` for test
            .localeCompare(b.cells[col].textContent.trim())

        }
        return reverse // `-1 *` if want opposite order
        *
        reval;
    });
    for (i = 0; i < tr.length; ++i) tb.appendChild(tr[i]); // append each row in order
}

function makeSortable(table) {
    var th = table.tHead,
    i;
    th && (th = th.rows[0]) && (th = th.cells);
    if (th) i = th.length;
    else return; // if no `<thead>` then do nothing
    while (--i >= 0)(function(i) {
        var dir = 1;
        th[i].addEventListener('click', function() {
            sortTable(table, i, (dir = 1 - dir))
        });
    }(i));
}

function makeAllSortable(parent) {
    parent = parent || document.body;
    var t = parent.getElementsByTagName('table'),
    i = t.length;
    while (--i >= 0) makeSortable(t[i]);
}

window.onload = function() {
    makeAllSortable();
};

/*Table Sortable End*/



/*Trader Chart Start */
function drawTrader() {
    function formattraderData() {
        let traders = [exchange.trade('asks'), exchange.trade('bids')]
        let asksRates = Object.keys(traders[0]).map(parseFloat).sort((x, y) => {
            return x - y
        });
        let bidsRates = Object.keys(traders[1]).map(parseFloat).sort((x, y) => {
            return y - x
        });
        let asksData = [];
        let bidsData = [];
        let sum = 0;
        for (let rate of asksRates) {
            sum += traders[0][rate];
            asksData.push([rate, sum]);
        }
        sum = 0;
        for (let rate of bidsRates) {
            sum += traders[1][rate];
            bidsData.push([rate, sum]);
        }
        asksData.sort((x, y) => {
            return x[0] - y[0]
        });
        bidsData.sort((x, y) => {
            return x[0] - y[0]
        });
        return [asksData, bidsData];

    }
    let arr = formattraderData();
    let tdom = document.getElementById("tradeChart");
    let tmyChart = echarts.init(tdom);
    toption = null;
    let rates = [];
    let asks = [];
    let bids = [];
    let all = arr[0].length + arr[1].length;
    let start = ((arr[1].length * 0.5) / all) * 100
    let end = ((arr[1].length + arr[0].length * 0.3) / all) * 100
    for (let trade of arr[1]) {
        rates.push(trade[0]);
        bids.push(trade[1]);
    }
    rates.forEach(() => asks.push(0));
    for (let trade of arr[0]) {
        rates.push(trade[0]);
        asks.push(trade[1]);
        bids.push(0);
    }

    toption = {
        tooltip: {
            trigger: 'axis',
            position: function(pt) {
                return [pt[0], '10%'];
            }
        },
        title: {
            left: 'center',
            text: 'Market Depth',
        },
        toolbox: {
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: rates
        },
        yAxis: {
            type: 'value',
            // boundaryGap: [0, '100%']
        },
        dataZoom: [{
            type: 'inside',
            start: start,
            end: end
        }, {
            start: 0,
            end: 10,
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        }],
        series: [{
            name: 'bids',
            type: 'line',
            smooth: true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
                normal: {
                    color: 'red'
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#227700'
                    }, {
                        offset: 1,
                        color: '#CCFF99'
                    }])
                }
            },
            data: bids.map((x) => {
                return x.toFixed(3)
            })
        }, {
            name: 'asks',
            type: 'line',
            smooth: true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
                normal: {
                    color: 'green'
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#880000'
                    }, {
                        offset: 1,
                        color: '#FFCCCC'
                    }])
                }
            },
            data: asks.map((x) => {
                return x.toFixed(3)
            })
        }]
    };;
    if (toption && typeof toption === "object") {
        tmyChart.setOption(toption, true);
    }
}
/*Trader Chart End */
/*
window.setInterval(function() {
    drawTrader();
}, 5000);*/