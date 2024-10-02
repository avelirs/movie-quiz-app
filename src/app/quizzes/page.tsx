import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import { Quiz } from "@/types/index";

export const revalidate = 0; // This ensures the page is not cached

export default async function QuizzesPage() {
  const { data, error } = await supabase
    .from("quizzes")
    .select("*")
    .order("created_at", { ascending: false });

  const quizzes = data as Quiz[];

  if (error) {
    console.error("Error fetching quizzes:", error);
    return (
      <div className='container mx-auto px-4 py-8'>
        <h1 className='text-3xl font-bold mb-6'>Error</h1>
        <p className='text-lg text-red-600'>
          Error loading quizzes. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-6'>Available Quizzes</h1>
      {!quizzes || quizzes.length === 0 ? (
        <p className='text-lg'>No quizzes available at the moment.</p>
      ) : (
        <ul className='space-y-4'>
          {quizzes.map((quiz) => (
            <li key={quiz.id} className='border rounded-lg p-4 shadow-sm'>
              <Link
                href={`/quizzes/${quiz.id}`}
                className='text-xl font-semibold hover:underline'
              >
                {quiz.title}
              </Link>
              <p className='text-gray-600 mt-2'>{quiz.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
