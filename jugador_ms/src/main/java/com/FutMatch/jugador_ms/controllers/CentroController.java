package com.FutMatch.jugador_ms.controllers;

import com.FutMatch.jugador_ms.models.Centro;
import com.FutMatch.jugador_ms.repositories.CentroRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CentroController {

    private final CentroRepository centroRepository;

    public CentroController(CentroRepository centroRepository) {
        this.centroRepository = centroRepository;
    }

    @GetMapping("/centro/{zona}")
    List<Centro> getCentroZona(@PathVariable String zona){

        List<Centro> centrosZona = centroRepository.findByZona(zona);

        return centrosZona;

    }

    @GetMapping("/centros")
    List<Centro> getCentros(){

        List<Centro> centrosTodos = centroRepository.findAll();

        return centrosTodos;

    }

    @PostMapping("/centro")
    Centro newCentro(@RequestBody Centro centro){
        return centroRepository.save(centro);
    }


}