import Image from "next/image";
import { HeaderComponent } from "./components/HeaderComponent";
import { HeroComponent } from "./components/HeroComponent";
import { AboutMeComponent } from "./components/AboutMeComponent";
import { ContactMeConponent } from "./components/ContactMeComponent";
import { ProjectCardComponent } from "./components/ProjectCardComponent";

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <HeroComponent />
      <AboutMeComponent />
      <div>
        <hr className="mx-16" />
        <h2 className="text-2xl text-center font-semibold my-6">Projects</h2>
        <ProjectCardComponent />
        <hr className="mx-16" />
      </div>
      <ContactMeConponent />
    </>
  );
}
