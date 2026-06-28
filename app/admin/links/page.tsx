import AdminHeader from "@/components/admin/AdminHeader";
import AdminSidebar from "@/components/admin/AdminSidebar";

const links = [
  ["Home", "/", "Active", "1"],
  ["Live", "/live", "Active", "2"],
  ["News", "/news", "Active", "3"],
  ["Leagues", "/leagues", "Active", "4"],
  ["Teams", "/teams", "Active", "5"],
];

export default function AdminLinksPage() {
  return (
    <main className="flex min-h-screen bg-[#050505]">
      <AdminSidebar />

      <section className="flex-1">
        <AdminHeader title="Navigation Links" />

        <div className="p-8">
          <button className="mb-6 rounded-xl bg-green-400 px-5 py-3 font-bold text-black">
            Add New Link
          </button>

          <div className="overflow-hidden rounded-2xl border border-green-400/20">
            <table className="w-full text-left text-white">
              <thead className="bg-green-400 text-black">
                <tr>
                  <th className="p-4">Label</th>
                  <th className="p-4">URL</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Order</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {links.map(([label, url, status, order]) => (
                  <tr key={label} className="border-t border-white/10 bg-white/5">
                    <td className="p-4">{label}</td>
                    <td className="p-4">{url}</td>
                    <td className="p-4 text-green-400">{status}</td>
                    <td className="p-4">{order}</td>
                    <td className="p-4">
                      <button className="mr-2 text-green-400">Edit</button>
                      <button className="text-red-400">Delete</button>
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