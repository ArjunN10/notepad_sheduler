import React from 'react'
import { NoteCard } from '../components/NoteCard'

export const Home = () => {
  return (
    <div className=" dark:bg-gray-900 ">
        <div class="flex flex-col items-center justify-top  px-6 py-8 mx-auto md:h-screen lg:py-0">
    <NoteCard/>
    </div>
    </div>
  )
}
