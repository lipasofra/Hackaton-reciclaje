package com.FutMatch.jugador_ms.controllers;

import com.FutMatch.jugador_ms.exceptions.JugadorNotFoundException;
import com.FutMatch.jugador_ms.models.Centro;
import com.FutMatch.jugador_ms.models.Reciclador;
import com.FutMatch.jugador_ms.repositories.RecicladorRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RecicladorController {

    private final RecicladorRepository recicladorRepository;

    public RecicladorController(RecicladorRepository recicladorRepository) {
        this.recicladorRepository = recicladorRepository;
    }

    @GetMapping("/recicladormaterial/{material}")
    List<Reciclador> getRecicladorMaterial(@PathVariable String material){

        List<Reciclador> recicladorMaterial = recicladorRepository.findByMaterial(material);

        return recicladorMaterial;

    }

    @GetMapping("/recicladorzona/{zona}")
    List<Reciclador> getRecicladorZona(@PathVariable String zona){

        List<Reciclador> recicladorZona = recicladorRepository.findByZona(zona);

        return recicladorZona;

    }

    @GetMapping("/recicladores")
    List<Reciclador> getRecicladores(){

        List<Reciclador> recicladorTodos = recicladorRepository.findAll();

        return recicladorTodos;

    }

    @PostMapping("/reciclador")
    Reciclador newReciclador(@RequestBody Reciclador reciclador){
        return recicladorRepository.save(reciclador);
    }


}