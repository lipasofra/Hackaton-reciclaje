package com.FutMatch.jugador_ms.repositories;

import com.FutMatch.jugador_ms.models.Ciudadano;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CiudadanoRepository extends MongoRepository <Ciudadano, String> {
}
