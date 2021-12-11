package com.FutMatch.jugador_ms.repositories;

import com.FutMatch.jugador_ms.models.Reciclador;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RecicladorRepository extends MongoRepository <Reciclador, String> {
}