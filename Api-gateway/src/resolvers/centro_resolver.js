const centroResolver = {
    Query: {
        centroByZona: async (_, { zona }, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (usernameToken)
                return dataSources.centroAPI.centroByZona(zona)
            else
                return null

        },
        centroTodos: async (_, { }, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (usernameToken)
                return dataSources.recicladorAPI.centroTodos()
            else
                return null

        },
    },
    Mutation: {
        createCentro: async (_, { centro }, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (usernameToken)
                return dataSources.recicladorAPI.createCentro(centro)
            else
                return null
        }



        }
    
};
module.exports = centroResolver;