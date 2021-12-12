const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class CentroAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.perfiles_api_url;
    }
    async createCentro(centro) {
        centro = new Object(JSON.parse(JSON.stringify(centro)));
        return await this.post('/centro', centro);
    }
    async centroByZona(zona) {
        return await this.get(`/centro/${zona}`);
    }
    async centroTodos() {
        return await this.get(`/centros`);
    }
}
module.exports = CentroAPI;