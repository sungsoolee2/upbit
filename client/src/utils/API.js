import axios from 'axios';
// import API from '../../../classes/external/api';

const API = {
    getHistoricalData: () => {
        console.log("I do ping");
        return axios.get('/api/pricing/historical');
    },
    getDummyData: () => {
        return axios.get('/api/pricing/');
    },
    getAllCoinData: () => {
        return axios.get('/api/pricing/allcoindata');
    },
    // getSenseDataBTC: () => {
    //     return axios.get('/api/pricing/senseBTC');
    // },
    getHistData: (ticker) => {
        return axios.get('api/historical/getHistData/'+ticker);
    },
    getNews: () => {
        return axios.get('/api/news');
    },
    getUser: () => {
        return axios.get('api/user');

        // {
        //     headers: {
        //       Authorization: 'Bearer ' + localStorage.getItem('token')
        //     }
        // })
    },
    parseDataTPV: (parseData) => {
        return axios.post('api/historical/parseDataTPV', parseData);
    },
    getExactDateHist: (query) => {
        console.log(query);
        return axios.get("api/historical/getExactDateHist/"+query)
    },
    parseDataSense: (parseData) => {
        return axios.post('api/historical/parseDataSense', parseData);

    }
}
export default API;