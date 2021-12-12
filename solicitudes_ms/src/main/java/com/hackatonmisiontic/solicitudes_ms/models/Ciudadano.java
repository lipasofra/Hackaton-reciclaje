package com.hackatonmisiontic.solicitudes_ms.models;

import org.springframework.data.annotation.Id;

public class Ciudadano {

    @Id
    private String nombre;
    private String telefono;
    private String email;
    private String zona;

    public Ciudadano(String nombre, String telefono, String email, String zona) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
        this.zona = zona;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getZona() {
        return zona;
    }

    public void setZona(String zona) {
        this.zona = zona;
    }
}
