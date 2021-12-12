package com.FutMatch.jugador_ms.repositories;

import com.FutMatch.jugador_ms.models.Centro;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface CentroRepository extends MongoRepository <Centro, String> {
    List<Centro> findByZona(String zona);
}