package dev.treppmann.leetcode.problems;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProblemRepository extends MongoRepository<Problem, String> {
    Problem findProblemByProblemId(String problemId);
}
