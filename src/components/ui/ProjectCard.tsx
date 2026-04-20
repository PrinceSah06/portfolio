export default function ProjectCard({ title, description }: { title: string, description: string }) {
  return (
    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-pink-500 transition-colors">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </div>
  )
}
