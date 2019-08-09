const axios = require("axios");

console.log('HELLO');

module.exports = {
    getHistorical: (req, res) => {
        console.log("I ran!");

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
        
    }
    
}
