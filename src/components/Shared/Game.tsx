import { Button, Typography } from '@mui/material';
import { Fragment, useEffect, useState } from 'react';

export default function Game({ question, next }) {
  const [possibleAnswers, setPossibleAnswers] = useState<string[]>();
  const [activateClass, setActivateClass] = useState<boolean>(false);

  useEffect(() => {
    if (question) {
      console.log(question);
      setPossibleAnswers(shuffle([...question.incorrect_answers, question.correct_answer]));
    }
  }, [question]);

  const shuffle = (array: string[]) => {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  };

  function handleClickAnswer() {
    setActivateClass(true);
  }

  function nextLocal() {
    next();
    setActivateClass(false);
  }
  return (
    <>
      {question && (
        <Fragment>
          <Typography variant="h6" className="test">
            {question.question}
          </Typography>
          <div className="possible-answers">
            {possibleAnswers?.map((answer: string) => (
              <div
                key={answer}
                className={
                  'card ' +
                  (activateClass ? (question.correct_answer === answer && activateClass ? 'activate' : 'error') : '')
                }
                onClick={() => handleClickAnswer()}
              >
                {answer}
              </div>
            ))}
          </div>
          {activateClass && (<Button variant='outlined' sx={{ml: "auto"}} onClick={nextLocal}>next</Button>)}
        </Fragment>
      )}
    </>
  );
}
