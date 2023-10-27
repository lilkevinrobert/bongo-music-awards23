package tz.co.bongomusic.server.dto;

import lombok.Getter;

@Getter
public class JwtRequest {

    private String userEmail;
    private String userPassword;

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }
}
