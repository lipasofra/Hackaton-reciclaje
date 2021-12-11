const { gql } = require('apollo-server');

const ciudadanoTypeDefs = gql `
    type Ciudadano {
        nombre: String!
        telefono: String!
        email: String!
        zona: String!
    }
    input CiudadanoInput {
        nombre: String!
        telefono: String!
        email: String!
        zona: String!
      
    }
    extend type Mutation {
        createCiudadano(ciudadano: CiudadanoInput!): Reciclador!
    }
`;
module.exports = ciudadanoTypeDefs;