package com.FutMatch.jugador_ms.models;

import org.springframework.data.annotation.Id;

public class Centro {

    @Id
    private String nombreJefe;
    private String zona;
    private String direccion;
    private String telefono;

    public Centro(String nombreJefe, String zona, String direccion, String telefono) {
        this.nombreJefe = nombreJefe;
        this.zona = zona;
        this.direccion = direccion;
        this.telefono = telefono;
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
}
