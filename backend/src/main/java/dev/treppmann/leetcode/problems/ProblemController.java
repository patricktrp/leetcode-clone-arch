package dev.treppmann.leetcode.problems;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/problems")
public class ProblemController {
    private final IProblemService problemService;

    public ProblemController(IProblemService problemService) {
        this.problemService = problemService;
    }
}
