export default function Button({ children, onClick }: { children: React.ReactNode, onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg font-medium transition-colors"
    >
      {children}
    </button>
  )
}
