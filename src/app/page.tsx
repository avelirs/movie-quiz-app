import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className='flex flex-col items-center space-y-8 mt-20'>
      <div className='bg-white border-4 border-black p-8 transform -rotate-2 shadow-[8px_8px_0_0_rgba(0,0,0,1)] mb-12'>
        <h2 className='text-6xl font-bold mb-4 uppercase'>
          Ready to be tested?
        </h2>
        <p className='text-2xl font-mono'>
          Prepare for a mind-bending experience!
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl'>
        <Button
          asChild
          className='h-24 text-3xl font-bold uppercase bg-red-500 hover:bg-red-600 border-4 border-black transform transition-transform hover:translate-x-1 hover:translate-y-1'
        >
          <Link href='/quizzes'>Quizzes</Link>
        </Button>
        <Button
          asChild
          className='h-24 text-3xl font-bold uppercase bg-blue-500 hover:bg-blue-600 border-4 border-black transform transition-transform hover:translate-x-1 hover:translate-y-1'
        >
          <Link href='/leaderboard'>Leaderboard</Link>
        </Button>
        <Button
          asChild
          className='h-24 text-3xl font-bold uppercase bg-green-500 hover:bg-green-600 border-4 border-black transform transition-transform hover:translate-x-1 hover:translate-y-1'
        >
          <Link href='/create-quiz'>Create Quiz</Link>
        </Button>
        <Button
          asChild
          className='h-24 text-3xl font-bold uppercase bg-purple-500 hover:bg-purple-600 border-4 border-black transform transition-transform hover:translate-x-1 hover:translate-y-1'
        >
          <Link href='/about'>About</Link>
        </Button>
      </div>
    </div>
  );
}
