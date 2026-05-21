'use client'

export default function NewsletterForm() {
  return (
    <form
      className="flex flex-col sm:flex-row gap-4"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex-grow">
        <input
          type="email"
          required
          placeholder="Enter your business email"
          className="w-full h-14 px-6 rounded-2xl border border-outline-variant focus:ring-2 focus:ring-primary focus:border-primary transition-all font-body-md text-body-md outline-none"
        />
      </div>
      <button
        type="submit"
        className="accent_gradient text-white font-bold h-14 px-10 rounded-2xl shadow-lg hover:shadow-xl hover:opacity-95 transition-all whitespace-nowrap"
      >
        Subscribe Now
      </button>
    </form>
  )
}
