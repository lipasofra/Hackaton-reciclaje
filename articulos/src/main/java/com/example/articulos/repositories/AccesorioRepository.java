package com.example.articulos.repositories;
import com.example.articulos.models.Accesorio;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AccesorioRepository extends MongoRepository <Accesorio, String> { }