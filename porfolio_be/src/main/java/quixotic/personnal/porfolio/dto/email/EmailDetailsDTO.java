package quixotic.personnal.porfolio.dto.email;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class EmailDetailsDTO {
    private String name;
    private String email;
    private String phoneNumber;
    private String message;
}
