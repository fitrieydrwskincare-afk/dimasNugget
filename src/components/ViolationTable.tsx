import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertTriangle, Clock, User } from "lucide-react";

interface Violation {
  id: string;
  studentName: string;
  nis: string;
  violation: string;
  severity: "Ringan" | "Sedang" | "Berat";
  date: string;
  status: "Active" | "Resolved";
}

const ViolationTable = ({ searchQuery }: { searchQuery: string }) => {
  // Mock data - in real app this would come from API
  const violations: Violation[] = [
    {
      id: "1",
      studentName: "Ahmad Fauzi",
      nis: "2024001",
      violation: "Terlambat masuk kelas",
      severity: "Ringan",
      date: "2024-01-15",
      status: "Active"
    },
    {
      id: "2",
      studentName: "Siti Nurhaliza",
      nis: "2024002",
      violation: "Tidak menggunakan seragam lengkap",
      severity: "Sedang",
      date: "2024-01-14",
      status: "Resolved"
    },
    {
      id: "3",
      studentName: "Budi Santoso",
      nis: "2024003",
      violation: "Merokok di area sekolah",
      severity: "Berat",
      date: "2024-01-13",
      status: "Active"
    },
    {
      id: "4",
      studentName: "Dewi Kartika",
      nis: "2024004",
      violation: "Terlambat mengumpulkan tugas",
      severity: "Ringan",
      date: "2024-01-12",
      status: "Resolved"
    }
  ];

  const filteredViolations = violations.filter(violation =>
    violation.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    violation.nis.includes(searchQuery)
  );

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Ringan":
        return "bg-success text-success-foreground";
      case "Sedang":
        return "bg-warning text-warning-foreground";
      case "Berat":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusColor = (status: string) => {
    return status === "Active" 
      ? "bg-destructive text-destructive-foreground"
      : "bg-success text-success-foreground";
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-6 w-6" />
              {searchQuery ? `Hasil Pencarian: "${searchQuery}"` : "Riwayat Pelanggaran Terbaru"}
            </CardTitle>
            <CardDescription>
              {searchQuery 
                ? `Ditemukan ${filteredViolations.length} hasil`
                : "Daftar pelanggaran siswa yang tercatat dalam sistem"
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            {filteredViolations.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Siswa
                    </TableHead>
                    <TableHead>Pelanggaran</TableHead>
                    <TableHead>Tingkat</TableHead>
                    <TableHead className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Tanggal
                    </TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredViolations.map((violation) => (
                    <TableRow key={violation.id} className="hover:bg-muted/50">
                      <TableCell>
                        <div>
                          <div className="font-medium">{violation.studentName}</div>
                          <div className="text-sm text-muted-foreground">NIS: {violation.nis}</div>
                        </div>
                      </TableCell>
                      <TableCell>{violation.violation}</TableCell>
                      <TableCell>
                        <Badge className={getSeverityColor(violation.severity)}>
                          {violation.severity}
                        </Badge>
                      </TableCell>
                      <TableCell>{violation.date}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(violation.status)}>
                          {violation.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <div className="text-center py-12">
                <User className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {searchQuery ? "Tidak ada hasil ditemukan" : "Belum ada pelanggaran"}
                </h3>
                <p className="text-muted-foreground">
                  {searchQuery 
                    ? "Coba gunakan kata kunci yang berbeda"
                    : "Semua siswa berperilaku baik"}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ViolationTable;