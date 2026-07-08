export default function Sidebar({ items, active, onSelect }) {
  return (
    <nav aria-label="API Documentation" className="py-3">
      <ul className="space-y-0.5 px-3">
        {items.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => onSelect(item.id)}
              className={`w-full rounded-lg px-3 py-2 text-left text-xs font-medium transition-colors duration-150 ${
                active === item.id
                  ? 'bg-primary/10 text-primary'
                  : 'text-body hover:bg-surface-soft hover:text-ink'
              }`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
