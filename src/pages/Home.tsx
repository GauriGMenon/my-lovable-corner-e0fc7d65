import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import profilePhoto from "@/assets/profile-photo.png";
import { articles } from "@/data/content";

const Home = () => {
  const navigate = useNavigate();

  const handleRandomArticle = () => {
    const randomIndex = Math.floor(Math.random() * articles.length);
    const randomArticle = articles[randomIndex];
    navigate(`/musings/${randomArticle.id}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Profile Image */}
              <div className="order-2 lg:order-1 animate-fade-up">
                <div className="profile-image-container max-w-md mx-auto lg:max-w-none">
                  <img
                    src={profilePhoto}
                    alt="Gauri G Menon"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="order-1 lg:order-2 text-center lg:text-left animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <h1 className="text-6xl md:text-7xl lg:text-8xl text-primary mb-8">
                  Hello!
                </h1>
                <p className="text-xl md:text-2xl leading-relaxed text-foreground mb-10">
                  This Website was born out of the joy of writing, a dash of loneliness and a weird interest in pastel colour schemes. I write about things that touch me: which could be an idea, a song, or a kickass Bangalore dosa. Browse through "Musings" to find something interesting. If you're feeling lucky, you can risk clicking the button below.
                </p>
                <button
                  onClick={handleRandomArticle}
                  className="btn-primary text-2xl md:text-3xl"
                >
                  Read Something Random
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
