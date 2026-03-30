"use client";

import { FileQuestion, MoveLeft, Home } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="flex h-[80vh] w-full flex-col items-center justify-center bg-background p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary/5 ring-8 ring-primary/10">
          <FileQuestion className="h-10 w-10 text-primary" />
        </div>
        
        <div className="space-y-3">
          <h1 className="text-6xl font-bold tracking-tighter text-foreground drop-shadow-sm">404</h1>
          <h2 className="text-xl font-semibold text-foreground">Página no encontrada</h2>
          <p className="text-sm text-muted-foreground max-w-sm mx-auto">
            Exploramos en la base de datos pero no pudimos encontrar lo que buscas. Es posible que el enlace haya expirado o haya sido eliminado.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-6">
          <button
            onClick={() => router.back()}
            className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2.5 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-all shadow-sm active:scale-95 outline-none"
          >
            <MoveLeft className="h-4 w-4" />
            Volver atrás
          </button>
          
          <Link
            href="/"
            className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all shadow-sm active:scale-95 outline-none"
          >
            <Home className="h-4 w-4" />
            Ir al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}