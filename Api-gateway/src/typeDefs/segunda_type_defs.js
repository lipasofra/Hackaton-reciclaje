const { gql } = require('apollo-server');

const segundaTypeDefs = gql `
    type Articulo {
        id: String!
        nombre: String!
        peso: Int!
        estado: String!
        direccion: String!
        nombrePersona: String!
        telefono: String!
    }
    input ArticuloInput {
        nombre: String!
        peso: Int!
        estado: String!
        direccion: String!
        nombrePersona: String!
        telefono: String!
      
    }
    extend type Mutation {
        createArticulo(articulo: ArticuloInput!): Articulo!
    }
    extend type Query {
        articuloById(id: String!): Articulo!
        articuloByNombre(nombre: String!): [Articulo]!
        articuloTodos(id: String): [Articulo]!
        
    }
`;
module.exports = segundaTypeDefs;