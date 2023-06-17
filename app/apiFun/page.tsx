export default function apiFun() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-8 px-4 mx-auto bg-cyan-900 text-cyan-200">
      <div>
        <h1>API Fun</h1>
        <h2>The fun spot to be if your apiing</h2>
      </div>
      <div className="flex flex-col gap-2 text-center">
        <button className="p-2 rounded-lg bg-cyan-700 hover:bg-cyan-600 active:bg-cyan-500 ">
          Say Hello
        </button>
        <button className="p-2 rounded-lg bg-cyan-700 hover:bg-cyan-600 active:bg-cyan-500 ">
          Say Goodbye
        </button>
      </div>
    </main>
  );
}
