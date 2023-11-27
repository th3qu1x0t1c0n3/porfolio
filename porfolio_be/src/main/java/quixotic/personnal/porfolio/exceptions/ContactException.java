package quixotic.personnal.porfolio.exceptions;

import static org.springframework.http.HttpStatus.I_AM_A_TEAPOT;

public class ContactException extends APIException{
    public ContactException(String message) {
        super(I_AM_A_TEAPOT, message);
    }
}
