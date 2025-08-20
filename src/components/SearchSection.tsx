import { useState } from "react";
import { Search, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SearchSection = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section className="bg-gradient-hero py-16 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Sistem Pengecekan Pelanggaran Siswa</h2>
          <p className="text-lg opacity-90">Masukkan nama atau NIS siswa untuk melihat riwayat pelanggaran</p>
        </div>
        
        <Card className="max-w-2xl mx-auto shadow-large">
          <CardHeader className="text-center">
            <CardTitle className="text-foreground flex items-center justify-center gap-2">
              <UserCheck className="h-6 w-6" />
              Cari Data Siswa
            </CardTitle>
            <CardDescription>
              Ketik nama lengkap atau nomor induk siswa (NIS)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Input
                placeholder="Contoh: Ahmad Fauzi atau 2024001"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1"
              />
              <Button 
                onClick={handleSearch} 
                className="bg-gradient-primary hover:bg-primary-dark transition-all duration-300"
                disabled={!searchQuery.trim()}
              >
                <Search className="h-4 w-4 mr-2" />
                Cari
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SearchSection;