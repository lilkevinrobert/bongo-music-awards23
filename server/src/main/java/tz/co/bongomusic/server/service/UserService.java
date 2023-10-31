package tz.co.bongomusic.server.service;

import org.springframework.security.core.userdetails.UserDetailsService;
import tz.co.bongomusic.server.models.User;

public interface UserService {


    UserDetailsService userDetailsService();
}
