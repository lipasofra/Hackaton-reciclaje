package com.hackatonmisiontic.solicitudes_ms.models;
import org.springframework.data.annotation.Id;
import java.util.Date;

public class Solicitud {
    @Id
    private String id;
    private String ciudadanoOrigin;
    private String recicladorDestiny;
    private Date date;

    public Solicitud(String id, String ciudadanoOrigin, String recicladorDestiny, Date date) {
        this.id = id;
        this.ciudadanoOrigin = ciudadanoOrigin;
        this.recicladorDestiny = recicladorDestiny;
        this.date = date;
    }

    public String getId() {
        return id;
    }

    public String getCiudadanoOrigin() {
        return ciudadanoOrigin;
    }

    public void setCiudadanoOrigin(String ciudadanoOrigin) {
        this.ciudadanoOrigin = ciudadanoOrigin;
    }

    public String getRecicladorDestiny() {
        return recicladorDestiny;
    }

    public void setRecicladorDestiny(String recicladorDestiny) {
        this.recicladorDestiny = recicladorDestiny;
    }

    public Date getDate() {
        return date;
    }
    public void setDate(Date date) {
        this.date = date;
    }
}


