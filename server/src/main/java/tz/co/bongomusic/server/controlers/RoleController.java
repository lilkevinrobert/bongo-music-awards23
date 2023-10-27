package tz.co.bongomusic.server.controlers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tz.co.bongomusic.server.models.Role;
import tz.co.bongomusic.server.serviceImpl.RoleServiceImpl;

@RestController
@RequestMapping("api/v1/roles")
public class RoleController {
    private final RoleServiceImpl roleService;
    @Autowired
    public RoleController(RoleServiceImpl roleService) {
        this.roleService = roleService;
    }

    @PostMapping("/createNewRole")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Role> createNewRole(@RequestBody Role role){
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(roleService.createNewRole(role));
    }
}
