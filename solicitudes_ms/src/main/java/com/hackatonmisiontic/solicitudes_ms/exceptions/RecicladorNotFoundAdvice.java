package com.hackatonmisiontic.solicitudes_ms.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
@ResponseBody

public class RecicladorNotFoundAdvice {
    @ResponseBody
    @ExceptionHandler(RecicladorNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String EntityNotFoundAdvice(RecicladorNotFoundException ex){
        return ex.getMessage();
    }
}
