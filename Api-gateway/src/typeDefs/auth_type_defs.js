const { gql } = require('apollo-server');

const authTypeDefs = gql`
    type Tokens {
        refresh: String!
        access: String!
    }
    type Access {
        access: String!
    }
    input CredentialsInput {
        username: String!
        password: String!
    }
    input SignUpCiudadanoInput {
        username: String!
        password: String!
        nombre: String!
        telefono: String!
        email: String!
        zona: String!
           
    }
    input SignUpRecicladorInput {
        username: String!
        password: String!
        nombre: String!
        telefono: String!
        email: String!
        zona: String!
        material: String!
           
    }
    input SignUpCentroInput {
        username: String!
        password: String!
        direccion: String!
        telefono: String!
        zona: String!
        nombreJefe: String!
           
    }
    type UserDetail {
        id: Int!
        username: String!
        password: String!
        name: String!
        email: String!
    }
    type Mutation {
        signUpCiudadano(ciudadanoInput: SignUpCiudadanoInput!): Tokens!
        signUpReciclador(recicladorInput: SignUpRecicladorInput!): Tokens!
        signUpCentro(centroInput: SignUpCentroInput!): Tokens!
        logIn(credentials: CredentialsInput!): Tokens!
        refreshToken(refresh: String!): Access!
        }
    type Query {
        userDetailById(userId: Int!): UserDetail!
       }
`;
module.exports = authTypeDefs;