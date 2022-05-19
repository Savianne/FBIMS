const axios = require('axios');
const config = require('./config');


class Request {
    proxy = config.proxy;
    cors = config.cors;

    createUrl(path) {
        return this.cors? this.proxy + path : path;
    }

    async getReq(path) {
        try {
            const res = await axios.get(this.createUrl(path));
            const data = res.data;
            return data;
        } catch(exception) {
            return {ok: false, error: {message: exception.message, code: 404}};
        }
            
    }

    async postReq(path, payload) {
        try {
            let res = await axios.post(this.createUrl(path), payload);
            let data = res.data;
            return data;
        } catch(exception) {
            console.log(exception)
        }
    }
}

module.exports = Request;