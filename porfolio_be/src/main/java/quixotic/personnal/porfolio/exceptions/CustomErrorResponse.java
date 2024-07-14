package quixotic.personnal.porfolio.exceptions;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@AllArgsConstructor
@Builder
public class CustomErrorResponse {
    private String timestamp;
    private int status;
    private String message;
    private String path;
}
