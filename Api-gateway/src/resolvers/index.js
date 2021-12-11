const centroResolver = require('./centro_resolver');
const ciudadanoResolver = require('./ciudadano_resolver');
const recicladorResolver = require('./reciclador_resolver');
const authResolver = require('./auth_resolver');
const lodash = require('lodash');
const resolvers = lodash.merge(centroResolver, ciudadanoResolver, recicladorResolver, authResolver);
module.exports = resolvers;