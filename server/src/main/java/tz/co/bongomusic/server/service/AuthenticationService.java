package tz.co.bongomusic.server.service;


import tz.co.bongomusic.server.dto.JwtAuthenticationResponse;
import tz.co.bongomusic.server.dto.SignInRequest;
import tz.co.bongomusic.server.dto.SignUpRequest;
import tz.co.bongomusic.server.models.User;

public interface AuthenticationService {
    User signUp(SignUpRequest signUpRequest);
    JwtAuthenticationResponse signIn(SignInRequest signInRequest);
}
