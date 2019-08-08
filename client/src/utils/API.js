import axios from 'axios';

const API = {
    getHistoricalData: () => {
        console.log("I do ping");
        return axios.get('/api/pricing/historical');
    },
    getDummyData: () => {
        return axios.get('/api/pricing/all');
    }
}
export default API;