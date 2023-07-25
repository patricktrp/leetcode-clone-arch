package dev.treppmann.leetcode.problems;

import java.util.Map;

public record ProblemDTO(String id, Difficulty difficulty, Map<String, Object> prompt) {
}
