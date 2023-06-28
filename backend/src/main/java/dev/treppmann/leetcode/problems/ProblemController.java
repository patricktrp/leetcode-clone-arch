package dev.treppmann.leetcode.problems;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/problems")
public class ProblemController {
    private final IProblemService problemService;

    public ProblemController(IProblemService problemService) {
        this.problemService = problemService;
    }

    @GetMapping
    public ResponseEntity<List<ProblemOverviewDTO>> getProblems() {
        List<ProblemOverviewDTO> problems = problemService.getProblems();
        return ResponseEntity.ok(problems);
    }

    @GetMapping("/{problemId}")
    public ResponseEntity<ProblemDTO> getProblemById(@PathVariable("problemId") String problemId) {
        System.out.println(problemId);
        return null;
    }
}
