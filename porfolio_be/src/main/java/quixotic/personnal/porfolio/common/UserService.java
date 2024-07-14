package quixotic.personnal.porfolio.common;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.MailAuthenticationException;
import org.springframework.mail.MailSendException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import quixotic.personnal.porfolio.authentication.Role;
import quixotic.personnal.porfolio.authentication.User;
import quixotic.personnal.porfolio.dto.auth.LoginDTO;
import quixotic.personnal.porfolio.dto.auth.RegisterDTO;
import quixotic.personnal.porfolio.dto.email.EmailDetailsDTO;
import quixotic.personnal.porfolio.exceptions.ContactException;
import quixotic.personnal.porfolio.repository.UserRepository;
import quixotic.personnal.porfolio.security.JwtTokenProvider;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider jwtTokenProvider;
    private final JavaMailSender javaMailSender;

    @Value("${spring.mail.username}")
    private final static String MyEmail = "lokolokololo41@gmail.com";

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

    public String sendMessage(EmailDetailsDTO emailInfo){
        MimeMessage message = javaMailSender.createMimeMessage();
        try {
            MimeMessageHelper helper = new MimeMessageHelper(message, true);
            helper.setFrom(MyEmail);
            helper.setTo(MyEmail);
            helper.setSubject(emailInfo.getName());
            helper.setText(getString(emailInfo), true);
            javaMailSender.send(message);
        } catch (MessagingException e) {
            throw new RuntimeException(e);
        } catch (MailSendException | MailAuthenticationException e){
            System.out.println(e.getMessage());
            throw new ContactException("Message not sent: " + e.getMessage());
        }
        return "Message sent";
    }

    private static String getString(EmailDetailsDTO emailInfo) {
        return "<html>" +
                "<head>" +
                "<title>portfolio</title>" +
                "</head>" +
                "<body>" +
                "<h1>Contact Portfolio</h1>" +
                "<h2>Message de " + emailInfo.getName() + "</h2>" +
                "<div>" +
                "<p>" + emailInfo.getMessage() + "</p>" +
                "</div>" +
                "</body>" +
                "</html>";
    }
}
