package tz.co.bongomusic.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tz.co.bongomusic.server.models.Role;
import tz.co.bongomusic.server.models.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, String> {

    Optional<User> findByEmail(String email);
    User findByRole(Role role);
}
