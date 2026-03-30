import { ReactNode } from "react";
import { Sidebar } from "@/components/layout/sidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  // Integramos el Sidebar dentro de un contenedor en layout
  // El contenido de la derecha cargará automáticamente las páginas anidadas.
  return (
    <div className="flex h-screen w-full bg-background overflow-hidden relative">
      <Sidebar />
      <main className="flex-1 h-full overflow-y-auto bg-muted/40">
        {/* Aquí se inyectará posteriormente un Navbar.tsx si se desea */}
        <div className="container mx-auto p-4 md:p-8 max-w-7xl">{children}</div>
      </main>
    </div>
  );
}
