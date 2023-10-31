package tz.co.bongomusic.server.serviceImpl;

import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import tz.co.bongomusic.server.dto.JwtAuthenticationResponse;
import tz.co.bongomusic.server.dto.SignInRequest;
import tz.co.bongomusic.server.dto.SignUpRequest;
import tz.co.bongomusic.server.models.Role;
import tz.co.bongomusic.server.models.User;
import tz.co.bongomusic.server.repositories.UserRepository;
import tz.co.bongomusic.server.service.AuthenticationService;
import tz.co.bongomusic.server.service.JWTService;

import java.util.HashMap;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JWTService jwtService;

    public User signUp(SignUpRequest signUpRequest){
        User user = new User();
        user.setUserId(UUID.randomUUID().toString());
        user.setEmail(signUpRequest.getEmail());
        user.setFirstname(signUpRequest.getFirstname());
        user.setLastname(signUpRequest.getLastname());
        user.setRole(Role.USER);
        user.setPassword(passwordEncoder.encode(signUpRequest.getPassword()));
        return userRepository.save(user);
    }


    public JwtAuthenticationResponse signIn(SignInRequest signInRequest){
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(signInRequest.getEmail(), signInRequest.getPassword()));
        var user = userRepository.findByEmail(signInRequest.getEmail())
                .orElseThrow(()-> new IllegalArgumentException("Invalid email or password"));

        var jwt = jwtService.generateToken(user);
        var refreshToken = jwtService.generateRefreshToken(new HashMap<>(), user);

        JwtAuthenticationResponse jwtAuthenticationResponse = new JwtAuthenticationResponse();
        jwtAuthenticationResponse.setToken(jwt);
        jwtAuthenticationResponse.setRefreshToken(refreshToken);
        return jwtAuthenticationResponse;
    }


}
