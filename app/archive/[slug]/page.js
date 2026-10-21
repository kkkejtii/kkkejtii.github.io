import { notFound } from 'next/navigation';
import { getProjectBySlug, projects } from '../../../lib/projects';
import ProjectDetail from './ProjectDetail';

export async function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  // Samo imię i nazwisko dokleja szablon z app/layout.js ("%s — Katarzyna Kołodziej"),
  // więc podajemy tu wyłącznie nazwę projektu — inaczej nazwisko pojawia się dwa razy.
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
