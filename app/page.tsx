import { getHomePage } from "@/lib/fetchers";
import HeroSection from "@/components/HeroSection";

export default async function HomePage() {
  const homeData = await getHomePage();

  console.log(homeData);

  return (
    <main className="flex flex-1 flex-col">
      <HeroSection data={homeData} />
    </main>
  );
}
