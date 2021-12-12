const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class SegundaAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.segunda_api_url;
    }
    async createArticulo(articulo) {
        articulo = new Object(JSON.parse(JSON.stringify(articulo)));
        return await this.post('/accesorio', articulo);
    }
    async articuloById(id) {
        return await this.get(`/accesorio/${id}`);
    }
    async articuloByNombre(nombre) {
        return await this.get(`/accesorionombre/${nombre}`);
    }
    async articuloTodos() {
        return await this.get(`/accesorios`);
    }
}
module.exports = SegundaAPI;