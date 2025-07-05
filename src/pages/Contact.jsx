export default function Contact() {
  return (
    <div className="py-16 px-4 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
      <form className="space-y-6">
        <div>
          <label className="block text-gray-700">Name</label>
          <input type="text" className="w-full border border-gray-300 rounded px-4 py-2 mt-1" />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input type="email" className="w-full border border-gray-300 rounded px-4 py-2 mt-1" />
        </div>
        <div>
          <label className="block text-gray-700">Message</label>
          <textarea className="w-full border border-gray-300 rounded px-4 py-2 mt-1 h-32" />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Send Message</button>
      </form>
    </div>
  )
}
