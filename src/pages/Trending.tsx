
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp, Clock } from "lucide-react";
import ContentCard from "@/components/ContentCard";
import { mockContent } from "@/data/mockContent";

const Trending = () => {
  const [loadMore, setLoadMore] = useState(false);
  
  // Sort by likes for trending content
  const trendingContent = [...mockContent].sort((a, b) => b.likes - a.likes);
  const displayContent = loadMore ? trendingContent : trendingContent.slice(0, 6);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg">
          <TrendingUp className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Trending Now</h1>
          <p className="text-gray-600">Most popular content across all categories</p>
        </div>
      </div>

      <div className="bg-white rounded-lg border p-6 mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            <span className="font-medium">Last updated: Just now</span>
          </div>
          <div className="text-sm text-gray-500">
            Showing {displayContent.length} of {trendingContent.length} trending items
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayContent.map((item, index) => (
          <div key={item.id} className="relative">
            <div className="absolute -top-2 -left-2 z-10 w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
              {index + 1}
            </div>
            <ContentCard {...item} />
          </div>
        ))}
      </div>

      {!loadMore && trendingContent.length > 6 && (
        <div className="flex justify-center mt-12">
          <Button 
            onClick={() => setLoadMore(true)}
            className="bg-primary hover:bg-primary-600 text-white"
          >
            Load More Trending
          </Button>
        </div>
      )}
    </div>
  );
};

export default Trending;
