import Link from "next/link";

export default function Page() {
  return (
    <div className="flex h-screen bg-[#373A40]">
      <Link href="/dashboard" className="flex m-auto">
        <div className="bg-gradient-to-br from-cyan-600 to-emerald-600 px-12 py-6 rounded-sm transition-all hover:scale-110 hover:bg-gradient-to-br hover:from-cyan-900 hover:to-emerald-900">
          <span className="font-bold text-3xl">Go to dashboard</span>
        </div>
      </Link>
    </div>
  );
}
