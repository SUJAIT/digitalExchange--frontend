
const Services = () => {

    const services = [
        {
          name: "App Store",
          img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/app-store-icon-gift-cards-202102?wid=102&hei=102&fmt=png-alpha&.v=1654894046669"
        },
        {
          name: "Arcade",
          img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-arcade-icon-gift-cards-202102?wid=102&hei=102&fmt=png-alpha&.v=1654894185150"
        },
        {
          name: "Music",
          img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-music-icon-gift-cards-202102?wid=102&hei=102&fmt=png-alpha&.v=1654894050009"
        },
        {
          name: "TV+",
          img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-tv-icon-gift-cards-202102?wid=102&hei=102&fmt=png-alpha&.v=1654894164669"
        },
        {
          name: "iTunes",
          img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/itunes-icon-gift-cards-202102?wid=102&hei=102&fmt=png-alpha&.v=1654894078171"
        },
        {
          name: "Apple One",
          img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-one-icon-gift-cards-202102?wid=102&hei=102&fmt=png-alpha&.v=1654894098860"
        },
        {
          name: "Fitness+",
          img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-fitness-icon-gift-cards-202102?wid=102&hei=102&fmt=png-alpha&.v=1654894112427"
        },
        {
          name: "iCloud+",
          img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/icloud-icon-gift-cards-202102?wid=102&hei=102&fmt=png-alpha&.v=1654894109074"
        },
        {
          name: "News+",
          img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-news-icon-gift-cards-202102?wid=102&hei=102&fmt=png-alpha&.v=1654894085061"
        },
        {
          name: "Books",
          img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-books-icon-gift-cards-202102?wid=102&hei=102&fmt=png-alpha&.v=1654894168080"
        }
      ];

  return (
    <section className="py-12 bg-white">
    <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-items-center">
      {services.map((service, index) => (
        <div key={index} className="text-center">
          <img src={service.img} alt={service.name} className="w-16 h-16 mx-auto" />
          <p className="mt-2 text-sm font-medium text-gray-700">{service.name}</p>
        </div>
      ))}
    </div>
  </section>
  )
}

export default Services
