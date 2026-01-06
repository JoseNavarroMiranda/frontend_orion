import Card from "./Card"

export default function Fcard({ title, desc, badge, children }) {
    return (
        <Card
        badge="Servicios"
        title="Sitios web que convierten"
        desc="Landing pages y sitios corporativos enfocados en captar clientes y explicar tu propuesta de valor.">
        <ul className="mt-2 space-y-2 text-sm text-white">
          <li>• Secciones de conversión (CTA, testimonios, FAQ)</li>
          <li>• Diseño responsive</li>
          <li>• Integración con WhatsApp</li>
        </ul>
      </Card>
    )
}