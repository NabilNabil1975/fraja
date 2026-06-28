import AdminHeader from "@/components/admin/AdminHeader";
import AdminSidebar from "@/components/admin/AdminSidebar";

const sections = [
  ["Hero", "Visible", "1"],
  ["NewsTicker", "Visible", "2"],
  ["LiveMatches", "Visible", "3"],
  ["TopLeagues", "Visible", "4"],
  ["TrendingPlayers", "Visible", "5"],
  ["CaptainHakimiAI", "Visible", "6"],
  ["Footer", "Visible", "7"],
];

export default function AdminSectionsPage() {
  return (
    <main className="flex min-h-screen bg-[#050505]">
      <AdminSidebar />

      <section className="flex-1">
        <AdminHeader title="Homepage Sections" />

        <div className="p-8">
          <div className="overflow-hidden rounded-2xl border border-green-400/20">
            <table className="w-full text-left text-white">
              <thead className="bg-green-400 text-black">
                <tr>
                  <th className="p-4">Section</th>
                  <th className="p-4">Visibility</th>
                  <th className="p-4">Order</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {sections.map(([name, visibility, order]) => (
                  <tr key={name} className="border-t border-white/10 bg-white/5">
                    <td className="p-4">{name}</td>
                    <td className="p-4 text-green-400">{visibility}</td>
                    <td className="p-4">{order}</td>
                    <td className="p-4">
                      <button className="mr-3 text-green-400">Toggle</button>
                      <button className="mr-3 text-cyan-400">Up</button>
                      <button className="text-cyan-400">Down</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}