import { useEffect, useState } from 'react';
import { quizzes } from '../Data';
import { MdTimer } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { Progress } from 'antd';
import Results from '../components/Results';

export default function Questions() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const { id } = useParams();
  const quizz = quizzes.find((it) => it.id == id);
  const [qPosition, setQPosition] = useState(`0/${quizz?.questions.length}`);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [timer, setTimer] = useState(0);
  const [allQuestionsCompleted, setAllQuestionsCompleted] = useState(false);
  const [timeTaken, setTimeTaken] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [subjectName, setSubjectName] = useState(quizz?.name || '');

  useEffect(() => {
    let interval;
    if (!allQuestionsCompleted) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
        setTimeTaken((prevTimeTaken) => prevTimeTaken + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [allQuestionsCompleted]);

  const handleOptionClick = (isCorrect) => {
    if (isCorrect) {
      setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
    }

    setAnsweredQuestions((prevAnsweredQuestions) => prevAnsweredQuestions + 1);

    if (currentQuestionIndex + 1 < quizz?.questions.length) {
      setCurrentQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);
      const newPosition = currentQuestionIndex + 1;
      setQPosition(`${newPosition}/${quizz?.questions.length}`);
    }
    if (currentQuestionIndex + 1 === quizz?.questions.length) {
      setAllQuestionsCompleted(true);
      setQuizCompleted(true);
    }
  };

  const progress = (answeredQuestions / quizz?.questions.length) * 100;
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  useEffect(() => {
    setSubjectName(quizz?.name || '');
  }, [quizz]);

  return (
    <div>
      {quizCompleted ? (
        <div className="p-5">
          <Results correctAnswers={correctAnswers} timeTaken={timeTaken} />
        </div>
      ) : (
        <div className="bg-gradient-to-br from-green-600 via-emerald-400 to-green-300 m-3 p-3 rounded-md ">
          <header>
            <div className="flex justify-center text-2xl font-name">
              <h1>{subjectName}</h1>
            </div>
            <div className="ml-5 mt-5 p-3 flex justify-between items-center">
              <div className="bg-black w-fit p-2 shadow-md shadow-teal-500 text-white rounded-md border">
                <p className="text-lg font-semibold">{`Question ${qPosition}`}</p>
              </div>
              <div className="flex items-center gap-2 text-lg font-medium">
                <MdTimer size={30} />:<span>{`${minutes.toString().padStart(2, '0')}:${seconds
                  .toString()
                  .padStart(2, '0')}`}</span>
              </div>
            </div>
            <div className="bg-black  p-3 m shadow-md shadow-teal-500 text-white rounded-md border">
              <Progress percent={progress} size="small" className="w-[300px] " strokeColor="cyan" showInfo={false} />
            </div>
          </header>
          <section className="mt-5 mx-auto">
            <div className="mt-20">
              <p className="font-medium text-3xl">{quizz?.questions[currentQuestionIndex]?.text}</p>
            </div>
            <div className="grid justify-between  mt-5 gap-3">
              {quizz?.questions[currentQuestionIndex]?.options.map((op, index) => (
                <div className="flex gap-1 items-center" key={index} onClick={() => handleOptionClick(op.isCorrect)}>
                  <div className="bg-yellow-400 p-5 text-lg">{op.label}</div>
                  <div className="bg-gray-400 p-5 text-lg w-[250px] md:w-[300px]">{op.text}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
