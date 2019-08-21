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
}
