const solicitudesResolver = {
    Query: {
        solicitudByReciclador: async (_, { nombre }, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (usernameToken)
                return dataSources.solicitudesAPI.solicitudByReciclador(nombre)
            else
                return null

        },
        solicitudTodos: async (_, { }, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (usernameToken)
                return dataSources.solicitudesAPI.solicitudTodos()
            else
                return null

        },
    },
    Mutation: {
        
        createSolicitud: async(_, { solicitud }, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (usernameToken)
                return dataSources.solicitudesAPI.createSolicitud(solicitud)
            else
                return null
    
        }

        }
    
};
module.exports = solicitudesResolver;