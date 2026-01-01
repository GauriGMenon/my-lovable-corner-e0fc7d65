import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

const ProjectCard = ({ id, title, description, imageUrl, tags }: ProjectCardProps) => {
  return (
    <Link to={`/projects/${id}`} className="block">
      <article className="card-hover rounded-2xl overflow-hidden bg-card">
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-2xl md:text-3xl text-primary mb-3">{title}</h3>
          <p className="text-lg text-foreground/80 line-clamp-2">{description}</p>
        </div>
      </article>
    </Link>
  );
};

export default ProjectCard;
