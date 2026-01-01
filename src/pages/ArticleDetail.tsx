import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { articles } from "@/data/content";

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl text-primary mb-4">Article Not Found</h1>
            <Link to="/musings" className="text-xl text-primary underline">
              ← Back to Musings
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
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content */}
        <article className="section-padding">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/musings"
              className="inline-flex items-center gap-2 text-xl text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft size={20} />
              Back to Musings
            </Link>

            <div className="animate-fade-up">
              <time className="text-lg text-muted-foreground">{article.date}</time>
              <h1 className="text-4xl md:text-6xl text-primary mt-2 mb-8">
                {article.title}
              </h1>
              
              <div className="prose prose-lg max-w-none">
                {article.content.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-xl md:text-2xl leading-relaxed text-foreground mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default ArticleDetail;
