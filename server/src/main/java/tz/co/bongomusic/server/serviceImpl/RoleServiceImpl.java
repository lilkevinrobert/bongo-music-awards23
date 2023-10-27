package tz.co.bongomusic.server.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tz.co.bongomusic.server.models.Role;
import tz.co.bongomusic.server.repositories.RoleRepository;
import tz.co.bongomusic.server.service.RoleService;

@Service
public class RoleServiceImpl implements RoleService {

    private final RoleRepository roleRepository;

    @Autowired
    public RoleServiceImpl(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    @Override
    public Role createNewRole(Role role) {
        return roleRepository.save(role);
    }
}
