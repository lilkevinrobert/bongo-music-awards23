package tz.co.bongomusic.server.dto;

import lombok.Getter;
import tz.co.bongomusic.server.models.User;

@Getter
public class JwtResponse {

    private User user;
    private String jwtToken;

    public JwtResponse(User user, String jwtToken) {
        this.user = user;
        this.jwtToken = jwtToken;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setJwtToken(String jwtToken) {
        this.jwtToken = jwtToken;
    }
}
