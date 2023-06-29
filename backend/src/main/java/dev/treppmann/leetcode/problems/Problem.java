package dev.treppmann.leetcode.problems;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "problems")
@Data
public class Problem {
    @Id
    private String id;
    private String problemId;
    private Difficulty difficulty;
}
