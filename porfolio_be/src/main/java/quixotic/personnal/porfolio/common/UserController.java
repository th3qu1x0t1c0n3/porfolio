package quixotic.personnal.porfolio.common;

import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import quixotic.personnal.porfolio.dto.auth.JWTAuthResponse;
import quixotic.personnal.porfolio.dto.auth.LoginDTO;
import quixotic.personnal.porfolio.dto.auth.RegisterDTO;

@RestController
@RequestMapping("/api/portfolio/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    @PostMapping("/login")
    public ResponseEntity<JWTAuthResponse> authenticateUser(@RequestBody LoginDTO loginDTO){
        return ResponseEntity.accepted().contentType(MediaType.APPLICATION_JSON).body(
                new JWTAuthResponse(userService.authenticateUser(loginDTO)));
    }

    @PostMapping("/register")
    public ResponseEntity<JWTAuthResponse> registerUser(@RequestBody RegisterDTO registerDTO){
        return ResponseEntity.accepted().contentType(MediaType.APPLICATION_JSON).body(
                new JWTAuthResponse(userService.registerUser(registerDTO)));
    }
}
