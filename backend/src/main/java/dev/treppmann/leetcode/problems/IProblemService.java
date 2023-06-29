package dev.treppmann.leetcode.problems;

import java.util.List;

public interface IProblemService {
    List<ProblemOverviewDTO> getProblems();
    ProblemDTO getProblemById(String problemId);
}
