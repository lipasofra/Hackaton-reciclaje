const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class RecicladorAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.perfiles_api_url;
    }
    async createReciclador(reciclador) {
        reciclador = new Object(JSON.parse(JSON.stringify(reciclador)));
        return await this.post('/reciclador', reciclador);
    }
    async recicladorByZona(zona) {
        return await this.get(`/recicladorzona/${zona}`);
    }
    async recicladorByMaterial(material) {
        return await this.get(`/recicladormaterial/${material}`);
    }
    async recicladorTodos() {
        return await this.get(`/recicladores`);
    }
}
module.exports = RecicladorAPI;