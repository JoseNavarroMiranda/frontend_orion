import Card from "./Card"

export default function Fcard({ title, desc, badge, children }) {
    return (
        <Card
        badge="Creación de sistemas SaaS a medida"
        title="Sistema a medida con enfoque en crecimiento"
        desc="Diseño y desarrollo de plataformas escalables para automatizar procesos, vender servicios y centralizar tu operación.">
        <ul className="mt-2 space-y-2 text-sm text-white">
          <li>• Diseño y desarrollo de sistemas</li>
          <li>• Modernos y llamativos</li>
          <li>• Accesos desde cualquier dispositivo</li>
        </ul>
      </Card>
    )
}