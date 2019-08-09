import axios from 'axios';
// import API from '../../../classes/external/api';

const API = {
    getHistoricalData: () => {
        console.log("I do ping");
        return axios.get('/api/pricing/historical');
    },
    getDummyData: () => {
        return axios.get('/api/pricing/');
    }
}
export default API;