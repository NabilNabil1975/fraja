import AdminHeader from "@/components/admin/AdminHeader";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default function AdminPage() {
  return (
    <main className="flex min-h-screen bg-[#050505]">
      <AdminSidebar />

      <section className="flex-1">
        <AdminHeader title="Dashboard" />

        <div className="grid gap-6 p-8 md:grid-cols-4">
          {[
            ["Links", "8"],
            ["Sections", "7"],
            ["Leagues", "15"],
            ["Players", "8"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-green-400/20 bg-white/5 p-6 text-white"
            >
              <p className="text-sm text-gray-400">{label}</p>
              <p className="mt-2 text-4xl font-black text-green-400">
                {value}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}