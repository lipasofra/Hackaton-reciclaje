package com.FutMatch.jugador_ms.controllers;

import com.FutMatch.jugador_ms.exceptions.JugadorNotFoundException;
import com.FutMatch.jugador_ms.models.Centro;
import com.FutMatch.jugador_ms.repositories.CentroRepository;
import org.springframework.web.bind.annotation.*;

@RestController
public class CentroController {

    private final CentroRepository centroRepository;

    public CentroController(CentroRepository centroRepository) {
        this.centroRepository = centroRepository;
    }

    @GetMapping("/centro/{zona}")
    Centro getCentro(@PathVariable String zona){
        return centroRepository.findById(zona)
                .orElseThrow(() -> new JugadorNotFoundException("No se encontró un jugador con el nombre: " + nombre));
    }

    @PostMapping("/ciudadano")
    Centro newCentro(@RequestBody Centro centro){
        return centroRepository.save(centro);
    }


}