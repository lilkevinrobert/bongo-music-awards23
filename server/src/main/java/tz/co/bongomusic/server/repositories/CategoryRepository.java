package tz.co.bongomusic.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tz.co.bongomusic.server.models.Category;

import java.util.Optional;

public interface CategoryRepository extends JpaRepository<Category, String> {

    Optional<Category> findCategoryById(String id);

    boolean existsById(String id);
}
