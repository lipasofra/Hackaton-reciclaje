package com.hackatonmisiontic.solicitudes_ms.models;
import org.springframework.data.annotation.Id;
import java.util.Date;

public class Solicitud {
    @Id
    private String id;
    private Ciudadano ciudadanoOrigin;
    private Reciclador recicladorDestiny;
    private Date date;
    private String reciclador;

    public Solicitud(String id, Ciudadano ciudadanoOrigin, Reciclador recicladorDestiny, Date date, String reciclador) {
        this.id = id;
        this.ciudadanoOrigin = ciudadanoOrigin;
        this.recicladorDestiny = recicladorDestiny;
        this.date = date;
        this.reciclador= reciclador;
    }

    public String getReciclador() {
        return reciclador;
    }

    public void setReciclador(String reciclador) {
        this.reciclador = reciclador;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Ciudadano getCiudadanoOrigin() {
        return ciudadanoOrigin;
    }

    public void setCiudadanoOrigin(Ciudadano ciudadanoOrigin) {
        this.ciudadanoOrigin = ciudadanoOrigin;
    }

    public Reciclador getRecicladorDestiny() {
        return recicladorDestiny;
    }

    public void setRecicladorDestiny(Reciclador recicladorDestiny) {
        this.recicladorDestiny = recicladorDestiny;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}


