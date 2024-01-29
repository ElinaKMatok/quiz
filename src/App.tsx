import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { quizQuestions } from "./mocks/questionsData";
import { Question } from "./models/Question";
import QuestionCard from "./components/QuestionCard/QuestionCard";
import { useState } from "react";
import Scores from "./components/Scores/Scores";

function App() {
  const [selected, setSelected] = useState<string[]>(
    new Array(quizQuestions.length).fill("")
  );

  const onClick = (ansID: string, index: number) => {
    const updatedSelected = [...selected];
    updatedSelected[index] = ansID;
    setSelected(updatedSelected);
  };

  const getScore = (): number => {
    let finalScore = 0;
    selected.forEach((item, index) => {
      const correct = quizQuestions[index].answers.find(
        (ans) => ans.correct === true
      );
      if (correct?.id === item) {
        finalScore = finalScore + 20;
      }
    });
    return finalScore;
  };

  const cleanScore = () =>
    setSelected(new Array(quizQuestions.length).fill(""));

  return (
    <div>
      <Router>
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <QuestionCard
                  question={quizQuestions[0]}
                  selectedAnswerId={selected[0]}
                  onClick={(str: string) => onClick(str, 0)}
                />
              }
            />
            {quizQuestions.map((question: Question, index) => (
              <Route
                key={question.id}
                path={`/${question.id}`}
                element={
                  <QuestionCard
                    question={question}
                    selectedAnswerId={selected[index]}
                    onClick={(str: string) => onClick(str, index)}
                  />
                }
              />
            ))}
            <Route
              path="/scores"
              element={<Scores value={getScore()} clean={cleanScore} />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
