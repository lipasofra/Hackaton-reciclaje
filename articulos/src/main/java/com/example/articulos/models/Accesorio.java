package com.example.articulos.models;

import org.springframework.data.annotation.Id;
import java.util.Date;
public class Accesorio {
    @Id
    private String id;
    private String nombre;
    private Integer peso;
    private String estado;
    private String direccion;
    private String nombrePersona;
    private String telefono;

    public Accesorio(String id, String nombre, Integer peso, String estado, String direccion, String nombrePersona,
                     String telefono) {
        this.id= id;
        this.nombre = nombre;
        this.peso = peso;
        this.estado = estado;
        this.direccion = direccion;
        this.nombrePersona = nombrePersona;
        this.telefono = telefono;
    }


    public String getId() {
        return id;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public Integer getPeso() {
        return peso;
    }

    public void setPeso(Integer peso) {
        this.peso = peso;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getNombrePersona() {
        return nombrePersona;
    }

    public void setNombrePersona(String nombrePersona) {
        this.nombrePersona = nombrePersona;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }
}
