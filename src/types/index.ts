// types/index.ts

export type Quiz = {
  id: string;
  title: string;
  description: string;
  // Add other fields as necessary
};

export type Question = {
  id: string;
  quiz_id: string;
  question_order: number;
  text: string;
  answer_a: string;
  answer_b: string;
  answer_c: string;
  answer_d: string;
  correct_answer: string; // e.g., "a", "b", "c", or "d"
  // Add other fields as necessary
};
