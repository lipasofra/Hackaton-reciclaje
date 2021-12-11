package com.FutMatch.jugador_ms.repositories;

import com.FutMatch.jugador_ms.models.Centro;
import com.FutMatch.jugador_ms.models.Reciclador;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface RecicladorRepository extends MongoRepository <Reciclador, String> {
    List<Reciclador> findByMaterial(String material);
    List<Reciclador> findByZona(String zona);
}