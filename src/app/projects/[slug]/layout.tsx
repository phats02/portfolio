import { DATA, getProjectData } from "@/app/data";
import { Metadata } from "next";
import { cache } from "react";
import Page from "./page";

export const revalidate = 604800;

const getProject = cache(getProjectData);

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = getProject(params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project does not exist.",
    };
  }

  return {
    title: `${project[0]} | Utkarsh Singhal`,
    description: project[1].DESCRIPTION[0],
    openGraph: {
      title: project[0],
      description: project[1].DESCRIPTION[0],
      images: [
        {
          url: project[1].IMAGE.src,
          width: 1200,
          height: 630,
          alt: project[0],
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  return Object.values(DATA.PROJECTS).map((project) => ({
    slug: project.SLUG,
  }));
}

export default async function ProjectLayout({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProject(params.slug);

  return <Page project={project} />;
}
