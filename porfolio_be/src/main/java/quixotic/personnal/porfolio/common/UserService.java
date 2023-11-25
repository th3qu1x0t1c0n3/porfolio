package quixotic.personnal.porfolio.common;

import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import quixotic.personnal.porfolio.authentication.Role;
import quixotic.personnal.porfolio.authentication.User;
import quixotic.personnal.porfolio.dto.auth.LoginDTO;
import quixotic.personnal.porfolio.dto.auth.RegisterDTO;
import quixotic.personnal.porfolio.repository.UserRepository;
import quixotic.personnal.porfolio.security.JwtTokenProvider;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider jwtTokenProvider;

    public String authenticateUser(LoginDTO loginDto){
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginDto.getEmail(), loginDto.getPassword()));
        return jwtTokenProvider.generateToken(authentication);
    }

    public String registerUser(RegisterDTO registerDTO){
        return userRepository.save(User.builder()
                .firstName(registerDTO.getFirstName())
                .lastName(registerDTO.getLastName())
                .phoneNumber(registerDTO.getPhoneNumber())
                .role(Role.VISITOR)
                .email(registerDTO.getEmail())
                .password(passwordEncoder.encode(registerDTO.getPassword()))
                .build()).getEmail();
    }

}
