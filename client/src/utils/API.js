import axios from 'axios';

const API = {
    getHistoricalData: () => {
        console.log("I do ping");
        axios.get('/api/pricing/historical').then(data => {
            console.log("Data pinged", data);
        });
    },
    getDummyData: () => {
        return axios.get('/api/pricing/');
    }
}
export default API;
