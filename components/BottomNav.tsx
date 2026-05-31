const navItems = [
  { label: "Plan", href: "/" },
  { label: "Meals", href: "/meals" },
  { label: "Groceries", href: "/groceries" },
  { label: "Settings", href: "/settings" },
];

export function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 border-t border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto grid max-w-md grid-cols-4 px-2 py-2">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="rounded-2xl px-3 py-2 text-center text-xs font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-950"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}