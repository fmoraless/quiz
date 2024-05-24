import React from 'react'
import { QuizCard } from './QuizCard'

export const QuizzesArea = () => {
  return (
    <div className='poppins mx-12 mt-10'>
        <h2 className='text-xl font-bold'>My Quizzes</h2>
        <div className='mt-6 flex gap-2 flex-wrap'>
            <QuizCard />
            <QuizCard />
        </div>
    </div>
  )
}
