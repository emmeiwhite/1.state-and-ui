function App() {
  return (
    <section className="h-screen w-full flex justify-center items-center bg-blue-200">
      <main className="w-[400px] h-[300px]  rounded p-6">
        <div className="flex flex-col gap-12 items-center">
          {/* Circles */}
          <div className="flex justify-between w-full">
            <div className="w-10 h-10 rounded-full flex justify-center items-center border">1</div>
            <div className="w-10 h-10 rounded-full flex justify-center items-center border">2</div>
            <div className="w-10 h-10 rounded-full flex justify-center items-center border">3</div>
          </div>

          {/* Text Based on State */}

          <div>
            <p className="font-semibold text-2xl">
              Step <span>1</span>: Learn React
            </p>
          </div>

          <div className="flex justify-between w-full">
            <button className="px-4 py-2 rounded-2xl bg-blue-500 text-white hover:bg-blue-600 transition min-w-[100px]">
              Previous
            </button>

            <button className="px-4 py-2 rounded-2xl bg-blue-500 text-white hover:bg-blue-600 transition min-w-[100px]">
              Next
            </button>
          </div>
        </div>
      </main>
    </section>
  )
}

export default App
