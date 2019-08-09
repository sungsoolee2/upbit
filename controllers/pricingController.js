const axios = require("axios");

console.log('HELLO');

module.exports = {
    getHistorical: (req, res) => {
        console.log("I ran!");

        axios.get('https://api.coinbase.com/v2/prices/USD/')
        .then(coinData => {
            return res.json(coinData)
        }).catch(err =>
        {
            console.log("error :(");
        })
    },

    getDummyData: function (req, res) {
        // Access userId via: req.params.userId
        // Access bookId via: req.params.bookId
        res.send(req.params);
        
    }
    
}
