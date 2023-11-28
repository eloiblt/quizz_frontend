import { Container } from '@mui/material';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { firstValueFrom, map } from 'rxjs';
import { AppContext } from '../../contexts/app.context';
import { Question } from '../../models/question.model';
import Game from '../Shared/Game';

export default function Home() {
  const { apiClient } = useContext(AppContext);
  const [questions, setQuestions] = useState<Question[]>();
  const [currentQuestion, setCurrentQuestion] = useState<Question>();
  const index = useRef(0);

  const getNewQuestion = useCallback(async () => {
    const result = await firstValueFrom(apiClient.fetchQuestions(10).pipe(map(r => r.data)));
    setQuestions(result);
  }, [apiClient]);

  useEffect(() => {
    if (questions?.length) {
      setCurrentQuestion(questions[0])
    }
  }, [questions]);

  useEffect(() => {
    (async () => await getNewQuestion())();
  }, [getNewQuestion]);

  const next = () => {
    console.log(index.current)
    index.current++;
    setCurrentQuestion(questions[index.current]);
  };

  return (
    <Container
      component="main"
      maxWidth="lg"
      sx={{
        mt: 2,
      }}
    >
      {currentQuestion && <Game question={currentQuestion} next={next}></Game>}

      <Outlet />
    </Container>
  );
}
