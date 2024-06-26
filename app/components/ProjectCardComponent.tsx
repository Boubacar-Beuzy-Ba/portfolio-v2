"use client";
import Image from "next/image";
import getPortfolioItems from "../utils/utilsContenful";
import { useRequest } from "ahooks";
import Link from "next/link";

export const ProjectCardComponent = () => {
  const { data, loading } = useRequest(getPortfolioItems);

  interface PortfolioItem {
    sys: { id: string };
    fields: {
      coverImage: {
        fields: {
          file: { url: string };
        };
      };
      title: string;
      description: {
        content: Array<{ content: Array<{ value: string }> }>;
      };
      demoUrl: string;
      sourceCodeUrl: string;
    };
  }

  return (
    <div className="flex flex-col md:grid md:grid-cols-3 md:gap-4" id="project">
      {loading
        ? "<p>Hey it's a loading</p>"
        : data &&
          (data as unknown as PortfolioItem[]).map((item) => (
            <div
              className="rounded-md shadow-md md:w-full w-auto mx-2 md:mx-10 my-3"
              key={item.sys.id}
            >
              <div className="">
                <img
                  src={"https:" + item.fields.coverImage.fields.file.url}
                  alt={item.fields.title}
                  className="min-w-80 min-h-auto md:w-full w-auto"
                />
              </div>
              <h1 className="text-xl mt-2 mx-4">{item.fields.title}</h1>
              <p className="text-md mx-4 text-wrap">
                {item.fields.description.content[0].content[0].value}
              </p>
              <div className="flex justify-between items-center mx-4 my-4">
                <button className="bg-[#F5FCFF] dark:bg-transparent dark:hover:ring-1 dark:ring-white p-2">
                  <Link href={item.fields.demoUrl} target="_blank">
                    Demo
                  </Link>
                </button>
                <button className="bg-[#F5FCFF] dark:bg-transparent dark:hover:ring-1 dark:ring-white p-2">
                  <Link href={item.fields.sourceCodeUrl} target="_blank">
                    Source Code
                  </Link>
                </button>
              </div>
            </div>
          ))}
    </div>
  );
};
