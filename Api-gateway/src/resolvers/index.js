const centroResolver = require('./centro_resolver');
const recicladorResolver = require('./reciclador_resolver');
const authResolver = require('./auth_resolver');
const segundaResolver = require('./segunda_resolver');
const lodash = require('lodash');
const resolvers = lodash.merge(centroResolver, recicladorResolver, authResolver, segundaResolver);
module.exports = resolvers;