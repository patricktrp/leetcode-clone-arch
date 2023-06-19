package dev.treppmann.leetcode.questions;

import org.springframework.stereotype.Service;

@Service
public class QuestionService implements IQuestionService {
    private final QuestionRepository questionRepository;

    public QuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }
}
