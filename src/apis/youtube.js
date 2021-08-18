import axios from 'axios';

const KEY = 'AIzaSyDY5mbAEqRtA_det7gURPljqyQ_k0X5Vis';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});