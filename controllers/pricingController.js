require("dotenv").config();
const axios = require("axios");
const keys = require(".././keys.js");
const authOMC = keys.omenics;
console.log('HELLO');

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

    omenicsDataBTC: (req, res) => {
        // console.log("KEY");
        res.send(authOMC);

        // axios.get("https://omenics.com/api/v1/BTC").then(btc => {
        //     //console.log(coinData.data);
        //     console.log(btc);
        //     return btc;
        // }).catch(err =>
        // {
        //     console.log(err);
        //     console.log("error :(");
        // })
//         const AuthStr = 'Bearer ' + authOMC; 
//         const URL = "https://omenics.com/api/v1/BTC";
// axios.get(URL, { headers: { Authorization: AuthStr } })
//  .then(response => {
//      // If request is good...
//      console.log(response.data);
//      return response;
//   })
//  .catch((error) => {
//      console.log('error ' + error);
//   });

    }
        

//         ajax({
//     url: "https://omenics.com/api/v1/BTC",
//     type: "GET",
// ,
// })
// .done(function(data, textStatus, jqXHR) {
//     console.log("HTTP Request Succeeded: " + jqXHR.status);
//     console.log(data);
//     return data;
// })
// .fail(function(jqXHR, textStatus, errorThrown) {
//     console.log("HTTP Request Failed");
// })
// .always(function() {
//     /* ... */
// });
    // }
}
