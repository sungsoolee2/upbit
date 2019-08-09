import axios from 'axios';

const API = {
    getHistoricalData: ( req, res ) => {
        console.log("I do ping");
        return axios.get('/api/pricing/historical');
    },
    getDummyData: ( req, res ) => {
        return axios.get('/api/pricing/all');
    }
}
export default API;