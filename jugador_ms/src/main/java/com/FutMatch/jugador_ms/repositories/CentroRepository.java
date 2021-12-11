package com.FutMatch.jugador_ms.repositories;

import com.FutMatch.jugador_ms.models.Centro;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CentroRepository extends MongoRepository <Centro, String> {
}