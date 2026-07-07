// Admin portrait card
export function AdminCard({ img, name, role }: { img: string; name: string; role: string }) {
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="w-36 h-44 rounded-2xl overflow-hidden bg-muted mb-4 shadow-sm group-hover:shadow-md transition-shadow duration-300 ring-2 ring-transparent group-hover:ring-[#1A6FDD]/20 transition-all">
        <img src={img} alt={name} className="w-full h-full object-cover" />
      </div>
      <p className="font-sans font-bold text-[#0D1E4A] text-base leading-tight mb-1">{name}</p>
      <p className="font-sans text-muted-foreground text-sm">{role}</p>
    </div>
  );
}
