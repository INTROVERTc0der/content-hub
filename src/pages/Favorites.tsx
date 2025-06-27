
import { useState } from "react";
import { Heart, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ContentCard from "@/components/ContentCard";
import { mockContent } from "@/data/mockContent";

const Favorites = () => {
  const [sortBy, setSortBy] = useState("newest");
  const [categoryFilter, setCategoryFilter] = useState("all");
  
  // Mock favorites (in real app, this would come from state/localStorage)
  const favoriteContent = mockContent.filter((_, index) => index % 2 === 0);
  
  const filteredFavorites = categoryFilter === "all" 
    ? favoriteContent 
    : favoriteContent.filter(item => item.category.toLowerCase() === categoryFilter);

  const sortedFavorites = [...filteredFavorites].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
      case "oldest":
        return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
      case "most-liked":
        return b.likes - a.likes;
      default:
        return 0;
    }
  });

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg">
          <Heart className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Your Favorites</h1>
          <p className="text-gray-600">Content you've saved and liked</p>
        </div>
      </div>

      <div className="bg-white rounded-lg border p-6 mb-8">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <span className="font-medium">Filter & Sort</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="sports">Sports</SelectItem>
                <SelectItem value="entertainment">Entertainment</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="most-liked">Most Liked</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {sortedFavorites.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedFavorites.map((item) => (
            <ContentCard
              key={item.id}
              {...item}
              isSaved={true}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No favorites yet</h3>
          <p className="text-gray-600 mb-6">Start exploring content and save your favorites!</p>
          <Button className="bg-primary hover:bg-primary-600 text-white">
            Explore Content
          </Button>
        </div>
      )}
    </div>
  );
};

export default Favorites;
