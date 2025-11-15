export default function StepChallenge() {
  return (
    <main className="flex h-screen justify-center items-center">
      <div className="w-[400px] rounded border p-5 flex flex-col min-h-[200px] justify-between items-center">
        {/* Steps */}
        <div className="w-full">
          <div className="flex rounded-2xl justify-between items-center">
            <button className="px-4 py-2 rounded-3xl min-w-20 bg-blue-400 text-white transition-colors hover:bg-blue-500 cursor-pointer">
              -
            </button>
            <p className="font-semibold text-xl">Step: 1</p>
            <button className="px-4 py-2 rounded-3xl min-w-20 bg-blue-400 text-white transition-colors hover:bg-blue-500 cursor-pointer">
              +
            </button>
          </div>
        </div>

        {/* Count */}
        <div className="w-full">
          <div className="flex rounded-2xl justify-between items-center">
            <button className="px-4 py-2 rounded-3xl min-w-20 bg-blue-400 text-white transition-colors hover:bg-blue-500 cursor-pointer">
              -
            </button>
            <p className="font-semibold text-xl">Count: 0</p>
            <button className="px-4 py-2 rounded-3xl min-w-20 bg-blue-400 text-white transition-colors hover:bg-blue-500 cursor-pointer">
              +
            </button>
          </div>
        </div>

        {/* Date */}
        <p>Today is Mon Jun 21 2027</p>
      </div>
    </main>
  )
}
