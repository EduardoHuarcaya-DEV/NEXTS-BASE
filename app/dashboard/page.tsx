import { Header } from "@/components/layout/header";

export default function DashboardHomePage() {
  return (
    <>
      <Header
        title="Inicio del Dashboard"
        description="Esta es una página de prueba para verificar el Layout de Next.js"
        breadcrumbs={[{ label: "Dashboard", to: "/" }, { label: "Inicio" }]}
      />
      <div className="p-4">
        <div className="bg-white rounded-xl border border-gray-200 p-6 flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <h2 className="text-xl font-medium text-gray-800 mb-2">
              ¡Layout configurado correctamente!
            </h2>
            <p className="text-gray-500 max-w-md mx-auto">
              El Sidebar y el Header ahora están renderizándose de manera
              persistente utilizando el App Router de Next.js.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
