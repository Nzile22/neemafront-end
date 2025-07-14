export default function Contact() {
  return (
    <main className="pt-28 px-4 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-green-800">Get in Touch</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Name"
               className="w-full border-gray-300 rounded-lg p-3 focus:border-green-600 focus:ring-green-600" />
        <input type="email" placeholder="Email"
               className="w-full border-gray-300 rounded-lg p-3 focus:border-green-600 focus:ring-green-600" />
        <textarea rows="4" placeholder="Message"
                  className="w-full border-gray-300 rounded-lg p-3 focus:border-green-600 focus:ring-green-600" />
        <button type="submit"
                className="block w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">
          Send Message
        </button>
      </form>
    </main>
  );
}
