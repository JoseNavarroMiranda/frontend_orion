import Card from "./Card"

export default function Sslide (){
    return(
        <Card
        badge="Sistemas Saas"
        title="De idea a publicación"
        desc="Un flujo claro para que avances rápido y con entregables en cada etapa."
      >
        <ol className="mt-2 space-y-2 text-sm text-white">
          <li>1) Brief + objetivos</li>
          <li>2) Diseño (UI) + contenido</li>
          <li>3) Desarrollo + despliegue</li>
        </ol>
      </Card>   
    )
}

