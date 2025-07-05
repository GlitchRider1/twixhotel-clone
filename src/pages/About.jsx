export default function About() {
  return (
    <div className="py-16 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">About TwixHotel</h1>
      <p className="text-gray-700 leading-7 text-lg">
        TwixHotel is a luxury hotel committed to providing top-tier hospitality services. Located in the heart of the city, we offer stunning views, spacious rooms, and exceptional amenities designed to ensure your stay is comfortable and memorable.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <img src="https://images.unsplash.com/photo-1558959357-685f9dbe6139" alt="Hotel" className="rounded shadow" />
        <ul className="text-gray-700 space-y-3">
          <li>✔ 24/7 Concierge Service</li>
          <li>✔ Fine Dining Restaurant</li>
          <li>✔ Spa and Wellness Center</li>
          <li>✔ Rooftop Pool</li>
        </ul>
      </div>
    </div>
  )
}
