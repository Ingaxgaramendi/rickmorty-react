import { useEffect, useState } from "react";
import type { Character, ApiResponse } from "../types/character";
// 🟢 Solución: Se eliminó CardContent que no se usaba para evitar el error de TypeScript
import { Card, CardHeader, CardTitle } from "../components/ui/card";

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data: ApiResponse) => setCharacters(data.results.slice(0, 8))) // Tomamos 8 para el home
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mx-auto p-6 space-y-10">
      {/* HERO SECTION */}
      <section className="text-center py-12 bg-muted rounded-lg p-6 border">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-primary mb-4">
          Rick & Morty Universe 🛸
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explora los personajes, dimensions y locuras de la serie animada más
          retorcida del multiverso. Proyecto educativo en React + Vite.
        </p>
      </section>

      {/* API LIST */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Featured Characters</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {characters.map((char) => (
            <Card
              key={char.id}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={char.image}
                alt={char.name}
                className="w-full h-48 object-cover"
              />
              <CardHeader className="p-4">
                <CardTitle className="text-lg truncate">{char.name}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
