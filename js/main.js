const wsuri = "wss://api2.poloniex.com"; // ws address


// add python like string format 
String.prototype.format = function () {
    var args = [].slice.call(arguments);
    return this.replace(/(\{\d+\})/g, function (a){
        return args[+(a.substr(1,a.length-2))||0];
    });
};

var historydata=[];
var start;
var startTime ;
var start ;
var open ;
var close = open;
var high = open;
var low = open;
var data0 = []
var timeSpan = 60; 
var base = 'ETH';
var quote = 'USDT';
poloniex = function () {
    socket = function () {
        var self = this;
        this.tick = {};
        this.trade = {};
        this.ids = {};
        this.cps = {};
        this.marketChannel = [];
        this.market = ['USDT_BTC', 'USDT_ETH', 'USDT_LTC', 'USDT_XRP'];
        for (let cp in this.market) this.trade[this.market[cp]] = {'asks': {}, 'bids': {}};

            function tickEvent(data) {
                cp = self.ids[data[0]];
                let change = false

                try {
                    if (self.tick[cp].price !== parseFloat(data[1]) )
                        change = true ;
                    self.tick[cp].price = parseFloat(data[1]);
                    self.tick[cp].high = parseFloat(data[8]);
                    self.tick[cp].low = parseFloat(data[9]);
                    self.tick[cp].volume = parseFloat(data[5]);
                    self.tick[cp].change = parseFloat(data[4]) * 100;
                    if ( cp.indexOf(quote+'_') !== -1  )
                        updateTickerTable( cp , change ) ;


                    trade = {
                        'rate':self.tick[cp].price,
                        'date':Date.now()/1000
                    }

                    if (cp === quote+'_'+base ){
                        if ( trade.date > startTime+timeSpan ) {

                            data0.categoryData.push(start)
                            data0.values.push([open,close,low,high])
                            startTime = trade.date;
                            start = timestampToDate(startTime);
                            open = trade.rate;
                            high = open;
                            low = open;
                        }


                        if ( trade.rate > high )
                            high = trade.rate;
                        else if ( trade.rate < low )
                            low = trade.rate; 
                        close = trade.rate;
                    }
                } catch (err) {
                    console.log(err);
                }
            }

            function tickInit(e) {
                return new Promise(resolve=>{
                    $.getJSON('https://poloniex.com/public?command=returnTicker',data=>{
                        let row ;
                        for (let d in data) {
                            self.ids[data[d]['id']] = d;
                            self.cps[d] = data[d]['id'];
                            self.tick[d] = {
                                'price': parseFloat(data[d].last),
                                'volume': parseFloat(data[d].baseVolume),
                                'change': parseFloat(data[d].percentChange) * 100,
                                'high': parseFloat(data[d].high24hr),
                                'low': parseFloat(data[d].low24hr)
                            } ;
                        }
                        resolve (e.target);
                    })
                })

            }

            function tradeEvent(datas, cp) {
                for (let i in datas) {
                    let data = datas[i];
                    if (data[0] === 'o') {
                        side = data[1] ? 'bids' : 'asks';
                        if (data[3] === '0.00000000') {
                            delete self.trade[cp][side][data[2]];
                        } else self.trade[cp][side][data[2]] = data[3];
                    }
                }

                n = Object.keys(self.trade[cp].asks).map(parseFloat);
            //console.log(Math.min(...n));
        }

        function tradeInit(data, cp) {
            for (let a in [0, 1]) {
                for (let rate in data[a]) {
                    // 0 asks 1 bids
                    if (a == 1) // bids
                        self.trade[cp].bids[rate] = data[a][rate]; else self.trade[cp].asks[rate] = data[a][rate];
                }
            }
        }

        function webSockets_subscribe(conn) {

            console.log('Success subscribe~!');
            if (conn.readyState === 1) {
                var params = {command: "subscribe", channel: 1002};
                conn.send(JSON.stringify(params));
                for (let a in self.market) {
                    //console.log();
                    conn.send(JSON.stringify({command: "subscribe", channel: self.market[a]}));
                }
            }
        }

        this.start = function () {

            const mySocket = new WebSocket(wsuri);

            mySocket.onopen = function (e) {

                tickInit(e).then(writeTickerTable).then(webSockets_subscribe);
            };

            mySocket.onclose = function (e) {

                console.log('Socket Close');
            };

            mySocket.onerror = function (e) {

                console.log('Socket Error');
                console.log(e);
            };

            mySocket.onmessage = function (e) {
                data = JSON.parse(e.data);
                channel = data[0];
                var cp = self.ids[channel];
                if (channel === 1002) {
                    if (data[1] === 1) return; // subscript 1002 success
                    tickEvent(data[2]);
                } else if (channel === 1010) {
                }
                // heartbeat

                else if (self.marketChannel.indexOf(channel) !== -1) {
                    tradeEvent(data[2], cp);
                    // Trade Event
                } else {
                    if (data[2][0][0] === 'i') { // TradeInit
                        self.marketChannel.push(channel);
                        tradeInit(data[2][0][1].orderBook, cp);
                    }
                    // Trade init
                } // end if
            };

            mySocket.onclose = function () {
                console.log("Websocket connection closed");
            };
        };
    };

    //this.t = new tick();

    this.start = function () {
        this.ws = new socket();
        this.ws.start();
    };
};

const exchange = new poloniex();
exchange.start();


function writeTickerTable(e){
    let row ;
    for(let pair in exchange.ws.tick ){
        if ( pair.indexOf(quote+'_') !== -1 ){
            coin = pair.replace(quote + '_','');
            row = "<tr class='tickTr' id=tickTable_"+pair+"><td class='column1' >"+coin+"</td><td class='column2'>"+exchange.ws.tick[pair].price+"</td><td class='column3'>"+exchange.ws.tick[pair].volume+"</td><td class='column4'>"+exchange.ws.tick[pair].change+"</td></tr>"
            $('#TickerTable tbody').append(row);
        }
    }
    return e
}

// updata table when tick event
function updateTickerTable(pair,c){
  let coin = pair.replace(quote+'_','');
  let row = "<td class='column1'>"+coin+"</td><td class='column2'>"+exchange.ws.tick[pair].price+"</td><td class='column3'>"+exchange.ws.tick[pair].volume+"</td><td class='column4'>"+exchange.ws.tick[pair].change+"</td>"
  $('#tickTable_'+pair).html(row);
  if (c){
      $('#tickTable_'+pair).addClass('color');

      setTimeout(()=>{
        $('#tickTable_'+pair).removeClass('color');
    },500);
  }

}


//get trade history from poloniex api
function getHistoryData(pair){
    return new Promise(resolve=>{
        let starttime = ( Date.now() / 1000 ) - 86400*30
        let datas = []
        try {
            $.getJSON('https://poloniex.com/public?command=returnTradeHistory&currencyPair={0}&start={1}'.format(pair,starttime),data=>{
                for ( let trade of data ){
                    trade.date = new Date(trade.date).getTime()/1000;
                    datas.push(trade)
                }
                datas.sort((x,y)=>{
                    return x.date - y.date
                })
            resolve(datas); // Orginal Data from api
        });
        } catch (err){
            console.log(err)
            alert('wait');
            setTimeout(()=>{
                $.getJSON('https://poloniex.com/public?command=returnTradeHistory&currencyPair={0}&start={1}'.format(pair,starttime),data=>{
                    for ( let trade of data ){
                        trade.date = new Date(trade.date).getTime()/1000;
                        datas.push(trade)
                    }
                    datas.sort((x,y)=>{
                        return x.date - y.date
                    })
            resolve(datas); // Orginal Data from api
        });

            } , 500 );
        }
    });
}


// format orginal data to Echarts candlestick data
function historyDataToKline(datas){
 startTime = datas[0].date;
 start = timestampToDate(startTime);
 open = datas[0].rate;
 close = open;
 high = open;
 low = open;
 historydata = [];
 for (let trade of datas){

    if ( trade.date > startTime+timeSpan ) {
        historydata.push([start,open,close,low,high])
        startTime = trade.date;
        start = timestampToDate(startTime);
        open = trade.rate;
        high = open;
        low = open;
    }


    if ( trade.rate > high )
        high = trade.rate;
    else if ( trade.rate < low )
        low = trade.rate; 
    close = trade.rate;

}


historydata.push([start,open,close,low,high])

}



function timestampToDate(timestamp) {
    function pad(num, padding) {
        if (typeof num !== "string")
            num = num.toString();

        while (num.length < padding)
            num = "0" + num;

        return num;
    }
    let rDate = new Date(parseInt(timestamp)*1000);
    let date = rDate.getUTCFullYear() + "-" + pad(rDate.getUTCMonth() + 1, 2) + "-" + pad(rDate.getUTCDate(), 2);
    let time = pad(rDate.getUTCHours(), 2) + ":" + pad(rDate.getMinutes(), 2) ; // + ":" + pad(rDate.getSeconds(), 2);
    return date +' ' + time ;

}

// Echart Candlestick Start

function setOption(){
    option = {
        title: {
            text:  quote+'_'+base ,
            left: 0
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        legend: {
            data: ['Kline', 'MA5', 'MA10', 'MA20', 'MA30']
        },
        grid: {
            left: '10%',
            right: '10%',
            bottom: '15%'
        },
        xAxis: {
            type: 'category',
            data: data0.categoryData,
            scale: true,
            boundaryGap : false,
            axisLine: {onZero: false},
            splitLine: {show: false},
            splitNumber: 20,
            min: 'dataMin',
            max: 'dataMax'
        },
        yAxis: {
            scale: true,
            splitArea: {
                show: true
            }
        },
        dataZoom: [
        {
            type: 'inside',
            start: 50,
            end: 100
        },
        {
            show: true,
            type: 'slider',
            y: '90%',
            start: 50,
            end: 100
        }
        ],
        series: [
        {
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
                        formatter: function (param) {
                            return param != null ? param.value.toFixed(3) : '';
                        }
                    }
                },
                data: [
                {
                    name: 'XX标点',
                    coord: ['2013/5/31', 2300],
                    value: 2300,
                    itemStyle: {
                        normal: {color: 'rgb(41,60,85)'}
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
                    formatter: function (param) {
                        return param.name + '<br>' + (param.data.coord || '');
                    }
                }
            },
            markLine: {
                symbol: ['none', 'none'],
                data: [
                [
                {
                    name: 'from lowest to highest',
                    type: 'min',
                    valueDim: 'lowest',
                    symbol: 'circle',
                    symbolSize: 10,
                    label: {
                        normal: {show: false},
                        emphasis: {show: false}
                    }
                },
                {
                    type: 'max',
                    valueDim: 'highest',
                    symbol: 'circle',
                    symbolSize: 10,
                    label: {
                        normal: {show: false},
                        emphasis: {show: false}
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
                normal: {opacity: 0.5}
            }
        },
        {
            name: 'MA10',
            type: 'line',
            data: calculateMA(10),
            smooth: true,
            lineStyle: {
                normal: {opacity: 0.5}
            }
        },
        {
            name: 'MA20',
            type: 'line',
            data: calculateMA(20),
            smooth: true,
            lineStyle: {
                normal: {opacity: 0.5}
            }
        },
        {
            name: 'MA30',
            type: 'line',
            data: calculateMA(30),
            smooth: true,
            lineStyle: {
                normal: {opacity: 0.5}
            }
        },

        ]
    };

}

DrawChart()

window.setInterval(function(){
  myChart.setOption(option, true);
}, 30000);
var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};
option = null;
var upColor = '#ec0000';
var upBorderColor = '#8A0000';
var downColor = '#00da3c';
var downBorderColor = '#008F28';


// 数据意义：开盘(open)，收盘(close)，最低(lowest)，最高(highest)


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
    let dayCount = (86400/timeSpan)*day;
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

function DrawChart(){
    $('#container').block({  message: '<img src="http://www.broadwaybalancesamerica.com/images/ajax-loader.gif" />',
        css: {
            border:     'none',
            backgroundColor:'transparent'
        }
    });  ;
    getHistoryData( quote+'_'+base ).then(historyDataToKline).then(()=>{
        data0= splitData(historydata);
        setOption();
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
            $('#container').unblock();  
        }
    });
}
// Echart Candlestick End



//reDraw Chart When tr been click
$('#TickerTable').on('click','.tickTr',(e)=>{
    let target = e.target.tagName.toLowerCase() === 'td'? $(e.target).parent(): $(e.target) ;
    base = target.attr('id').replace('tickTable_'+quote+'_','');
    DrawChart();
});


//reDraw Chart with different timespan
$('.btn-timespan').on('click',(e)=>{
    timeSpan = parseInt($(e.target).attr('timeSpan')) ;
    DrawChart()
});



//re Write Tick Table With different Quote
$('.btn-quote').on('click',(e)=>{
    $(e.target).siblings('.btn-choose').removeClass('btn-choose');
    $(e.target).addClass('btn-choose');
    $('#TickerTable tbody').html('');
    quote = $(e.target).html();
    writeTickerTable(null)
});

/*Table Sortable Start*/
function sortTable(table, col, reverse) {
    var tb = table.tBodies[0], // use `<tbody>` to ignore `<thead>` and `<tfoot>` rows
        tr = Array.prototype.slice.call(tb.rows, 0), // put rows into array
        i;
        reverse = -((+reverse) || -1);

    tr = tr.sort(function (a, b) { // sort rows
        let reval ;
        try{
            if ( isNaN( parseFloat(a.cells[col].textContent.trim())))
                throw 'This is String' ;
            reval =  floatCompare(parseFloat( a.cells[col].textContent.trim()) // using `.textContent.trim()` for test cpmpare floats
                ,parseFloat(b.cells[col].textContent.trim())
                );
        }catch(err){
            reval = a.cells[col].textContent.trim() // using `.textContent.trim()` for test
            .localeCompare(b.cells[col].textContent.trim())

        }
        return reverse // `-1 *` if want opposite order
        * reval ;
    });
    for(i = 0; i < tr.length; ++i) tb.appendChild(tr[i]); // append each row in order
}

function floatCompare(a,b){
    if ( a === b )
        return 0
    if (a < b)
        return 1
    else if ( a > b )
        return -1
}

function makeSortable(table) {
    var th = table.tHead, i;
    th && (th = th.rows[0]) && (th = th.cells);
    if (th) i = th.length;
    else return; // if no `<thead>` then do nothing
    while (--i >= 0) (function (i) {
        var dir = 1;
        th[i].addEventListener('click', function () {sortTable(table, i, (dir = 1 - dir))});
    }(i));
}

function makeAllSortable(parent) {
    parent = parent || document.body;
    var t = parent.getElementsByTagName('table'), i = t.length;
    while (--i >= 0) makeSortable(t[i]);
}

window.onload = function () {makeAllSortable();};

/*Table Sortable End*/
