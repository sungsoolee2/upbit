import axios from 'axios';

const API = {
    getHistoricalData: () => {
        axios.get('/api/pricing/historical', (req, res) => {
            res.send('yay route worked!');
        })
    }
}
export default API;