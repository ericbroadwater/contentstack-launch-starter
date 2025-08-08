import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="max-w-4xl mx-auto p-6">
        <header className="mb-6 border-b pb-4">
          <Link href="/"><h1 className="text-2xl font-bold cursor-pointer">My Website</h1></Link>
        </header>
        <main>{children}</main>
        <footer className="mt-8 text-sm text-gray-500 border-t pt-4">
          &copy; {new Date().getFullYear()} My Website
        </footer>
      </div>
    </div>
  );
}
