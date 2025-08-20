import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold">SMK GLOBIN VIP</h3>
                <p className="text-sm opacity-80">Sekolah Menengah Kejuruan</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Sistem informasi pelanggaran siswa untuk membantu monitoring 
              dan pembinaan karakter siswa SMK GLOBIN VIP.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Kontak Sekolah</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 opacity-80" />
                <span>(021) 1234-5678</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 opacity-80" />
                <span>info@smkglobinvip.sch.id</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 opacity-80" />
                <span>Jl. Pendidikan No. 123, Jakarta</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Jam Operasional</h4>
            <div className="space-y-2 text-sm opacity-80">
              <div>Senin - Jumat: 07:00 - 16:00</div>
              <div>Sabtu: 07:00 - 14:00</div>
              <div>Minggu: Tutup</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © 2024 SMK GLOBIN VIP. Sistem Pelanggaran Siswa v1.0
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;