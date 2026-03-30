"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/components/providers/auth-provider";
import { moduleCategories } from "@/lib/modulos";
import { cn } from "@/lib/utils";
import { ChevronLeft, LogOut, LucideIcon } from "lucide-react";

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuth();

  const userRole = user?.rol || "";

  // Filtrar categorías que contengan al menos un módulo disponible para el rol
  const filteredCategories = moduleCategories
    .map((category) => ({
      ...category,
      modules: category.modules.filter((m) =>
        m.roles.includes(userRole as any),
      ),
    }))
    .filter((c) => c.modules.length > 0);

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  return (
    <aside
      className={cn(
        "relative flex flex-col border-r bg-background transition-all duration-300 ease-in-out h-screen z-40 shrink-0",
        isCollapsed ? "w-[72px]" : "w-64",
      )}
    >
      {/* Botón Flotante para Colapsar/Expandir */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={cn(
          "flex h-6 w-6 items-center justify-center rounded-full border bg-background hover:bg-accent transition-all absolute top-4 -right-3 shadow-sm text-muted-foreground hover:text-foreground z-50",
          isCollapsed && "rotate-180",
        )}
        aria-label={isCollapsed ? "Expandir menú" : "Contraer menú"}
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      {/* Header del Sidebar */}
      <div className="flex h-14 items-center px-4 border-b shrink-0">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold shrink-0">
            AD
          </div>
          {!isCollapsed && (
            <div className="flex flex-col truncate transition-opacity duration-300">
              <span className="font-semibold text-sm leading-none text-foreground">
                Company
              </span>
              <span className="text-[10px] text-muted-foreground mt-1 uppercase tracking-wider">
                Description
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Navegación y Rutas */}
      <div className="flex-1 overflow-y-auto overflow-x-visible py-4 px-3 space-y-5">
        {filteredCategories.map((category) => (
          <div key={category.id} className="flex flex-col gap-1">
            {/* Título de la Categoría */}
            {!isCollapsed ? (
              <p className="px-2 text-xs font-semibold text-muted-foreground/70 uppercase tracking-wider mb-1 truncate">
                {category.title}
              </p>
            ) : (
              <div className="mx-auto mb-2 mt-2 h-[2px] w-6 bg-border rounded-full" />
            )}

            {/* Enlaces de Módulos */}
            {category.modules.map((module) => {
              const isActive =
                pathname === module.path ||
                pathname.startsWith(module.path + "/");
              const Icon = module.icon as LucideIcon;

              return (
                <Link
                  key={module.id}
                  href={module.path}
                  className={cn(
                    "group relative flex items-center gap-3 rounded-md px-2 py-2 text-sm font-medium transition-colors outline-none",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                    isCollapsed ? "justify-center px-0" : "justify-start",
                  )}
                >
                  <Icon
                    className={cn(
                      "h-4.5 w-4.5 shrink-0 transition-transform duration-200",
                      isActive && "scale-110",
                      isCollapsed ? "mx-auto" : "",
                    )}
                  />

                  {!isCollapsed && (
                    <span className="truncate">{module.name}</span>
                  )}

                  {/* Tooltip CSS (solo visible cuando el menú está colapsado) */}
                  {isCollapsed && (
                    <div className="absolute left-full ml-4 hidden group-hover:flex items-center z-100">
                      <div className="bg-popover text-popover-foreground text-[11px] font-medium px-2.5 py-1.5 rounded-md whitespace-nowrap shadow-md border animate-in fade-in zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:zoom-out-95">
                        {module.name}
                      </div>
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        ))}
      </div>

      {/* Footer del Sidebar (Información Usuario y Salir) */}
      <div className="border-t p-3 shrink-0">
        {!isCollapsed && user && (
          <div className="flex items-center gap-3 px-2 mb-3 mt-1">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground font-semibold text-xs shrink-0 ring-1 ring-border">
              {user.nombre?.charAt(0).toUpperCase()}
            </div>
            <div className="flex flex-col truncate">
              <span className="text-sm font-medium text-foreground truncate">
                {user.nombre}
              </span>
              <span className="text-[10px] text-muted-foreground truncate">
                {user.rol}
              </span>
            </div>
          </div>
        )}

        <button
          onClick={handleLogout}
          className={cn(
            "group relative flex w-full items-center gap-3 rounded-md px-2 py-2 text-sm font-medium text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors outline-none",
            isCollapsed && "justify-center px-0",
          )}
        >
          <LogOut className="h-4.5 w-4.5 shrink-0" />
          {!isCollapsed && <span>Cerrar sesión</span>}

          {isCollapsed && (
            <div className="absolute left-full ml-4 hidden group-hover:flex items-center z-100">
              <div className="bg-popover text-popover-foreground text-[11px] font-medium px-2.5 py-1.5 rounded-md whitespace-nowrap shadow-md border animate-in fade-in zoom-in-95">
                Cerrar sesión
              </div>
            </div>
          )}
        </button>
      </div>
    </aside>
  );
}
