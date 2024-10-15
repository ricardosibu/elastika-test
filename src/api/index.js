import axios from "axios";

const elastikaAPI = axios.create({
    baseURL: 'http://localhost:5000'
});

export { elastikaAPI };