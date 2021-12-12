package com.FutMatch.jugador_ms.models;

import org.springframework.data.annotation.Id;

public class Centro {

    @Id
    private String direccion;
    private String telefono;
    private String zona;
    private String nombreJefe;
    private String email;

    public Centro(String nombreJefe, String zona, String direccion, String telefono, String email) {
        this.nombreJefe = nombreJefe;
        this.zona = zona;
        this.direccion = direccion;
        this.telefono = telefono;
        this.email= email;
    }

    public String getNombreJefe() {
        return nombreJefe;
    }

    public void setNombreJefe(String nombreJefe) {
        this.nombreJefe = nombreJefe;
    }

    public String getZona() {
        return zona;
    }

    public void setZona(String zona) {
        this.zona = zona;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
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
}
