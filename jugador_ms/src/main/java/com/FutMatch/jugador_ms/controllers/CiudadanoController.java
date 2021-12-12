package com.FutMatch.jugador_ms.controllers;

import com.FutMatch.jugador_ms.exceptions.JugadorNotFoundException;
import com.FutMatch.jugador_ms.models.Ciudadano;
import com.FutMatch.jugador_ms.repositories.CiudadanoRepository;
import org.springframework.web.bind.annotation.*;

@RestController
public class CiudadanoController {

    private final CiudadanoRepository ciudadanoRepository;

    public CiudadanoController(CiudadanoRepository ciudadanoRepository) {
        this.ciudadanoRepository = ciudadanoRepository;
    }

    @GetMapping("/ciudadano/{nombre}")
    Ciudadano getCiudadano(@PathVariable String nombre){
        return ciudadanoRepository.findById(nombre)
                .orElseThrow(() -> new JugadorNotFoundException("No se encontró un jugador con el nombre: " + nombre));
    }

    @PostMapping("/ciudadano")
    Ciudadano newCiudadano(@RequestBody Ciudadano ciudadano){
        return ciudadanoRepository.save(ciudadano);
    }


}
