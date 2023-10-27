package tz.co.bongomusic.server.controlers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import tz.co.bongomusic.server.models.User;
import tz.co.bongomusic.server.serviceImpl.UserServiceImpl;

import javax.annotation.PostConstruct;

@RestController
@RequestMapping("api/v1/users")
@CrossOrigin
public class UserController {


    private final UserServiceImpl userService;

    @Autowired
    public UserController(UserServiceImpl userService) {
        this.userService = userService;
    }

    @GetMapping("/password")
    @ResponseStatus(HttpStatus.OK)
    public String getEncodedPassword(){
        return userService.getEncodedPassword("kelvin");
    }


    @PostMapping("/createNewUser")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<User> createNewUser(@RequestBody User user){
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(userService.createNewUser(user));
    }
}
