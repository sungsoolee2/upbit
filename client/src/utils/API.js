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
    getSenseDataBTC: () => {
        return axios.get('/api/pricing/senseBTC');
    },
    getHistData: (ticker) => {
        return axios.get('api/historical/getHistData/'+ticker);
    },
    getNews: () => {
        return axios.get('/api/news');
    }
}
export default API;