const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class CiudadanoAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.perfiles_api_url;
    }
    async createCiudadano(ciudadano) {
        ciudadano = new Object(JSON.parse(JSON.stringify(ciudadano)));
        return await this.post('/ciudadano', ciudadano);
    }
    
    
}
module.exports = CiudadanoAPI;