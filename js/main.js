const wsuri = "wss://api2.poloniex.com";

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
var chartPair = 'USDT_ETH';
var Change = false;

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

                try {
                    if (self.tick[cp].price !== parseFloat(data[1]) )
                        Change = true ;
                    self.tick[cp].price = parseFloat(data[1]);
                    self.tick[cp].high = parseFloat(data[8]);
                    self.tick[cp].low = parseFloat(data[9]);
                    self.tick[cp].volume = parseFloat(data[5]);
                    self.tick[cp].change = parseFloat(data[4]) * 100;
                    if ( cp.indexOf('USDT_') !== -1  )
                        updateTickerTable( cp ) ;


                    trade = {
                        'rate':self.tick[cp].price,
                        'date':Date.now()/1000
                    }

                    if (cp === 'USDT_ETH'){
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
                            let coin = d.replace('USDT_','');
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

            console.log('開始訂閱');
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
        if ( pair.indexOf('USDT_') !== -1 ){
            coin = pair.replace('USDT_','');
            row = "<tr id=tickTable_"+coin+"><td class='column1' >"+coin+"</td><td class='column2'>"+exchange.ws.tick[pair].price+"</td><td class='column3'>"+exchange.ws.tick[pair].volume+"</td><td class='column4'>"+exchange.ws.tick[pair].change+"</td></tr>"
            $('#TickerTable tbody').append(row);
        }
    }
    return e
}

function updateTickerTable(pair){
  let c = Change ;
  Change = false ;
  let coin = pair.replace('USDT_','');
  let row = "<td class='column1'>"+coin+"</td><td class='column2'>"+exchange.ws.tick[pair].price+"</td><td class='column3'>"+exchange.ws.tick[pair].volume+"</td><td class='column4'>"+exchange.ws.tick[pair].change+"</td>"
  $('#tickTable_'+coin).html(row);
  if (c ){
      $('#tickTable_'+coin).addClass('color');

      setTimeout(()=>{
        $('#tickTable_'+coin).removeClass('color');
    },500);
  }
}

function getHistoryData(pair){
    return new Promise(resolve=>{
        let starttime = ( Date.now() / 1000 ) - 86400*30
        $.getJSON('https://poloniex.com/public?command=returnTradeHistory&currencyPair={0}&start={1}'.format(pair,starttime),data=>{
            for ( let trade of data ){
                trade.date = new Date(trade.date).getTime()/1000;
                historydata.push(trade)
            }
            historydata.sort((x,y)=>{
                return x.date - y.date
            })
            resolve(); // timespan
        })
    })
}

function historyDataToKline(){
   startTime = historydata[0].date;
   start = timestampToDate(startTime);
   open = historydata[0].rate;
   close = open;
   high = open;
   low = open;
   for (let trade of historydata){

    if ( trade.date > startTime+timeSpan ) {
        data0.push([start,open,close,low,high])
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
data0.push([start,open,close,low,high])

}

function pad(num, padding) {
    if (typeof num !== "string")
        num = num.toString();

    while (num.length < padding)
        num = "0" + num;

    return num;
}


function timestampToDate(timestamp) {
    let rDate = new Date(parseInt(timestamp)*1000);
    let date = rDate.getUTCFullYear() + "-" + pad(rDate.getUTCMonth() + 1, 2) + "-" + pad(rDate.getUTCDate(), 2);
    let time = pad(rDate.getUTCHours(), 2) + ":" + pad(rDate.getMinutes(), 2) + ":" + pad(rDate.getSeconds(), 2);
    return date +' ' + time ;

}

getHistoryData(chartPair).then(historyDataToKline).then(()=>{
    data0= splitData(data0)
    console.log(data0);
    option = {
        title: {
            text: 'ETH',
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
                            return param != null ? Math.round(param.value) : '';
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

    ;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
})

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

function calculateMA(dayCount) {
    var result = [];
    for (var i = 0, len = data0.values.length; i < len; i++) {
        if (i < dayCount) {
            result.push('-');
            continue;
        }
        var sum = 0;
        for (var j = 0; j < dayCount; j++) {
            sum += data0.values[i - j][1];
        }
        result.push(sum / dayCount);
    }
    return result;
}

$('#min1').click(()=>{
    alert('1 min') ;
})




