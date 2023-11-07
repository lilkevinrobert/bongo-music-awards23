package tz.co.bongomusic.server.controlers;


import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tz.co.bongomusic.server.dto.JwtAuthenticationResponse;
import tz.co.bongomusic.server.dto.SignInRequest;
import tz.co.bongomusic.server.dto.SignUpRequest;
import tz.co.bongomusic.server.models.User;
import tz.co.bongomusic.server.service.AuthenticationService;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AuthenticationController {


    private final AuthenticationService authenticationService;

    @PostMapping("/signup")
    @CrossOrigin(origins = "*")
    public ResponseEntity<User> signUp(@RequestBody SignUpRequest signUpRequest){
        return ResponseEntity
                .ok(authenticationService.signUp(signUpRequest));
    }

    @PostMapping("/signin")
    @CrossOrigin(origins = "*")
    public ResponseEntity<JwtAuthenticationResponse> signIn(@RequestBody SignInRequest signInRequest){
        return ResponseEntity
                .ok(authenticationService.signIn(signInRequest));
    }
}
