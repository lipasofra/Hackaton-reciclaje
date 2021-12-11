package com.example.articulos.controllers;

import com.example.articulos.exceptions.AccesorioNotFoundException;
import com.example.articulos.models.Accesorio;
import com.example.articulos.repositories.AccesorioRepository;
import org.springframework.web.bind.annotation.*;

@RestController
public class AccesorioController {

    private final AccesorioRepository accesorioRepository;

    public AccesorioController(AccesorioRepository accountRepository) {
        this.accesorioRepository = accesorioRepository;
    }
    @GetMapping("/accesorio/{nombre}")
    Accesorio getAccesorio(@PathVariable String nombre){
        return accesorioRepository.findById(nombre)
                .orElseThrow(() -> new AccesorioNotFoundException("No se encontró un accesorio con el nombre: " + nombre));
    }
    @PostMapping("/accesorio")
    Accesorio newAccesorio(@RequestBody Accesorio accesorio){
        return accesorioRepository.save(accesorio);
    }
}


