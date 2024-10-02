import { supabase } from "@/lib/supabaseClient";
import Quiz from "@/components/Quiz";
import { Question, Quiz as QuizType } from "@/types/index";

type QuizPageProps = {
  params: { id: string };
};

export default async function QuizPage({ params }: QuizPageProps) {
  console.log("Fetching quiz with ID:", params.id);

  const { data: quiz, error: quizError } = await supabase
    .from<QuizType>("quizzes")
    .select("*")
    .eq("id", params.id)
    .single();

  console.log("Fetched quiz:", quiz);
  console.log("Quiz error:", quizError);

  const { data: questions, error: questionsError } = await supabase
    .from<Question>("questions")
    .select("*")
    .eq("quiz_id", params.id)
    .order("created_at", { ascending: true });

  console.log("Fetched questions:", questions);
  console.log("Questions error:", questionsError);

  if (quizError || questionsError) {
    console.error("Error loading quiz:", quizError, questionsError);
    return <div className='text-red-500'>Error loading quiz.</div>;
  }

  if (!quiz || !questions || questions.length === 0) {
    return (
      <div className='text-yellow-500'>Quiz not found or has no questions.</div>
    );
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-6'>{quiz.title}</h1>
      <p className='text-lg mb-8'>{quiz.description}</p>
      <p className='text-md mb-4'>Number of questions: {questions.length}</p>
      <Quiz quiz={quiz} questions={questions} />
    </div>
  );
}
