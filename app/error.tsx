"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCcw } from "lucide-react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Reportar el error a un servicio de tracking si se requiere a futuro.
    console.error("ErrorBoundary detectó un fallo crítico:", error);
  }, [error]);

  return (
    <div className="flex h-[80vh] w-full flex-col items-center justify-center bg-background p-4">
      <div className="max-w-md w-full text-center space-y-6 bg-card p-8 rounded-3xl border shadow-[0_8px_30px_rgba(0,0,0,0.04)] animate-in slide-in-from-bottom-6 duration-500">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-destructive/10">
          <AlertTriangle className="h-8 w-8 text-destructive" />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            Algo salió muy mal
          </h1>
          <p className="text-sm text-muted-foreground">
            Se ha producido un error inesperado al cargar la interfaz. Hemos
            registrado el incidente para solucionarlo a la brevedad.
          </p>
        </div>

        {/* Detalle técnico colapsado para desarrolladores/qa */}
        <div className="bg-muted/50 p-3 rounded-xl border border-border/50 text-left overflow-x-auto">
          <p className="text-xs font-mono text-muted-foreground whitespace-nowrap">
            {error.message || "Error interno de renderizado"}
          </p>
        </div>

        <div className="pt-4">
          <button
            onClick={() => reset()}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-foreground px-4 py-3 text-sm font-semibold text-background hover:bg-foreground/90 transition-all shadow-md active:scale-95 outline-none"
          >
            <RefreshCcw className="h-4 w-4" />
            Intentar nuevamente
          </button>
        </div>
      </div>
    </div>
  );
}
