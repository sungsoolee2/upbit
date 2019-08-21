require("dotenv").config();
const axios = require("axios");
const keys = require(".././keys.js");
const moment = require("moment");
const authOMC = keys.omenics.auth;

module.exports = {

    //Retrieves regular info 6 months before 

    /**
     * Returns the time, prices, and volume from the omenics api
     */
    parseDataTPV: (req, res) => {

        // console.log(req);
        let data = req.body.data;

        // console.log(req.body.data);
        let prices = [];
        let volume = [];
        let time = [];
        let fundamental = [];
        let overall_score = [];
        let technical = [];
        let news_sentiment = [];
        let twitter_sentiment = [];
        let reddit_sentiment = [];
        let buzz = [];

        for(let i = data.length - 1; i >= 0 ; i--){

            prices.push(data[i].price_usd);
            volume.push(data[i].volume_usd);
            let t = data[i].timestamp;
            time.push(moment(t).format("MM/DD/YY"));

            fundamental.push(data[i].fundamental);
            overall_score.push(data[i].overall_score);
            technical.push(data[i].technical);
            news_sentiment.push(data[i].news_sentiment);
            twitter_sentiment.push(data[i].twitter_sentiment);
            reddit_sentiment.push(data[i].reddit_sentiment);
            buzz.push(data[i].buzz);
        }
        
        return res.json({prices: prices, volume: volume, time: time, fundamental: fundamental, overall_score: overall_score, time: time, technical: technical, news_sentiment: news_sentiment, twitter_sentiment: twitter_sentiment, reddit_sentiment: reddit_sentiment, buzz:buzz});
    },
    parseDataSense: (req, res) => {

        // console.log(req);
        let data = req.body.data;

        let time = [];
        let fundamental = [];
        let overall_score = [];
        let technical = [];
        let news_sentiment = [];
        let twitter_sentiment = [];
        let reddit_sentiment = [];
        let buzz = [];

        // overall_score: DataTypes.DOUBLE,
        // fundamental: DataTypes.DOUBLE,
        // technical: DataTypes.DOUBLE,
        // news_sentiment: DataTypes.DOUBLE,
        // news_volume: DataTypes.DOUBLE,
        // twitter_sentiment: DataTypes.DOUBLE,
        // twitter_volume: DataTypes.DOUBLE,
        // reddit_sentiment: DataTypes.DOUBLE,
        // reddit_volume: DataTypes.DOUBLE,
        // buzz: DataTypes.DOUBLE,

        for(let i = data.length - 1; i >= 0 ; i--){
            
            console.log(data[i].fundamental);
            fundamental.push(data[i].fundamental);
            overall_score.push(data[i].overall_score);
            technical.push(data[i].technical);
            news_sentiment.push(data[i].news_sentiment);
            twitter_sentiment.push(data[i].twitter_sentiment);
            reddit_sentiment.push(data[i].reddit_sentiment);
            buzz.push(data[i].buzz);


            let t = data[i].timestamp;
            time.push(moment(t).format("MM/DD/YY"));
        }
        
        return res.json({fundamental: fundamental, overall_score: overall_score, time: time, technical: technical, news_sentiment: news_sentiment, twitter_sentiment: twitter_sentiment, reddit_sentiment: reddit_sentiment, buzz:buzz});
    },
    getOmenicsDataTicker: (req, res) => {

        let ticker = req.params.ticker;
        // console.log(req.params.ticker); //this should be the ticker
        const currentTime = moment().format("YYYY-MM-DD");

        const dayBefore = moment().subtract(1, 'days').format("YYYY-MM-DD")
        const sixMonthsBefore = moment().subtract(6, 'months').format("YYYY-MM-DD");
        const one = moment(sixMonthsBefore).add(1,"days").format("YYYY-MM-DD");

        let currentDate = "";

        // console.log("Added one day " + one);
        axios.get("https://omenics.com/api/v1/"+ticker+"/"+sixMonthsBefore, { headers: { Authorization: 'Bearer '.concat(authOMC)}}).then(coindata => {
            let data = Object.entries(coindata.data);

            let parsedData = [];

            // let counter = 0;
            for(let i = 0; i < data.length; i++){
                // console.log(data[i]);
                const test = Object.entries(data[i]);
                let t = test[1][1].timestamp;
                t = moment(t).format("YYYY-MM-DD");

                /**
                 * CALL FUNCTION THAT PARSES THROUGH INFO ONLY PER DAY
                 * 
                 * IF DATE ADDED, changed the currentDate to that
                 * so if date in database != currentDate we need to add, push that data and change the currentDate
                 * There might be a better way...
                 * 
                 * t is the current date we are parsing through
                 */

                if(currentDate != t){
                    // test counter should return approx 180 data entry points
                    // counter++;
                    currentDate = t;
                    parsedData.push(test[1][1]);

                }
            }
            console.log(parsedData);
            // console.log(counter);
            return res.json(parsedData);
        }).catch(err =>
        {
            console.log(err);
            console.log("error :(");
        })
    },


    getOmenicsDateTicker: (req, res) => {

        let ticker = req.params.ticker;
        // let fromDate = req.params.fromDate;
        // let toDate = req.params.toDate;
        let fromDate = moment(req.params.fromDate).format("YYYY-MM-DD");
        let toDate = moment(req.params.toDate).format("YYYY-MM-DD");
        // console.log(req.params.ticker); //this should be the ticker
        // console.log("THE FROM DATE ", fromDate);
        let currentDate = "";

        let query = "";

        if(fromDate){
            query+= "/"+fromDate;
        }

        if(toDate){
           query+="/"+toDate;
        }

        axios.get("https://omenics.com/api/v1/"+ticker+query, { headers: { Authorization: 'Bearer '.concat(authOMC)}}).then(coindata => {
            let data = Object.entries(coindata.data);

            let parsedData = [];
            for(let i = 0; i < data.length; i++){
                const test = Object.entries(data[i]);
                let t = test[1][1].timestamp;
                t = moment(t).format("YYYY-MM-DD");
                if(currentDate != t){
                    currentDate = t;
                    parsedData.push(test[1][1]);
                }
            }
            // console.log(parsedData);
            return res.json(parsedData);
        }).catch(err =>
        {
            console.log(err);
            console.log("error :(");
        })
    },
    getOmenicsHourly: (req, res) => {

        let ticker = req.params.ticker;
        // console.log(req.params.ticker); //this should be the ticker
        const currentTime = moment().format("YYYY-MM-DD");

        const dayBefore = moment().subtract(1, 'days').format("YYYY-MM-DD")
        const sixMonthsBefore = moment().subtract(6, 'months').format("YYYY-MM-DD");
        const one = moment(sixMonthsBefore).add(1,"days").format("YYYY-MM-DD");

        let currentDate = "";

        // console.log("Added one day " + one);
        axios.get("https://omenics.com/api/v1/"+ticker+"/"+sixMonthsBefore, { headers: { Authorization: 'Bearer '.concat(authOMC)}}).then(coindata => {
            let data = Object.entries(coindata.data);

            let parsedData = [];
            let prices = [];
            let volume = [];
            let time = [];
            // let counter = 0;
            for(let i = 0; i < data.length; i++){
                // console.log(data[i]);
                const test = Object.entries(data[i]);
                let t = test[1][1].timestamp;
                t = moment(t).format("YYYY-MM-DD");

                /**
                 * CALL FUNCTION THAT PARSES THROUGH INFO ONLY PER DAY
                 * 
                 * IF DATE ADDED, changed the currentDate to that
                 * so if date in database != currentDate we need to add, push that data and change the currentDate
                 * There might be a better way...
                 * 
                 * t is the current date we are parsing through
                 */

                if(currentDate != t){
                    // test counter should return approx 180 data entry points
                    // counter++;
                    currentDate = t;
                    parsedData.push(test[1][1]);

                }
            }
            console.log(parsedData);
            // console.log(counter);
            return res.json(parsedData);
        }).catch(err =>
        {
            console.log(err);
            console.log("error :(");
        })
    },
}
