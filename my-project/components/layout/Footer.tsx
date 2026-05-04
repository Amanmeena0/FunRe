import Link from "next/link";

interface FooterProps {
  fixed?: boolean;
}

export default function Footer({ fixed = true }: FooterProps) {
  return (
    <footer
      className={`bg-[#1b1b1b] dark:bg-black ${
        fixed ? "fixed bottom-0" : ""
      } w-full z-50 flex justify-between items-center px-8 py-4 border-t-4 border-black`}
    >
      <div className="text-[#fec700] font-label font-bold uppercase text-xs tracking-[0.2em]">
        © 2024 RESUME RIOT. NO MERCY.
      </div>
      <div className="flex gap-8">
        {["Privacy", "Terms", "Support"].map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase()}`}
            className="text-white font-label font-bold uppercase text-xs tracking-widest hover:text-[#fec700] transition-colors"
          >
            {item}
          </Link>
        ))}
      </div>
    </footer>
  );
}