import Link from "next/link";

const items = [
  ["Dashboard", "/admin"],
  ["Links", "/admin/links"],
  ["Sections", "/admin/sections"],
  ["News", "/admin/news"],
  ["Leagues", "/admin/leagues"],
  ["Matches", "/admin/matches"],
  ["Players", "/admin/players"],
  ["Settings", "/admin/settings"],
  ["Editor", "/admin/editor"],
];

export default function AdminSidebar() {
  return (
    <aside className="min-h-screen w-64 border-r border-green-400/20 bg-black p-6 text-white">
      <h1 className="mb-8 text-3xl font-black text-green-400">FRAJA</h1>

      <nav className="space-y-2">
        {items.map(([label, href]) => (
          <Link
            key={href}
            href={href}
            className="block rounded-xl px-4 py-3 text-sm font-semibold text-gray-300 hover:bg-green-400 hover:text-black"
          >
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}