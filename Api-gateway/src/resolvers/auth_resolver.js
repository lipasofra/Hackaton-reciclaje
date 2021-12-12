const usersResolver = {
    Query: {
        userDetailById: (_, { userId }, { dataSources, userIdToken }) => {
            if (userId == userIdToken)
                return dataSources.authAPI.getUser(userId)
            else
                return null

        },
    },
    Mutation: {
        signUpCiudadano: async (_, { ciudadanoInput }, { dataSources }) => {
            const ciudadanoInfo = {
                nombre: ciudadanoInput.nombre,
                telefono: ciudadanoInput.telefono,
                email: ciudadanoInput.email,
                zona: ciudadanoInput.zona,
            }
            await dataSources.ciudadanoAPI.createCiudadano(ciudadanoInfo);
            const authInput = {
                username: ciudadanoInput.username,
                password: ciudadanoInput.password,
                name: ciudadanoInput.nombre,
                email: ciudadanoInput.email,
            }
            return await dataSources.authAPI.createUser(authInput);
        },
        signUpReciclador: async (_, { recicladorInput }, { dataSources }) => {
            const recicladorInfo = {
                nombre: recicladorInput.nombre,
                telefono: recicladorInput.telefono,
                email: recicladorInput.email,
                zona: recicladorInput.zona,
                material: recicladorInput.material,
            }
            await dataSources.recicladorAPI.createReciclador(recicladorInfo);
            const authInput = {
                username: recicladorInput.username,
                password: recicladorInput.password,
                name: recicladorInput.nombre,
                email: recicladorInput.email,
            }
            return await dataSources.authAPI.createUser(authInput);
        },
        signUpCentro: async (_, { centroInput }, { dataSources }) => {
            const centroInfo = {
                direccion: centroInput.direccion,
                telefono: centroInput.telefono,
                zona: centroInput.zona,
                nombreJefe: centroInput.nombreJefe,
                
            }
            await dataSources.centroAPI.createCentro(centroInfo);
            const authInput = {
                username: centroInput.username,
                password: centroInput.password,
                name: centroInput.direccion,
                email: centroInput.email,
            }
            return await dataSources.authAPI.createUser(authInput);
        },
        logIn: (_, { credentials }, { dataSources }) =>
            dataSources.authAPI.authRequest(credentials),
        refreshToken: (_, { refresh }, { dataSources }) =>
            dataSources.authAPI.refreshToken(refresh),

    }
};
module.exports = usersResolver;