const axios = require("axios");

console.log('HELLO');

module.exports = {
    getHistorical: (req, res) => {
        console.log("I ran!");

        axios.get(`https://api.coinbase.com/v2/prices/USD/spot?=2019-01-01-01:00:00-04:00:00`)
        .then(coinData => {
            return res.json(coinData)
        }).catch =(err) =>
        {
            console.log("error :(");
        }
    },

    getDummyData: (req, res) =>{
        console.log("My feelings are hurt...");
    }
}
