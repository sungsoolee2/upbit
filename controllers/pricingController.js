require("dotenv").config();
const axios = require("axios");
const keys = require(".././keys.js");
const moment = require("moment");
const authOMC = keys.omenics.auth;

module.exports = {
    getHistorical: (req, res) => {
        axios.get('https://api.coinbase.com/v2/prices/USD/spot')
        .then(coinData => {
            //console.log(coinData.data);
            return res.json(coinData.data);
        }).catch(err =>
        {
            console.log(err);
            console.log("error :(");
        })
    },

    getDummyData: function (req, res) {
        // Access userId via: req.params.userId
        // Access bookId via: req.params.bookId
        res.send(req.params);
        
    },

    getAllCoinData: (req, res) => {

        axios.get('https://api.coinbase.com/v2/prices/USD/spot')
        .then(coinData => {
            //console.log(coinData.data);
            // console.log("MY KEY IS ", authOMC);
            return res.json(coinData.data);
        }).catch(err =>
        {
            console.log(err);
            console.log("error :(");
        })
    },

    // omenicsDataBTC: (req, res) => {
    //     // console.log("KEY");
    //     // res.send(authOMC);
    //     // console.log("Requesting...", req);
    //     // console.log("MOMENT JS " + moment().format("YYYY-MM-DD HH:mm"));
    //     const currentTime = moment().format("YYYY-MM-DD");
    //     console.log("MONTHS "+ moment().subtract(6, 'months').format("YYYY-MM-DD HH:mm:ss"))
    //     const dayBefore = moment().subtract(1, 'days').format("YYYY-MM-DD")
    //     const sixMonthsBefore = moment().subtract(6, 'months').format("YYYY-MM-DD");
    //     axios.get("https://omenics.com/api/v1/BTC/"+dayBefore, { headers: { Authorization: 'Bearer '.concat(authOMC)}}).then(btc => {
    //         //console.log(coinData.data);
    //         // console.log(btc.data);
    //         let data = Object.entries(btc.data);
    //         // console.log(btc);
    //         // console.log(Object.entries(btc.data));
    //         let testData = [];
    //         let parsedData = [];
    //         let prices = [];
    //         let volume = [];
    //         let time = [];

    //         for(let i = 0; i < data.length; i++){
    //             // console.log(data[i]);
    //             const test = Object.entries(data[i]);
    //             let t = test[1][1].timestamp;
    //             t = moment(t).format("YYYY-MM-DD HH:mm");
    //             // console.log(test[1][1].timestamp);
    //             parsedData.push({
    //                 price: test[1][1].price_usd,
    //                 volume_usd: test[1][1].volume_usd
    //                 });
                
    //             prices.push(test[1][1].price_usd);
    //             volume.push(test[1][1].volume_usd);
    //             time.push(t);
    //             testData.push(test[1][1]);
    //         }
    //         // console.log(parsedData);
    //         return res.json({prices: prices, volume: volume, time: time});
    //     }).catch(err =>
    //     {
    //         console.log(err);
    //         console.log("error :(");
    //     })
    // },

    // omenicsDataBTCHistorical: (req, res) => {
    //     //do calculation to access information within a 6 month period and store
    //     //it into the db

    //     axios.get("https://omenics.com/api/v1/BTC/2019-03-01/2019-03-01", { headers: { Authorization: 'Bearer '.concat(authOMC)}}).then(btc => {
    //         //console.log(coinData.data);
    //         // console.log(btc);
    //         return btc;
    //     }).catch(err =>
    //     {
    //         console.log(err);
    //         console.log("error :(");
    //     })
    // }
}
