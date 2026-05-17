import TopNav from "@/components/layout/TopNav";
import Footer from "@/components/layout/Footer";

export default function DashboardPage() {
  return (
    <>
      <TopNav />
      <main className="min-h-screen pt-40 px-8 max-w-7xl mx-auto pb-32">
        <h1 className="text-6xl font-black uppercase tracking-tighter mb-8">Your Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white">
            <h2 className="text-3xl font-black uppercase mb-4">My Resumes</h2>
            <p className="mb-6 font-medium">You haven&apos;t created any riots yet.</p>
            <button className="bg-primary text-white font-black px-6 py-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase">
              Create New
            </button>
          </div>
          <div className="border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-[#fec700]">
            <h2 className="text-3xl font-black uppercase mb-4">Profile Stats</h2>
            <p className="font-medium">Coming Soon: View counts and engagement metrics for your live resumes.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
