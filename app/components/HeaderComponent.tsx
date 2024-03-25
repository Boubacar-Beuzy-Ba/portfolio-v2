import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const HeaderComponent = () => {
  const menu = [
    {
      id: 1,
      to: "/",
      title: "Home",
    },
    {
      id: 2,
      to: "/",
      title: "Portfolio",
    },
    {
      id: 3,
      to: "/",
      title: "About Me",
    },
    {
      id: 4,
      to: "/",
      title: "Testimonials",
    },
  ];
  return (
    <>
      <div className="flex justify-around mx-4 text-gray-600 py-4 items-center">
        <div className="flex justify-around gap-4">
          {menu &&
            menu.map((m) => (
              <Link
                key={m.id}
                href={m.to}
                className="hover:bg-gray-700 hover:text-white p-2 rounded-md"
              >
                {m.title}
              </Link>
            ))}
        </div>
        <div className="flex gap-1 items-center">
          <button className="p-4 rounded-sm border">Download CV</button>
          <ThemeSwitcher />
        </div>
      </div>
    </>
  );
};
