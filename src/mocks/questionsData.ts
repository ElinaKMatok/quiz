import { Question } from "../models/Question";

export const quizQuestions: Question[] = [
    {
        id: 1,
        text: "What is the primary purpose of React?",
        answers: [
            {
                id: "a",
                text: "Manage server-side logic",
                correct: false,
            },
            {
                id: "b",
                text: "Handle database connections",
                correct: false,
            },
            {
                id: "c",
                text: "Build user interfaces",
                correct: true,
            },
            {
                id: "d",
                text: "Execute backend operations",
                correct: false,
            },
        ],
    },
    {
        id: 2,
        text: "In React, what is JSX?",
        answers: [
            {
                id: "a",
                text: "JavaScript XML",
                correct: true,
            },
            {
                id: "b",
                text: "Java Syntax Extension",
                correct: false,
            },
            {
                id: "c",
                text: "JSON and XML Syntax",
                correct: false,
            },
            {
                id: "d",
                text: "JSX is not used in React",
                correct: false,
            },
        ],
    },
    {
        id: 3,
        text: "Which React hook is used for handling side effects in functional components?",
        answers: [
            {
                id: "a",
                text: "useState",
                correct: false
            },
            {
                id: "b",
                text: "useEffect",
                correct: true
            },
            {
                id: "c",
                text: "useContext",
                correct: false
            },
            {
                id: "d",
                text: "useReducer",
                correct: false
            },
        ],
    },
    {
        id: 4,
        text: "What is the purpose of the setState method in React class components?",
        answers: [
            {
                id: "a",
                text: "Initialize state",
                correct: false
            },
            {
                id: "b",
                text: "Update state and trigger re-render",
                correct: true
            },
            {
                id: "c",
                text: "Access component props",
                correct: false
            },
            {
                id: "d",
                text: "Declare lifecycle methods",
                correct: false
            },
        ],
    },
    {
        id: 5,
        text: "What is the virtual DOM in React?",
        answers: [
            {
                id: "a",
                text: "A browser's internal memory",
                correct: false
            },
            {
                id: "b",
                text: "A lightweight version of the browser",
                correct: false
            },
            {
                id: "c",
                text: "A representation of the DOM in memory",
                correct: true
            },
            {
                id: "d",
                text: "A type of HTML element",
                correct: false
            },
        ],
    }
];
