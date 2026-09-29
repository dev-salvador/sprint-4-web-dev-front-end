// Props: scenes (array vindo da API), loading, error
export default function ScenesTable({ scenes, loading, error }) {
  if (loading) return <p className="font-mono text-sm text-dark/60">Carregando cenas da API…</p>
  if (error) return <p role="alert" className="font-mono text-sm text-accent">Não foi possível carregar: {error}</p>

  return (
    <div className="overflow-x-auto rounded-2xl border border-dark/10 bg-white">
      <table className="w-full min-w-[560px] text-left text-sm">
        <thead className="bg-dark text-light">
          <tr>
            <th className="p-4 font-mono font-medium">Situação detectada</th>
            <th className="p-4 font-mono font-medium">Ajuste automático da câmera</th>
            <th className="p-4 font-mono font-medium">Resultado para o usuário</th>
          </tr>
        </thead>
        <tbody>
          {scenes.map((s) => (
            <tr key={s.id} className="border-t border-dark/10 odd:bg-light/40">
              <td className="p-4 font-medium">{s.scene}</td>
              <td className="p-4">{s.adjustment}</td>
              <td className="p-4">{s.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
