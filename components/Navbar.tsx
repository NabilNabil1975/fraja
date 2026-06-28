export default function Navbar() {
  return (
    <header className="w-full bg-black text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-3xl font-bold text-green-500">
          FRAJA
        </h1>

        <nav className="hidden md:flex gap-8 font-semibold">
          <a href="#" className="hover:text-green-500">Home</a>
          <a href="#" className="hover:text-green-500">Live</a>
          <a href="#" className="hover:text-green-500">News</a>
          <a href="#" className="hover:text-green-500">Leagues</a>
          <a href="#" className="hover:text-green-500">Teams</a>
        </nav>

        <button className="bg-green-500 px-5 py-2 rounded-lg font-bold hover:bg-green-600">
          Search
        </button>

      </div>
    </header>
  );
}