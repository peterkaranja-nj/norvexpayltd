export default function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10" aria-hidden="true">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/3 -right-32 w-72 h-72 bg-secondary/5 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute -bottom-20 left-1/4 w-80 h-80 bg-tertiary/5 rounded-full blur-3xl animate-float" />
    </div>
  )
}
