import axios from 'axios';

const instance= axios.create({
    baseURL:'https://storyclub-734f8.firebaseio.com/'
})

export default instance;

