const ciudadanoResolver = {
    Query: {
        

    },
    Mutation: {
        createCiudadano: async (_, { ciudadano }, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (usernameToken)
                return dataSources.recicladorAPI.createCiudadano(ciudadano)
            else
                return null
        }



        }
    
};
module.exports = centroResolver;