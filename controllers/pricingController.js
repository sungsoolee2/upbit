const axios = require("axios");

// console.log('HELLO');
module.exports = {
    getHistorical: () => {
        console.log("I ran!");

        axios.get(`https://api.coinbase.com/v2/prices/USD/spot?=2019-01-01-01:00:00-04:00:00`)
        .then(res => {
            return res.data;
        }).catch =() =>
        {
            console.log("error :(");
        }
    },

    getDummyData: () =>{
        console.log("My feelings are hurt...");
    }
}
