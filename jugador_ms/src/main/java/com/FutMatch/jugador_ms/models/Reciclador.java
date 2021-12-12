package com.FutMatch.jugador_ms.models;

import org.springframework.data.annotation.Id;

public class Reciclador {

    @Id
    private String nombre;
    private String telefono;
    private String email;
    private String zona;
    private String material;

    public Reciclador(String nombre, String telefono, String email, String zona, String material) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
        this.zona = zona;
        this.material = material;
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

    public String getMaterial() {
        return material;
    }

    public void setMaterial(String material) {
        this.material = material;
    }


}