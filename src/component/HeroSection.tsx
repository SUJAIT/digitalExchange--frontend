

const HeroSection = () => {
  return (
    <section className="text-center px-4 py-16 bg-white">
    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
      Apple Gift Card<br className="sm:hidden" /> Purchase Best Price.
    </h1>
    <a
      href="#"
      className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition"
    >
      Buy
    </a>

    {/* Single Gift Card Image */}
    <div className="mt-10 flex justify-center">
      <img
        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-gift-cards-landing-202006?wid=2982&hei=1176&fmt=jpeg&qlt=90&.v=1653339390751"
        alt="Apple Gift Cards"
        className="w-full max-w-4xl rounded-md shadow-md"
      />
    </div>

    <p className="mt-8 max-w-xl mx-auto text-sm text-gray-600">
      Products, accessories, apps, games, music, movies, TV shows, iCloud+, and more. This gift card does it all. And then some.
    </p>
  </section>
  )
}

export default HeroSection
