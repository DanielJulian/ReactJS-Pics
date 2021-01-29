import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID I3K57zh6aRazLWgJriie6deehghFdEbbXe3liW-ofws'
    }
});