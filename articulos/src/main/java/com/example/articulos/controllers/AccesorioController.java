package com.example.articulos.controllers;

import com.example.articulos.exceptions.AccesorioNotFoundException;
import com.example.articulos.models.Accesorio;
import com.example.articulos.repositories.AccesorioRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
public class AccesorioController {

    private final AccesorioRepository accesorioRepository;

    public AccesorioController(AccesorioRepository accesorioRepository) {
        this.accesorioRepository = accesorioRepository;
    }
    @GetMapping("/accesorio/{id}")
    Accesorio getAccesorio(@PathVariable String id){
        return accesorioRepository.findById(id)
                .orElseThrow(() -> new AccesorioNotFoundException("No se encontró un accesorio con el id: " + id));
    }

    @GetMapping("/accesorionombre/{nombre}")
    List<Accesorio> getAccesorioNombre(@PathVariable String nombre){

        List<Accesorio> accesorioNombre = accesorioRepository.findByNombre(nombre);

        return accesorioNombre;

    }
    @GetMapping("/accesorios")
    List<Accesorio> getAccesorios(){

        List<Accesorio> accesorioTodos = accesorioRepository.findAll();

        return accesorioTodos;

    }
    @PostMapping("/accesorio")
    Accesorio newAccesorio(@RequestBody Accesorio accesorio){
        return accesorioRepository.save(accesorio);
    }
}


