package quixotic.personnal.porfolio.exceptions.goneRequestException;

import quixotic.personnal.porfolio.exceptions.APIException;

import static org.springframework.http.HttpStatus.GONE;

public class GoneRequestException extends APIException {
    public GoneRequestException(String message) {
        super(GONE, message);
    }
}
