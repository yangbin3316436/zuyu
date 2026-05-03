import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "项目未找到 | 天上人间洗浴中心",
    };
  }

  return {
    title: `${project.title} | 天上人间洗浴中心`,
    description: project.intro,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <header className="project-topbar">
        <Link href="/">天上人间洗浴中心</Link>
        <nav aria-label="项目页导航">
          <Link href="/#glam">魅力项目</Link>
          <Link href="/#contact">预约到店</Link>
        </nav>
      </header>

      <main className="project-main">
        <section className="project-hero">
          <img src={project.image} alt={project.alt} />
          <div className="project-hero-copy">
            <small>{project.eyebrow}</small>
            <h1>{project.title}</h1>
            <p>{project.intro}</p>
            <Link className="btn btn-primary" href="/#contact">
              预约此项目
            </Link>
          </div>
        </section>

        <section className="project-content">
          <div>
            <h2>{project.contentTitle}</h2>
            <ul>
              {project.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <aside>
            <h2>参考价格</h2>
            <p className="price">
              {project.price} <span>{project.priceUnit}</span>
            </p>
            <p>{project.note}</p>
          </aside>
        </section>
      </main>
    </>
  );
}
