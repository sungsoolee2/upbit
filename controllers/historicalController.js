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

        for(let i = data.length - 1; i >= 0 ; i--){
            
            prices.push(data[i].price_usd);
            volume.push(data[i].volume_usd);
            let t = data[i].timestamp;
            time.push(moment(t).format("YYYY-MM-DD"));
        }
        
        return res.json({prices: prices, volume: volume, time: time});
    },
    parseDataSense: (req, res) => {

        // console.log(req);
        let data = req.body.data;

        // console.log(req.body.data);
        let prices = [];
        let volume = [];
        let time = [];

        for(let i = data.length - 1; i >= 0 ; i--){
            
            prices.push(data[i].price_usd);
            volume.push(data[i].volume_usd);
            let t = data[i].timestamp;
            time.push(moment(t).format("YYYY-MM-DD"));
        }
        
        return res.json({prices: prices, volume: volume, time: time});
    },
    getOmenicsDataTicker: (req, res) => {

        let ticker = req.params.ticker;
        console.log(req.params.ticker); //this should be the ticker
        const currentTime = moment().format("YYYY-MM-DD");

        const dayBefore = moment().subtract(1, 'days').format("YYYY-MM-DD")
        const sixMonthsBefore = moment().subtract(6, 'months').format("YYYY-MM-DD");
        const one = moment(sixMonthsBefore).add(1,"days").format("YYYY-MM-DD");

        let currentDate = "";

        console.log("Added one day " + one);
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
                // parsedData.push({
                //     price: test[1][1].price_usd,
                //     volume_usd: test[1][1].volume_usd
                //     });
                
                // prices.push(test[1][1].price_usd);
                // volume.push(test[1][1].volume_usd);
                // time.push(t);
                // testData.push(test[1][1]);
            }
            // console.log(parsedData);
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
        let fromDate = req.params.fromDate;
        let toDate = req.params.toDate;

        // console.log(req.params.ticker); //this should be the ticker
        console.log("THE FROM DATE ", fromDate);
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
            console.log(parsedData);
            return res.json(parsedData);
        }).catch(err =>
        {
            console.log(err);
            console.log("error :(");
        })
    }
}
