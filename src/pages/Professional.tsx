import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SkillBar from "@/components/SkillBar";
import profilePhoto from "@/assets/profile-photo.png";

const Professional = () => {
  const skills = [
    { name: "Writing & Content Creation", level: 95 },
    { name: "Graphic Design", level: 85 },
    { name: "Web Development", level: 75 },
    { name: "Photography", level: 70 },
    { name: "Video Editing", level: 65 },
    { name: "Social Media Management", level: 80 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Profile Image */}
              <div className="animate-fade-up">
                <div className="profile-image-container max-w-md mx-auto lg:max-w-none">
                  <img
                    src={profilePhoto}
                    alt="Gauri G Menon - Professional"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="text-center lg:text-left animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl text-primary mb-8">
                  Professional
                </h1>
                <p className="text-xl md:text-2xl leading-relaxed text-foreground">
                  I'm a creative professional with a passion for storytelling and design. My work spans across writing, design, and digital creation. I believe in creating experiences that resonate with people on a deeper level.
                </p>
                <p className="text-xl md:text-2xl leading-relaxed text-foreground mt-6">
                  When I'm not creating, you'll find me exploring new coffee shops, getting lost in a good book, or planning my next adventure. I thrive on collaboration and love working with teams that share my passion for meaningful work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="section-padding bg-secondary/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl text-primary text-center mb-12 animate-fade-up">
              Skills
            </h2>
            <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
              {skills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Professional;
