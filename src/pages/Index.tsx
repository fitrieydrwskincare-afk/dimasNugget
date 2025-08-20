import { useState } from "react";
import Header from "@/components/Header";
import SearchSection from "@/components/SearchSection";
import StatsSection from "@/components/StatsSection";
import ViolationTable from "@/components/ViolationTable";
import Footer from "@/components/Footer";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SearchSection onSearch={handleSearch} />
      <StatsSection />
      <ViolationTable searchQuery={searchQuery} />
      <Footer />
    </div>
  );
};

export default Index;
