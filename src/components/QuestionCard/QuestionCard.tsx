import { Link } from "react-router-dom";
import { Answer } from "../../models/Answer";
import { Question } from "../../models/Question";
import classes from "./QuestionCard.module.scss";
import classNames from "classnames";
import { quizQuestions } from "../../mocks/questionsData";
import { useEffect, useState } from "react";

interface QuestionCardProps {
  question: Question;
  selectedAnswerId: string;
  onClick: (id: string) => void;
}

const QuestionCard = ({
  question,
  selectedAnswerId,
  onClick,
}: QuestionCardProps) => {
  const [showMessage, setShowMessage] = useState(false);

  const handleShowMessage = () => {
    if (selectedAnswerId === "") {
      setShowMessage(true);
    }
  };

  useEffect(() => {
    if (selectedAnswerId !== "") {
      setShowMessage(false);
    }
  }, [selectedAnswerId]);

  return (
    <div>
      <div className={classes.questionWrapper}>
        <div
          className={classes.question}
        >{`${question.id}. ${question.text}`}</div>
        <div className={classes.answers}>
          {question.answers.map((ans: Answer) => (
            <div
              key={ans.id}
              data-testid={ans.id}
              className={classNames(
                classes.answer,
                ans.id === selectedAnswerId && classes.selectedAnswer
              )}
              onClick={() => onClick(ans.id)}
            >
              {`${ans.id}. ${ans.text}`}
            </div>
          ))}
        </div>
      </div>
      <div className={classes.links}>
        {question.id > 1 && (
          <Link data-testid={"previous"} to={`/${question.id - 1}`}>
            Previous
          </Link>
        )}
        {question.id < quizQuestions.length ? (
          <Link
            data-testid={"next"}
            to={selectedAnswerId !== "" ? `/${question.id + 1}` : null}
            onClick={handleShowMessage}
          >
            Next
          </Link>
        ) : (
          <Link
            data-testid={"submit"}
            to={selectedAnswerId !== "" ? "/scores" : null}
            onClick={handleShowMessage}
          >
            Submit
          </Link>
        )}
      </div>
      {showMessage && (
        <div data-testid="msg" className={classes.msg}>
          {"Oh, select something already!"}
        </div>
      )}
    </div>
  );
};
export default QuestionCard;
