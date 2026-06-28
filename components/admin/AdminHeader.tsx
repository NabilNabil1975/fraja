export default function AdminHeader({ title }: { title: string }) {
  return (
    <header className="border-b border-white/10 bg-[#070707] px-8 py-6 text-white">
      <h2 className="text-3xl font-black text-green-400">{title}</h2>
      <p className="mt-1 text-sm text-gray-400">Manual control dashboard</p>
    </header>
  );
}