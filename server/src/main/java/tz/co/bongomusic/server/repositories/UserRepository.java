package tz.co.bongomusic.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tz.co.bongomusic.server.models.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, String> {

    Optional<User> findUserByEmail(String email);
}
