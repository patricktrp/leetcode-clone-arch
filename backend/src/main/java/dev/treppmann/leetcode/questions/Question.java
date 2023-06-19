package dev.treppmann.leetcode.questions;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Question {
    @Id
    String id;
}
