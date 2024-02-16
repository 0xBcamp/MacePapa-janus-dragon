import { Navbar } from "../components/navbar";
import "./globals.css";
import GamePage from "@/components/game-page";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-r from-primary via-muted-foreground to-secondary-foreground">
        <GamePage />
      </main>
    </>
  );
}
