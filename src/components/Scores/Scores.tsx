import { Link } from "react-router-dom";
import classes from "./Scores.module.scss";

interface ScoresProps {
  value: number;
  clean: () => void;
}

const Scores = ({ value, clean }: ScoresProps) => {
  return (
    <div>
      <div className={classes.score}>The Score is: {value}</div>
      <Link to={"/"} onClick={clean} data-testid="again">
        {value < 100
          ? "Give me one more chance pleaseeee!"
          : "Hired, You Are A Genius! Start Again?"}
      </Link>
    </div>
  );
};

export default Scores;
