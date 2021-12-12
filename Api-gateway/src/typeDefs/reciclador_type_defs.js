const { gql } = require('apollo-server');

const recicladorTypeDefs = gql `
    type Reciclador {
        nombre: String!
        telefono: String!
        email: String!
        zona: String!
        material: String!
        
        
    }
    
    extend type Query {
        recicladorByZona(zona: String!): [Reciclador]!
        recicladorByMaterial(material: String!): [Reciclador]!
        recicladorTodos(zona: String): [Reciclador]!
    }
    
`;
module.exports = recicladorTypeDefs;