const { gql } = require('apollo-server');

const solicitudesTypeDefs = gql `
    input CiudadanoTipoInput {
        nombre: String!
        telefono: String!
        email: String!
        zona: String!
    }

    type CiudadanoTipoOutput {
        nombre: String!
        telefono: String!
        email: String!
        zona: String!
    }

    input RecicladorTipoInput {
        nombre:  String!
        telefono: String!
        email: String!
        zona: String!
        material: String!
    }

    type RecicladorTipoOutput {
        nombre:  String!
        telefono: String!
        email: String!
        zona: String!
        material: String!
    }

    type Solicitud {
        id: String!
        ciudadano: [CiudadanoTipoOutput]
        reciclador: [RecicladorTipoOutput]
        date: String
        recicladornombre: String!    
    }
    input SolicitudInput {
        ciudadano: [CiudadanoTipoInput]
        reciclador: [RecicladorTipoInput]
        date: String
        recicladornombre: String! 
      
    }
    extend type Mutation {
        createSolicitud(solicitud: SolicitudInput!): Solicitud!
    }
    extend type Query {
        solicitudByReciclador(recicladornombre: String!): [Solicitud]!
        solicitudTodos(id: String): [Solicitud]!
        
    }
`;
module.exports = solicitudesTypeDefs;