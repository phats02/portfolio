import { DATA, getProjectData } from "@/app/data";
import { Metadata } from "next";

export const revalidate = 604800;

type LayoutProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: LayoutProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = getProjectData(resolvedParams.slug);

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

export function generateStaticParams() {
  return Object.values(DATA.PROJECTS).map((project) => ({
    slug: project.SLUG,
  }));
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
