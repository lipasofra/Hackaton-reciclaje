package com.hackatonmisiontic.solicitudes_ms.repositories;

import com.hackatonmisiontic.solicitudes_ms.models.Solicitud;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface SolicitudRepository extends MongoRepository<Solicitud, String>{

    List<Solicitud> findByReciclador (String reciclador);
}
