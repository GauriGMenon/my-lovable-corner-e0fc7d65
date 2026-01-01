import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { projects } from "@/data/content";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl text-primary mb-4">Project Not Found</h1>
            <Link to="/projects" className="text-xl text-primary underline">
              ← Back to Projects
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Image */}
        <div className="w-full h-64 md:h-96 overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Content */}
        <article className="section-padding">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-xl text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft size={20} />
              Back to Projects
            </Link>

            <div className="animate-fade-up">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1 text-lg bg-secondary text-secondary-foreground rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h1 className="text-4xl md:text-6xl text-primary mb-8">
                {project.title}
              </h1>
              
              <div className="prose prose-lg max-w-none">
                {project.fullDescription.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-xl md:text-2xl leading-relaxed text-foreground mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-3 mt-8"
                >
                  View Project
                  <ExternalLink size={20} />
                </a>
              )}
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
