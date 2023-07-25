package dev.treppmann.leetcode.problems;

import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProblemService implements IProblemService{
    private final ProblemRepository problemRepository;

    public ProblemService(ProblemRepository problemRepository) {
        this.problemRepository = problemRepository;
    }

    @Override
    public List<ProblemOverviewDTO> getProblems() {
        List<Problem> problems = problemRepository.findAll();
        return problems.stream().map(this::mapProblemToOverviewDTO).collect(Collectors.toList());
    }

    @Override
    public ProblemDTO getProblemById(String problemId) {
        Problem problem = problemRepository.findProblemByProblemId(problemId);
        return mapProblemToDTO(problem);
    }

    private ProblemOverviewDTO mapProblemToOverviewDTO(Problem problem) {
        return new ProblemOverviewDTO(problem.getProblemId(), problem.getDifficulty());
    }

    private ProblemDTO mapProblemToDTO(Problem problem) {
        return new ProblemDTO(problem.getProblemId(), problem.getDifficulty());
    }
}
