const segundaResolver = {
    Query: {
        articuloByNombre: async (_, { nombre }, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (usernameToken)
                return dataSources.segundaAPI.articuloByNombre(nombre)
            else
                return null

        },
        articuloById: async (_, { id }, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (usernameToken)
                return dataSources.segundaAPI.articuloById(id)
            else
                return null

        },
        articuloTodos: async (_, { }, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (usernameToken)
                return dataSources.segundaAPI.articuloTodos()
            else
                return null

        },
    },
    Mutation: {
        
        createArticulo: async(_, { articulo }, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (usernameToken)
                return dataSources.segundaAPI.createArticulo(articulo)
            else
                return null
    
        }

        }
    
};
module.exports = segundaResolver;