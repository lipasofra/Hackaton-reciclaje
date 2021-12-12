package com.hackatonmisiontic.solicitudes_ms.controllers;

import com.hackatonmisiontic.solicitudes_ms.exceptions.RecicladorNotFoundException;
import com.hackatonmisiontic.solicitudes_ms.models.Solicitud;
import com.hackatonmisiontic.solicitudes_ms.repositories.SolicitudRepository;
import org.springframework.web.bind.annotation.*;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;


@RestController
public class SolicitudController {
    private final SolicitudRepository solicitudRepository;

    public SolicitudController(SolicitudRepository solicitudRepository) {
        this.solicitudRepository = solicitudRepository;
    }

    @GetMapping("/listaSolicitudes")
    List<Solicitud> getSolicitud(){
        List<Solicitud> solicitudTodos = solicitudRepository.findAll();
        return solicitudTodos;
    }

    @PostMapping("/solicitud")
    Solicitud newSolicitud(@RequestBody Solicitud solicitud){
        return solicitudRepository.save(solicitud);
    }
}
