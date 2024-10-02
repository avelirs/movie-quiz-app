// components/QuizQuestion.tsx

"use client";

import { useState } from "react";
import { Question } from "@/types/index";
import { Button } from "@/components/ui/button";

type QuizQuestionProps = {
  question: Question;
  questionNumber: number;
  onNextQuestion: (selectedAnswer: string | null) => void;
};

export default function QuizQuestion({
  question,

  onNextQuestion,
}: QuizQuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) {
      alert("Please select an answer before proceeding.");
      return;
    }
    onNextQuestion(selectedAnswer);
    setSelectedAnswer(null);
  };

  return (
    <div className='mb-8 p-6 bg-white rounded-lg shadow-md'>
      <h2 className='text-2xl font-semibold mb-4'>{question.text}</h2>
      <div className='space-y-4'>
        {["a", "b", "c", "d"].map((option) => (
          <button
            key={option}
            className={`w-full p-4 text-left rounded-md transition-colors ${
              selectedAnswer === option
                ? "bg-blue-500 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            onClick={() => handleAnswerSelect(option)}
          >
            {option.toUpperCase()}.{" "}
            {question[`answer_${option}` as keyof Question]}
          </button>
        ))}
      </div>
      <Button
        className='mt-4'
        onClick={handleNextQuestion}
        disabled={selectedAnswer === null}
      >
        Next Question
      </Button>
    </div>
  );
}
