package quixotic.personnal.porfolio.dto.auth;

import lombok.Data;

@Data
public class RegisterDTO {
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String email;
    private String password;
}
