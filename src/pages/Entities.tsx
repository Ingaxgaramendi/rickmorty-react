import { useEffect, useState } from "react";
import type { Character, ApiResponse } from "../types/character";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

export default function Entities() {
  const [entities, setEntities] = useState<Character[]>([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data: ApiResponse) => setEntities(data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-green-500">
        Detailed characters
      </h1>

      {/* 🟢 Mejora: Grilla ajustada (4 cols en md) para acompañar fotos más pequeñas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {entities.map((entity) => (
          <Card
            key={entity.id}
            className="flex flex-col justify-between overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <div>
              {/* 📸 Imagen del personaje RE-AJUSTADA (Mucho más pequeña) */}
              <div className="w-full h-40 overflow-hidden bg-muted border-b">
                <img
                  src={entity.image}
                  alt={entity.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>

              <CardHeader className="p-4">
                <CardTitle className="text-base truncate" title={entity.name}>
                  {entity.name}
                </CardTitle>
              </CardHeader>
            </div>

            <CardContent className="space-y-1.5 text-xs text-muted-foreground p-4 pt-0">
              {/* Requisito: Al menos 3 propiedades visibles */}
              <p className="flex items-center gap-1.5">
                <span className="text-sm">🧬</span>{" "}
                <span className="font-medium text-foreground">Species:</span>{" "}
                {entity.species}
              </p>
              <p className="flex items-center gap-1.5">
                <span className="text-sm">❤️</span>{" "}
                <span className="font-medium text-foreground">Status:</span>{" "}
                {entity.status}
              </p>
              <p className="flex items-center gap-1.5">
                <span className="text-sm">📍</span>{" "}
                <span className="font-medium text-foreground">Location:</span>{" "}
                <span className="truncate" title={entity.location.name}>
                  {entity.location.name}
                </span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
