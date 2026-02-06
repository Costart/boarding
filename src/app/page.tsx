export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 p-8">
      <h1 className="text-4xl font-bold">Template</h1>
      <p className="text-lg text-zinc-500">Your project is running.</p>
      <div className="flex gap-4">
        <a
          href="/api/items"
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          API /api/items
        </a>
      </div>
    </div>
  );
}
