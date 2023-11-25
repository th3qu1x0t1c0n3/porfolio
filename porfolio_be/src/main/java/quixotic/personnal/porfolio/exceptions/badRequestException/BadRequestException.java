package quixotic.personnal.porfolio.exceptions.badRequestException;

import quixotic.personnal.porfolio.exceptions.APIException;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

public class BadRequestException extends APIException {
    public BadRequestException(String message) {
        super(BAD_REQUEST, message);
    }
}
