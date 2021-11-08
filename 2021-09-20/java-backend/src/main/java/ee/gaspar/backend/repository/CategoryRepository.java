package ee.gaspar.backend.repository;

import ee.gaspar.backend.model.Category;
import ee.gaspar.backend.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
}
