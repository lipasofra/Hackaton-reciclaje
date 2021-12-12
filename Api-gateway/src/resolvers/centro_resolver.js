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
                return dataSources.centroAPI.centroTodos()
            else
                return null

        },
    }



           
};
module.exports = centroResolver;