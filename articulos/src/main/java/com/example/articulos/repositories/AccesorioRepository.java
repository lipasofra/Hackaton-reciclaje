package com.example.articulos.repositories;
import com.example.articulos.models.Accesorio;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface AccesorioRepository extends MongoRepository <Accesorio, String> {
    List<Accesorio> findByNombre(String nombre);

}