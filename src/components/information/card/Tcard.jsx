import Card from "./Card"

export default function Tslide (){
    return(
        <Card
        badge="Diferenciadores"
        title="Performance, SEO y seguridad"
        desc="Buenas prácticas para que tu web cargue rápido, se encuentre en Google y sea más robusta."
      >
        <ul className="mt-2 space-y-2 text-sm text-white">
          <li>• Optimización de imágenes y carga</li>
          <li>• SEO técnico básico</li>
          <li>• Medidas contra ataques comunes</li>
        </ul>
      </Card>   
    )
}

