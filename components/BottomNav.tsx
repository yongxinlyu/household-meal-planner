"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Plan", href: "/", icon: "📅" },
  { label: "Meals", href: "/meals", icon: "🍽️" },
  { label: "Groceries", href: "/groceries", icon: "🛒" },
  { label: "Settings", href: "/settings", icon: "⚙️" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 border-t border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto grid max-w-md grid-cols-4 px-2 py-2">
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-2xl px-2 py-2 text-center text-xs font-medium transition ${
                isActive
                  ? "bg-emerald-50 text-emerald-700"
                  : "text-slate-500 hover:bg-slate-100 hover:text-slate-950"
              }`}
            >
              <span className="block text-lg leading-none">{item.icon}</span>
              <span className="mt-1 block">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}