export default function LoadingPage() {
  return (
    <div className="flex h-[80vh] w-full flex-col items-center justify-center bg-background">
      <div className="relative flex flex-col items-center justify-center gap-6 animate-in fade-in zoom-in duration-500">
        <div className="relative h-24 w-24 overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-border/20 flex items-center justify-center">
          {/* Reemplaza el src con la ruta del logo de la empresa para testeo, p.ej. '/images/logo.png' */}
          <img
            src="/images/img-ejemplo.jpg"
            alt="Cargando plataforma..."
            className="h-16 w-16 object-contain animate-pulse"
          />
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
            <div className="h-2.5 w-2.5 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
            <div className="h-2.5 w-2.5 rounded-full bg-primary animate-bounce" />
          </div>
          <p className="text-sm font-medium text-muted-foreground animate-pulse">
            Cargando plataforma...
          </p>
        </div>
      </div>
    </div>
  );
}
