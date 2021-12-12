const { gql } = require('apollo-server');
const recicladorTypeDefs = gql `
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
        centroTodos(): [Centro]!
    }
    extend type Mutation {
        createCentro(centro: CentroInput!): Centro!
    }
`;
module.exports = centroTypeDefs;