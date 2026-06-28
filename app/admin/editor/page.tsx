import AdminHeader from "@/components/admin/AdminHeader";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default function AdminEditorPage() {
  return (
    <main className="flex min-h-screen bg-[#050505]">
      <AdminSidebar />

      <section className="flex-1">
        <AdminHeader title="Manual Editor" />

        <div className="grid gap-6 p-8 lg:grid-cols-2">
          {[
            "Create Navigation Link",
            "Create Homepage Section",
            "Create Ad Placement",
            "Create Featured Match",
            "Create News Block",
            "Create CTA Button",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-green-400/20 bg-white/5 p-6 text-white"
            >
              <h3 className="text-xl font-bold text-green-400">{item}</h3>
              <input
                className="mt-4 w-full rounded-xl border border-white/10 bg-black p-3 text-white"
                placeholder="Title"
              />
              <input
                className="mt-3 w-full rounded-xl border border-white/10 bg-black p-3 text-white"
                placeholder="URL or value"
              />
              <button className="mt-4 rounded-xl bg-green-400 px-5 py-3 font-bold text-black">
                Save
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}