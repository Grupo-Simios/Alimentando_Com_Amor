import "./globals.css";
// components exports
import { Home } from "../components/Home/heroBanner";

function Page() {
  return (
    <>
      <main className="h-full bg-[#e6e6e6]">
        <Home />
      </main>
    </>
  );
}

export default Page;