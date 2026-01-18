import { useCallback, useState } from "react";

const API_BASE = import.meta.env.VITE_API_URL;

export function UseContact() {
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);


    const sendContact = useCallback(async (payload) => {
        setStatus("enviando");
        setError(null);

        try {
            const reponse = await fetch(`${API_BASE}/evaluations/stackinfo/`,  {

                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),

            });
            if(!reponse.ok){
                const message = await reponse.text();
                throw new Error(message || `Error Http ${reponse.status}`);
            }
            setStatus("ok");
            return await reponse.json();
        } catch(err){
            const message = err instanceof Error ? err.message : "Contacte con el admin por este error"
            setError(message);
            setStatus("error");
            throw err;
        }
    
    }, []);

    return { status, error, sendContact };

}