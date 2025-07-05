export default function Rooms() {
  const rooms = [
    { title: 'Single Room', price: '$99/night', image: 'https://source.unsplash.com/400x300/?single-room' },
    { title: 'Double Room', price: '$149/night', image: 'https://source.unsplash.com/400x300/?double-room' },
    { title: 'Suite', price: '$249/night', image: 'https://source.unsplash.com/400x300/?hotel-suite' },
  ]
  return (
    <div className="py-16 bg-gray-100 px-4">
      <h1 className="text-4xl font-bold mb-10 text-center">Our Rooms</h1>
      <div className="grid md:grid-cols-3 gap-8 container mx-auto">
        {rooms.map((room, i) => (
          <div key={i} className="bg-white shadow-md rounded overflow-hidden">
            <img src={room.image} className="w-full h-56 object-cover" alt={room.title} />
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2">{room.title}</h2>
              <p className="text-gray-600 mb-4">Spacious and well-furnished with modern amenities.</p>
              <span className="text-blue-600 font-bold">{room.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
