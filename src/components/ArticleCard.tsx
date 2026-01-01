import { Link } from "react-router-dom";

interface ArticleCardProps {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
}

const ArticleCard = ({ id, title, excerpt, imageUrl, date }: ArticleCardProps) => {
  return (
    <Link to={`/musings/${id}`} className="block">
      <article className="card-hover rounded-2xl overflow-hidden bg-card">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="p-6">
          <time className="text-sm text-muted-foreground">{date}</time>
          <h3 className="text-2xl md:text-3xl text-primary mt-2 mb-3">{title}</h3>
          <p className="text-lg text-foreground/80 line-clamp-3">{excerpt}</p>
        </div>
      </article>
    </Link>
  );
};

export default ArticleCard;
