const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class SolicitudesAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.solicitudes_api_url;
    }
    async createSolicitud(solicitud) {
        reciclador = new Object(JSON.parse(JSON.stringify(solicitud)));
        return await this.post('/solicitud', solicitud);
    }
    async solicitudByReciclador(nombre) {
        return await this.get(`/solicitudes/${nombre}`);
    }
    async solicitudTodos() {
        return await this.get(`/listasolicitudes`);
    }
}
module.exports = SolicitudesAPI;