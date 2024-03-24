"use client";
import Image from "next/image";
import getPortfolioItems from "../utils/utilsContenful";
import { useRequest } from "ahooks";
import Link from "next/link";

export const ProjectCardComponent = () => {
  const { data } = useRequest(getPortfolioItems);

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
    <div className="grid grid-cols-3 gap-4">
      {data &&
        (data as unknown as PortfolioItem[]).map((item) => (
          <div
            className="rounded-md shadow-md w-auto mx-10 my-3"
            key={item.sys.id}
          >
            <div className="mx-4">
              <Image
                src={"https:" + item.fields.coverImage.fields.file.url}
                width={300}
                height={300}
                alt={item.fields.title}
              />
            </div>
            <h1 className="text-xl mt-2 mx-4">{item.fields.title}</h1>
            <p className="text-sm mx-4">
              {item.fields.description.content[0].content[0].value}
            </p>
            <div className="flex justify-between items-center mx-4 my-4">
              <button className="bg-[#F5FCFF] p-2">
                <Link href={item.fields.demoUrl} target="_blank">
                  Demo
                </Link>
              </button>
              <button className="bg-[#F5FCFF] p-2">
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
