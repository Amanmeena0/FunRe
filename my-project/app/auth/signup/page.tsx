export default function SignupPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
        <h1 className="text-4xl font-black uppercase mb-6 tracking-tight">Sign Up</h1>
        <p className="mb-8 font-medium">Start your riot. Create your first high-impact resume.</p>
        <div className="flex flex-col gap-4">
          <input 
            type="email" 
            placeholder="EMAIL" 
            className="border-4 border-black p-3 font-bold focus:outline-none focus:bg-primary/10"
          />
          <input 
            type="password" 
            placeholder="PASSWORD" 
            className="border-4 border-black p-3 font-bold focus:outline-none focus:bg-primary/10"
          />
          <button className="bg-[#fec700] text-black font-black py-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all uppercase">
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}
