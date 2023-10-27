package tz.co.bongomusic.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tz.co.bongomusic.server.models.Role;

public interface RoleRepository extends JpaRepository<Role, String> {


}
