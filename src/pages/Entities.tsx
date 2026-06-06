import { useEffect, useState } from "react";
import { Character, ApiResponse } from "@/types/character";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
        Detailed Entities
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {entities.map((entity) => (
          <Card key={entity.id} className="flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="text-xl">{entity.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              {/* Requisito: Al menos 3 propiedades visibles */}
              <p>
                🧬{" "}
                <span className="font-semibold text-foreground">Species:</span>{" "}
                {entity.species}
              </p>
              <p>
                ❤️{" "}
                <span className="font-semibold text-foreground">Status:</span>{" "}
                {entity.status}
              </p>
              <p>
                📍{" "}
                <span className="font-semibold text-foreground">Location:</span>{" "}
                {entity.location.name}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
