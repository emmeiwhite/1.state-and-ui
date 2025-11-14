import { useState } from 'react'

function App() {
  const [step, setStep] = useState<number>(1)

  // Let's work on interactivity first

  function handlePrev() {
    if (step === 1) return

    setStep(prev => prev - 1) // Component will get re-rendered, App function called which will update the view (UI)
  }

  function handleNext() {
    if (step === 3) return

    setStep(next => next + 1)
  }

  return (
    <section className="h-screen w-full flex justify-center items-center bg-blue-200">
      <main className="w-[400px] h-[300px]  rounded p-6">
        <div className="flex flex-col gap-12 items-center">
          {/* Circles */}
          <div className="flex justify-between w-full">
            <div
              className={`w-10 h-10 rounded-full flex justify-center items-center border ${
                step <= 1 ? 'bg-blue-600 text-white' : ''
              }`}>
              1
            </div>
            <div className={`w-10 h-10 rounded-full flex justify-center items-center border`}>
              2
            </div>
            <div className={`w-10 h-10 rounded-full flex justify-center items-center border`}>
              3
            </div>
          </div>

          {/* Text Based on State */}

          <div className="font-medium text-2xl text-center">
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
          </div>

          <div className="flex justify-between w-full">
            <button
              className="px-4 py-2 rounded-3xl cursor-pointer bg-blue-500 text-white hover:bg-blue-600 transition min-w-[100px]"
              onClick={handlePrev}>
              Previous
            </button>

            <button
              className="px-4 py-2 rounded-3xl cursor-pointer bg-blue-500 text-white hover:bg-blue-600 transition min-w-[100px]"
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
