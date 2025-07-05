export default function Gallery() {
  const images = Array.from({ length: 9 }, (_, i) => `https://source.unsplash.com/400x300/?hotel,room,${i}`)
  return (
    <div className="py-16 px-4">
      <h1 className="text-4xl font-bold mb-10 text-center">Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {images.map((img, i) => (
          <img key={i} src={img} className="w-full h-64 object-cover rounded shadow" alt={`Gallery ${i + 1}`} />
        ))}
      </div>
    </div>
  )
}
