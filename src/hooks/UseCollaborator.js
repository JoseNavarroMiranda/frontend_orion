import { useEffect, useState } from "react";

const API_BASE = import.meta.env.VITE_API_URL;

export function useCollaborator() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${API_BASE}/evaluations/collaborator/`);
        if (!res.ok) throw new Error("No se pudo cargar colaboradores");
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return { data, loading, error };
}
