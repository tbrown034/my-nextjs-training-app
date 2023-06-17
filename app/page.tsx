import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-8 px-4 mx-auto bg-cyan-900 text-cyan-200">
      <div className="flex flex-col gap-6 text-center">
        <h1 className="text-5xl">⚠️ Experimental Website ⚠️ </h1>
        <h2 className="space-y-2 text-xl">
          This is a Next.js website developed by Trevor Brown as a way to try
          out and do some cool stuff.
        </h2>
        <h2 className="text-lg"> ⚡ Proceed at your own risk. ⚡</h2>
      </div>
      <div className="flex flex-col gap-4">
        <Link
          className="p-2 rounded-lg bg-cyan-700 hover:bg-cyan-600 active:bg-cyan-500 "
          href="/apiFun"
        >
          API Fun
        </Link>
        <Link
          className="p-2 rounded-lg bg-cyan-700 hover:bg-cyan-600 active:bg-cyan-500 "
          href="/darkMode"
        >
          Dark Mode
        </Link>
        <Link
          className="p-2 rounded-lg bg-cyan-700 hover:bg-cyan-600 active:bg-cyan-500 "
          href="/"
        >
          Button 3
        </Link>
        <Link
          className="p-2 rounded-lg bg-cyan-700 hover:bg-cyan-600 active:bg-cyan-500 "
          href="/"
        >
          Button 4
        </Link>
        <Link
          className="p-2 rounded-lg bg-cyan-700 hover:bg-cyan-600 active:bg-cyan-500 "
          href="/"
        >
          Button 5
        </Link>
        <Link
          className="p-2 rounded-lg bg-cyan-700 hover:bg-cyan-600 active:bg-cyan-500 "
          href="/"
        >
          Button 6
        </Link>
      </div>
    </main>
  );
}
