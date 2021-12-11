const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const CiudadanoAPI = require('./dataSources/ciudadano_api');
const RecicladorAPI = require('./dataSources/reciclador_api');
const CentroAPI = require('./dataSources/centro_api');
const AuthAPI = require('./dataSources/auth_api');
const authentication = require('./utils/authentication');

const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    dataSources: () => ({
        ciudadanoAPI: new CiudadanoAPI(),
        centroAPI: new CentroAPI(),
        recicladorAPI: new RecicladorAPI(),
        authAPI: new AuthAPI(),
    }),
    introspection: true,
    playground: true
});
server.listen(process.env.PORT || 4000).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});