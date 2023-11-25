package quixotic.personnal.porfolio.exceptions.badRequestException;

public class InvalidJwtException extends BadRequestException {
    public InvalidJwtException(String message) {
        super(message);
    }
}
