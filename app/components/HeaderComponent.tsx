import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { GrDocumentPdf } from "react-icons/gr";

export const HeaderComponent = () => {
  const menu = [
    {
      id: 1,
      to: "/",
      title: "Home",
    },
    {
      id: 2,
      to: "/#project",
      title: "Project",
    },
    {
      id: 3,
      to: "/#about",
      title: "About Me",
    },
    {
      id: 4,
      to: "/#testimonials",
      title: "Testimonials",
    },
  ];
  return (
    <>
      <div className="flex justify-around mx-4 text-gray-600 py-4 items-center sticky top-0 bg-white">
        <div className="hidden sm:flex justify-around gap-4">
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
          <button className="p-4 rounded-lg hover:shadow-md">
            <Link href="https://github.com/Boubacar-Beuzy-Ba" target="_blank">
              <FaGithub />
            </Link>
          </button>
          <button className="p-4 rounded-lg hover:shadow-md">
            <Link
              href="https://www.linkedin.com/in/boubacar-ba-491246145/"
              target="_blank"
            >
              <FaLinkedin />
            </Link>
          </button>
          <button className="p-4 rounded-lg hover:shadow-md">
            <Link href="mailto: bouba0178@gmail.com">
              <SiGmail />
            </Link>
          </button>
          <button className="p-4 rounded-lg hover:shadow-md">
            <Link
              href="/Boubacar Resume CSM & Web.pdf"
              locale={false}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrDocumentPdf />
            </Link>
          </button>
          <ThemeSwitcher />
        </div>
      </div>
    </>
  );
};
