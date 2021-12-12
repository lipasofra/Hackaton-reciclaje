//Se llama al typedef (esquema) de cada submodulo
const centroTypeDefs = require('./centro_type_defs');
const ciudadanoTypeDefs = require('./ciudadano_type_defs');
const recicladorTypeDefs = require('./reciclador_type_defs');
const authTypeDefs = require('./auth_type_defs');
const segundaTypeDefs = require('./segunda_type_defs');
//Se unen
const schemasArrays = [authTypeDefs, centroTypeDefs, ciudadanoTypeDefs, recicladorTypeDefs, segundaTypeDefs];
//Se exportan
module.exports = schemasArrays;