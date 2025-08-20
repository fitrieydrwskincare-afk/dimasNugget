import { TrendingUp, AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const StatsSection = () => {
  const stats = [
    {
      title: "Total Siswa",
      value: "1,247",
      icon: TrendingUp,
      color: "text-primary",
      bgColor: "bg-primary-light"
    },
    {
      title: "Pelanggaran Ringan",
      value: "23",
      icon: CheckCircle,
      color: "text-success",
      bgColor: "bg-success-light"
    },
    {
      title: "Pelanggaran Sedang",
      value: "8",
      icon: AlertTriangle,
      color: "text-warning",
      bgColor: "bg-warning-light"
    },
    {
      title: "Pelanggaran Berat",
      value: "2",
      icon: XCircle,
      color: "text-destructive",
      bgColor: "bg-destructive-light"
    }
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-2">Statistik Pelanggaran</h3>
          <p className="text-muted-foreground">Data pelanggaran siswa bulan ini</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-soft hover:shadow-medium transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className={`text-3xl font-bold ${stat.color}`}>
                  {stat.value}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;