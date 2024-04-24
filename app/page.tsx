import Image from "next/image";
import { HeaderComponent } from "./components/HeaderComponent";
import { HeroComponent } from "./components/HeroComponent";
import { AboutMeComponent } from "./components/AboutMeComponent";
import { ContactMeConponent } from "./components/ContactMeComponent";
import { ProjectCardComponent } from "./components/ProjectCardComponent";
import { CarousselComponent } from "./components/CarousselComponent";
import { FooterComponent } from "./components/FooterComponent";

export default function Home() {
  return (
    <>
      <header>
        <HeaderComponent />
      </header>
      <HeroComponent />
      <div className="mx-auto w-[75%]">
        <AboutMeComponent />
      </div>
      <div className="w-[75%] mx-auto">
        <hr className="mx-16" />
        <h2 className="text-2xl text-center font-semibold my-6">Projects</h2>
        <ProjectCardComponent />
        <hr className="mx-16" />
      </div>
      <div className="w-[70%] mx-auto">
        <ContactMeConponent />
      </div>
      <footer>
        <FooterComponent />
      </footer>
    </>
  );
}
