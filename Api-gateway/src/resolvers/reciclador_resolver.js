const recicladorResolver = {
    Query: {
        recicladorByZona: async (_, { zona }, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (usernameToken)
                return dataSources.recicladorAPI.recicladorByZona(zona)
            else
                return null

        },
        recicladorByMaterial: async (_, { material }, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (usernameToken)
                return dataSources.recicladorAPI.recicladorByMateria(material)
            else
                return null

        },
        recicladorTodos: async (_, { }, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (usernameToken)
                return dataSources.recicladorAPI.recicladorTodos()
            else
                return null

        },
    }
    
};
module.exports = recicladorResolver;