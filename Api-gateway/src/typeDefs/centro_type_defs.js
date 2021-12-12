const { gql } = require('apollo-server');

const centroTypeDefs = gql `
    type Centro {
        direccion: String!
        telefono: String!
        zona: String!
        nombreJefe: String!        
    }
    input CentroInput {
        direccion: String!
        telefono: String!
        zona: String!
        nombreJefe: String!
      
    }
    extend type Query {
        centroByZona(zona: String!): [Centro]!
        centroTodos(zona: String): [Centro]!
    }
    extend type Mutation {
        createCentro(centro: CentroInput!): Centro!
    }
`;
module.exports = centroTypeDefs;