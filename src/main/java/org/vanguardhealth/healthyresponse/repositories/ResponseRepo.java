package org.vanguardhealth.healthyresponse.repositories;

import org.springframework.data.repository.CrudRepository;
import org.vanguardhealth.healthyresponse.models.Mood;
import org.vanguardhealth.healthyresponse.models.Response;

import java.util.Optional;

public interface ResponseRepo extends CrudRepository<Response,Long> {
    Optional<Response> findByMood(Mood moodSelected);
}
