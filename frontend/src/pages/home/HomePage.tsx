import Topbar from "@/components/Topbar";
import { useMusicStore } from "@/stores/useMusicStore";
import { useEffect } from "react";
import FeaturedSection from "./components/FeaturedSection";
import { ScrollArea } from "@/components/ui/scroll-area";
import SectionGrid from "./components/SectionGrid";
import { usePlayerStore } from "./components/usePlayerStore";

const HomePage = () => {
  const {
    fetchFeaturedSong,
    fetchMadeForYouSong,
    fetchTrendingSong,
    isLoading,
    madeForYouSong,
    featuredSong,
    trendingSong,
  } = useMusicStore();

  const { initializeQueue } = usePlayerStore();

  useEffect(() => {
    fetchFeaturedSong();
    fetchMadeForYouSong();
    fetchTrendingSong();
  }, [fetchFeaturedSong, fetchMadeForYouSong, fetchTrendingSong]);

  useEffect(() => {
    if (
      madeForYouSong.length > 0 &&
      featuredSong.length > 0 &&
      trendingSong.length > 0
    ) {
      const allSongs = [...featuredSong, ...madeForYouSong, ...trendingSong];
      initializeQueue(allSongs);
    }
  }, [initializeQueue, madeForYouSong, trendingSong, featuredSong]);

  return (
    <main className="rounded-md overflow-hidden h-full bg-gradient-to-b from-zinc-800 to-zinc-900">
      <Topbar />
      <ScrollArea className="h-[calc(100vh-180px)]">
        <div className="p-4 sm:p-6">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6">
            Good afternoon
          </h1>
          <FeaturedSection />

          <div className="space-y-8">
            <SectionGrid
              title="Made For You"
              songs={madeForYouSong}
              isLoading={isLoading}
            />
            <SectionGrid
              title="Trending"
              songs={trendingSong}
              isLoading={isLoading}
            />
          </div>
        </div>
      </ScrollArea>
    </main>
  );
};

export default HomePage;
