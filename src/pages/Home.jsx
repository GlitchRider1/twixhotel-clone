export default function Home() {
  return (
    <div>
      <section className="bg-[url('https://images.unsplash.com/photo-1501117716987-c8e2a3b1d4b3')] bg-cover bg-center h-[80vh] flex items-center justify-center">
        <div className="bg-black bg-opacity-60 text-white p-8 rounded">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to TwixHotel</h1>
          <p className="text-lg md:text-xl">Experience luxury, comfort, and elegance</p>
        </div>
      </section>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">Featured Rooms</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {['Deluxe', 'Executive', 'Presidential'].map((room, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={`https://source.unsplash.com/400x300/?hotel-room,${idx}`} alt="Room" className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{room} Room</h3>
                  <p className="text-gray-600 mb-4">A blend of style and comfort perfect for your stay.</p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Book Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">Why Choose TwixHotel?</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h4 className="text-xl font-semibold mb-2">Prime Location</h4>
              <p className="text-gray-600">Close to city landmarks and attractions.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Exceptional Service</h4>
              <p className="text-gray-600">Our staff is available 24/7 for your needs.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Modern Amenities</h4>
              <p className="text-gray-600">Enjoy free WiFi, smart TVs, and spa access.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
