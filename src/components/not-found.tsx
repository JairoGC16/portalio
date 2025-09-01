import { SearchX } from "lucide-react";
import Link from "next/link";

const NotFound = () => (
  <div className=" flex h-svh w-full items-center justify-center bg-accent-foreground">
    <div className="flex flex-col items-center justify-center gap-4 px-4 text-center">
      <SearchX className="text-primary-foreground h-[10lvh] w-[10lvh]" />
      <h1 className="text-primary-foreground text-3xl font-extrabold md:text-5xl">
        ¡Lo sentimos!
      </h1>
      <p className="text-primary-foreground/80 text-lg md:text-xl">
        No pudimos encontrar la página que buscabas. Prueba ir al inicio
      </p>
      <Link
        href="/"
        replace
        className="text-primary-foreground hover:text-primary-foreground/90 mt-2 font-bold underline underline-offset-4"
      >
        Ir al inicio
      </Link>
    </div>
  </div>
);

export default NotFound;
