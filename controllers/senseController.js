require("dotenv").config();
const axios = require("axios");
const keys = require(".././keys.js");
const moment = require("moment");
const authOMC = keys.omenics.auth;
console.log('HELLO');
/***** TO perform individual analysis on certain buzz words using the npm-vader sentiment package */

/**** BUZZ WORDS: considering the cryptocurrency BITCOIN todo
 * 1. Find words normally associated to bitcoin
 * 2. words ->== cryptos /> bitcoin
 * 3. BITCOIN, BTC, cryptos, cryptocurrency
 */
module.exports = {

    omenicsDataBTC: (req, res) => {
        // console.log("KEY");
        // res.send(authOMC);

        axios.get("https://omenics.com/api/v1/", { headers: { Authorization: 'Bearer '.concat(authOMC)}}).then(btc => {
            //console.log(coinData.data);
            console.log(btc);
            return btc;
        }).catch(err =>
        {
            console.log(err);
            console.log("error :(");
        })
    },

    senseDataBTC: (req, res) => {
        //do calculation to access information within a 6 month period and store
        //it into the db
        axios.get("https://omenics.com/api/v1/BTC/2019-03-01/2019-03-01", { headers: { Authorization: 'Bearer '.concat(authOMC)}}).then(btc => {
            //console.log(coinData.data);
            console.log(btc);
            return btc;
        }).catch(err =>
        {
            console.log(err);
            console.log("error :(");
        })
    }
}
