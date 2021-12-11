package com.FutMatch.jugador_ms.controllers;

import com.FutMatch.jugador_ms.exceptions.JugadorNotFoundException;
import com.FutMatch.jugador_ms.models.Reciclador;
import com.FutMatch.jugador_ms.repositories.RecicladorRepository;
import org.springframework.web.bind.annotation.*;

@RestController
public class RecicladorController {

    private final RecicladorRepository recicladorRepository;

    public RecicladorController(RecicladorRepository recicladorRepository) {
        this.recicladorRepository = recicladorRepository;
    }

    @GetMapping("/reciclador/{nombre}")
    Reciclador getReciclador(@PathVariable String nombre){
        return recicladorRepository.findById(nombre)
                .orElseThrow(() -> new JugadorNotFoundException("No se encontró un jugador con el nombre: " + nombre));
    }

    @PostMapping("/reciclador")
    Reciclador newReciclador(@RequestBody Reciclador reciclador){
        return recicladorRepository.save(reciclador);
    }


}