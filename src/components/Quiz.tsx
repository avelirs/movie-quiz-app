"use client";

import { useState } from "react";
import { Quiz as QuizType, Question } from "@/types/index";
import QuizQuestion from "@/app/quizzes/[id]/QuizQuestion";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

type QuizProps = {
  quiz: QuizType;
  questions: Question[];
};

export default function Quiz({ questions }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    console.log("Questions:", questions);
    console.log("Current Question Index:", currentQuestionIndex);
  }, [questions, currentQuestionIndex]);

  const handleNextQuestion = (selectedAnswer: string | null) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correct_answer) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResults(false);
  };

  if (showResults) {
    const percentage = ((score / questions.length) * 100).toFixed(2);
    let feedback = "";

    if (percentage === "100.00") {
      feedback = "Excellent! Perfect score!";
    } else if (percentage >= "80.00") {
      feedback = "Great job! You have a strong understanding.";
    } else if (percentage >= "50.00") {
      feedback = "Good effort! Keep practcing to improve.";
    } else {
      feedback = "Don't give up! Try again to enhance your knowledge.";
    }

    return (
      <div className='text-center'>
        <h2 className='text-2xl font-semibold mb-4'>Quiz Completed!</h2>
        <p className='text-lg mb-2'>
          Your Score: {score} / {questions.length}
        </p>
        <p className='text-md mb-6'>Percentage: {percentage}%</p>
        <p className='text-md mb-6'>{feedback}</p>
        <Button onClick={handleRestart}>Restart Quiz</Button>
      </div>
    );
  }

  return (
    <div>
      <QuizQuestion
        question={questions[currentQuestionIndex]}
        questionNumber={currentQuestionIndex + 1}
        onNextQuestion={handleNextQuestion}
      />
      <div className='mt-4 text-right'>
        <p>
          Question {currentQuestionIndex + 1} of {questions.length}
        </p>
      </div>
    </div>
  );
}
