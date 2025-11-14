import { useState } from 'react'

// Let's create a step component and pass proper data to it as per current state value

type StepsTypes = {
  step: number
  id: number
}
function Step({ step, id }: StepsTypes) {
  return (
    <div
      className={`w-10 h-10 rounded-full flex justify-center items-center border ${
        step >= id ? 'bg-blue-600 text-white' : ''
      }`}>
      {id}
    </div>
  )
}

function App() {
  const [step, setStep] = useState<number>(1)

  const stepsArr = [
    { id: 1, text: 'Learn React 👨🏻‍💻' },
    { id: 2, text: 'Apply for Jobs 🧑‍💻' },
    { id: 3, text: 'Spend wisely on loved ones and needy ☘️' }
  ]

  // Let's work on interactivity first

  // function handlePrev() {
  //   if (step === 1) return

  //   setStep(prev => prev - 1) // Component will get re-rendered, App function called which will update the view (UI)
  // }

  function handlePrev() {
    console.log('handlePrev invoked')
    setStep(s => Math.max(1, s - 1))
  }

  function handleNext() {
    console.log('handleNext invoked')
    setStep(s => Math.min(3, s + 1))
  }

  // function handleNext() {
  //   if (step === 3) return

  //   setStep(next => next + 1)
  // }

  return (
    <section className="h-screen w-full flex justify-center items-center bg-blue-200">
      <main className="w-[400px] h-[300px]  rounded p-6">
        <div className="flex flex-col gap-12 items-center">
          {/* Circles */}
          <div className="flex justify-between w-full">
            {/* We must avoid repetition with the use of props, data etc 
            <div
              className={`w-10 h-10 rounded-full flex justify-center items-center border ${
                step >= 1 ? 'bg-blue-600 text-white' : ''
              }`}>
              1
            </div>
            <div
              className={`w-10 h-10 rounded-full flex justify-center items-center border ${
                step >= 2 ? 'bg-blue-600 text-white' : ''
              }`}>
              2
            </div>
            <div
              className={`w-10 h-10 rounded-full flex justify-center items-center border ${
                step >= 3 ? 'bg-blue-600 text-white' : ''
              }`}>
              3
            </div>
            */}

            {/* First I got to simple render the stepsArr */}

            {stepsArr.map(stepObj => {
              return (
                <Step
                  step={step}
                  id={stepObj.id}
                  key={stepObj.id}
                />
              )
            })}
          </div>

          {/* Text Based on State */}

          <div className="font-medium text-2xl text-center">
            {/* 
            {step === 1 && (
              <p>
                Step <span>1</span>: Learn React 👨🏻‍💻
              </p>
            )}

            {step === 2 && (
              <p>
                Step <span>2</span>: Apply for Jobs 🧑‍💻
              </p>
            )}

            {step === 3 && (
              <p>
                Step <span>3</span>: Spend wisely on loved ones and needy ☘️
              </p>
            )}
            
             */}

            <p>
              Step {stepsArr[step - 1].id}: {stepsArr[step - 1].text}
            </p>
          </div>

          <div className="flex justify-between w-full">
            {/*  
            <button
              className="px-4 py-2 rounded-3xl cursor-pointer bg-blue-500 text-white hover:bg-blue-600 transition min-w-[100px]"
              onClick={handlePrev}
              disabled={step === 1}>
              Previous
            </button>

            <button
              className="px-4 py-2 rounded-3xl cursor-pointer bg-blue-500 text-white hover:bg-blue-600 transition min-w-[100px]"
              onClick={handleNext}
              disabled={step === 3}>
              Next
            </button>

            */}

            <button
              disabled={step === 1}
              className={`px-4 py-2 rounded-3xl min-w-[100px]
    ${step === 1 ? 'bg-amber-50 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
              onClick={handlePrev}>
              Previous
            </button>

            <button
              disabled={step === 3}
              className={`px-4 py-2 rounded-3xl min-w-[100px]
    ${step === 3 ? 'bg-amber-50 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
              onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      </main>
    </section>
  )
}

export default App
