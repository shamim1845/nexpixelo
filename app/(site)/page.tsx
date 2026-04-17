import {
  getHomePage,
  getPosts,
  getProjects,
  getServices,
  getTestimonials,
} from "@/lib/fetchers";
import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import LatestNewsSection from "@/components/LatestNewsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import Navbar from "@/components/Navbar";

export default async function HomePage() {
  const [homeData, services, projects, testimonials, posts] = await Promise.all([
    getHomePage(),
    getServices(),
    getProjects(),
    getTestimonials(),
    getPosts(),
  ]);

  console.log({ posts });


  return (
    <main className="">
      <div
        style={{
          background: "linear-gradient(180deg, #E4E3FF 0%, #FFE6F9 43.27%, #FFFFFF 100%)",
        }}
      >
        <Navbar />
        <HeroSection data={homeData?.hero} />
        <ServicesSection services={services} />
      </div>

      {/* <div className="bg-[#E4DFFF]">
        <ProjectsSection projects={projects} />
      </div> */}


      {/* <div className="bg-white">
        <AboutSection about={homeData?.about} aboutCta={homeData?.aboutCta} />
        <TestimonialsCarousel testimonials={testimonials} />
      </div> */}


      {/*       
      <div className="bg-[#E4DFFF]">
        <LatestNewsSection posts={posts} />
      </div> */}
    </main>
  );
}
