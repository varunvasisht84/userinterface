import axios from 'axios';

export default () => {
    console.log('api');
    return axios.create(
        {
            baseURL : 'http://localhost:8000'
        }
    )
}