export default function Gallery() {
  const images = [
    "https://cdn.pixabay.com/photo/2016/11/29/09/17/hotel-1867271_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/03/27/14/56/bedroom-2178967_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/11/18/13/47/hotel-1831072_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/12/18/21/20/hotel-1919779_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/11/19/17/15/hotel-1831073_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/06/24/20/18/luxury-2430590_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/12/18/18/42/hotel-1919875_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/03/06/12/33/bedroom-2122155_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/01/15/20/07/bedroom-1986052_1280.jpg"
  ]

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
