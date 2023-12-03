import Link from "next/link";
import { headers } from "next/headers";

export default async function NotFound() {
  const headersList = headers();
  const message = headersList.get("not-found-message");
  return (
    <div className="flex flex-col space-y-5">
      <h1>404 - Pagina niet gevonden</h1>
      {message && <p>{message}</p>}
      <Link href="/" legacyBehavior passHref>
        <a>Terug naar de homepagina</a>
      </Link>
    </div>
  );
}
