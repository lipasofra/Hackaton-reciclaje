package com.example.articulos.exceptions;

public class AccesorioNotFoundException extends RuntimeException{
    public AccesorioNotFoundException(String message){
        super(message);
    }
}
