import { useState } from 'react'

export default function StepChallenge() {
  // After Static UI. Next thing is to identity the state. Values that stay throughout the life-cycle of the component.

  const [count, setCount] = useState(1)
  const [step, setStep] = useState(1)

  // On Each re-render, we need to update date, we'll go with the derived state in this case

  const date = new Date('june 21 2027')

  date.setDate(date.getDate() + count)

  function handleStepPrev() {
    setStep(prev => prev - 1)
  }

  function handleStepNext() {
    setStep(next => next + 1)
  }

  function handleCountPrev() {
    setCount(prev => prev - step)
  }

  function handleCountNext() {
    setCount(next => next + step)
  }
  return (
    <main className="flex h-screen justify-center items-center">
      <div className="w-[400px] rounded border p-5 flex flex-col min-h-[200px] justify-between items-center">
        {/* Steps */}
        <div className="w-full">
          <div className="flex rounded-2xl justify-between items-center">
            <button
              className="px-4 py-2 rounded-3xl min-w-20 bg-blue-400 text-white transition-colors hover:bg-blue-500 cursor-pointer"
              onClick={handleStepPrev}>
              -
            </button>
            <p className="font-semibold text-xl">Step: {step}</p>
            <button
              className="px-4 py-2 rounded-3xl min-w-20 bg-blue-400 text-white transition-colors hover:bg-blue-500 cursor-pointer"
              onClick={handleStepNext}>
              +
            </button>
          </div>
        </div>

        {/* Count */}
        <div className="w-full">
          <div className="flex rounded-2xl justify-between items-center">
            <button
              className="px-4 py-2 rounded-3xl min-w-20 bg-blue-400 text-white transition-colors hover:bg-blue-500 cursor-pointer"
              onClick={handleCountPrev}>
              -
            </button>
            <p className="font-semibold text-xl">Count: {count}</p>
            <button
              className="px-4 py-2 rounded-3xl min-w-20 bg-blue-400 text-white transition-colors hover:bg-blue-500 cursor-pointer"
              onClick={handleCountNext}>
              +
            </button>
          </div>
        </div>

        {/* Date : Need some hint here in Date function to be used for simple calculations*/}
        <p>
          {count === 0
            ? 'Today '
            : count > 0
            ? `${count} days from now is`
            : `${count} days ago was`}

          <span> {date.toDateString()}</span>
        </p>
      </div>
    </main>
  )
}
