const axios = require("axios");
module.exports = {
    getHistorical: () => {
        console.log("I ran!");

        axios.get(`https://api.coinbase.com/v2/prices/USD/spot?=2019-01-01`)
        .then(coinData => {
            return coinData.data
        }).catch =(err) =>
        {
            console.log("error :(");
        }
    },

    getDummyData: () =>{
        console.log("My feelings are hurt...");
    }
}
