
const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "travio_DEV/ewkbc5k7idqt96vswx3f",
      url: "https://res.cloudinary.com/dpkmmalcg/image/upload/v1767370971/travio_DEV/ewkbc5k7idqt96vswx3f.jpg",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-118.68942327797413, 34.03559120559928],
    },
    category: "Beach",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "travio_DEV/n5qxnglhwjgctvbndesd",
      url: "https://res.cloudinary.com/dpkmmalcg/image/upload/v1767380576/travio_DEV/n5qxnglhwjgctvbndesd.jpg",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-73.96998415985075, 40.774345149487196],
    },
    category: "City",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "travio_DEV/xi8muntko9qnweorlahl",
      url: "https://res.cloudinary.com/dpkmmalcg/image/upload/v1767381111/travio_DEV/xi8muntko9qnweorlahl.jpg",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-106.82356026023626, 39.19111301233276],
    },
    category: "Mountain",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "travio_DEV/z17j01nfupnxdcnwidga",
      url: "https://res.cloudinary.com/dpkmmalcg/image/upload/v1767626653/travio_DEV/z17j01nfupnxdcnwidga.jpg",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    geometry: {
      type: "Point",
      coordinates: [-79.76716607809067, 34.19844374687004],
    },
    category: "Farms",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "travio_DEV/vih12ih4xvipeejrt8pi",
      url: "https://res.cloudinary.com/dpkmmalcg/image/upload/v1767626831/travio_DEV/vih12ih4xvipeejrt8pi.jpg",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-122.67419412732124, 45.52024728220982],
    },
    category: "Camping",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "travio_DEV/idk2gogatdzdhywtkiat",
      url: "https://res.cloudinary.com/dpkmmalcg/image/upload/v1767626978/travio_DEV/idk2gogatdzdhywtkiat.jpg",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    geometry: {
      type: "Point",
      coordinates: [-86.84257630258799, 21.152746957637344],
    },
    category: "Beach",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "travio_DEV/vytptl7d4ii3ltnyhskd",
      url: "https://res.cloudinary.com/dpkmmalcg/image/upload/v1767627089/travio_DEV/vytptl7d4ii3ltnyhskd.jpg",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-119.9698894098401, 38.938296911641345],
    },
    category: "Mountain",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "travio_DEV/nbypsgdgnzbe9kna7sr4",
      url: "https://res.cloudinary.com/dpkmmalcg/image/upload/v1767627207/travio_DEV/nbypsgdgnzbe9kna7sr4.jpg",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-118.24276607483625, 34.05369110515695],
    },
    category: "City",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "travio_DEV/ahrhher59erfxnbrcqdu",
      url: "https://res.cloudinary.com/dpkmmalcg/image/upload/v1767627363/travio_DEV/ahrhher59erfxnbrcqdu.jpg",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    geometry: {
      type: "Point",
      coordinates: [7.228676341474056, 46.096101264532436],
    },
    category: "Mountain",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "travio_DEV/k9zv3c6acivol5b19hef",
      url: "https://res.cloudinary.com/dpkmmalcg/image/upload/v1767627997/travio_DEV/k9zv3c6acivol5b19hef.jpg",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    geometry: {
      type: "Point",
      coordinates: [34.67412527650595, -1.8397499056729705],
    },
    category: "Safari",
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "travio_DEV/oyrxv88n7cbgzmso1iww",
      url: "https://res.cloudinary.com/dpkmmalcg/image/upload/v1767628147/travio_DEV/oyrxv88n7cbgzmso1iww.jpg",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    geometry: {
      type: "Point",
      coordinates: [4.89245317876339, 52.373079696010734],
    },
    category: "City",
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "travio_DEV/qgq264bxp4h8kzskal48",
      url: "https://res.cloudinary.com/dpkmmalcg/image/upload/v1767628674/travio_DEV/qgq264bxp4h8kzskal48.jpg",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    geometry: {
      type: "Point",
      coordinates: [179.01227351278067, -18.12396947025067],
    },
    category: "Trending",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "travio_DEV/h2tlo9p2hudsnvjvyzfz",
      url: "https://res.cloudinary.com/dpkmmalcg/image/upload/v1767628858/travio_DEV/h2tlo9p2hudsnvjvyzfz.jpg",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    geometry: {
      type: "Point",
      coordinates: [175.02977457187467, -39.91245250347237],
    },
    category: "Farms",
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "travio_DEV/yyuwkdjjw8buf4wv4o1n",
      url: "https://res.cloudinary.com/dpkmmalcg/image/upload/v1767629044/travio_DEV/yyuwkdjjw8buf4wv4o1n.jpg",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-71.06051109731197, 42.35543358754016],
    },
    category: "City",
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "travio_DEV/pgksa3tgll39qtpstfpw",
      url: "https://res.cloudinary.com/dpkmmalcg/image/upload/v1767629185/travio_DEV/pgksa3tgll39qtpstfpw.jpg",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    geometry: {
      type: "Point",
      coordinates: [115.19192028790712, -8.227130238884806],
    },
    category: "Beach",
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "travio_DEV/jw8twfjflex9oa6muh6u",
      url: "https://res.cloudinary.com/dpkmmalcg/image/upload/v1767629323/travio_DEV/jw8twfjflex9oa6muh6u.jpg",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
    geometry: {
      type: "Point",
      coordinates: [-115.57207748293877, 51.175076138197355],
    },
    category: "Mountain",
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "travio_DEV/zxkqhnzh7p5h1z5k42oo",
      url: "https://res.cloudinary.com/dpkmmalcg/image/upload/v1767629432/travio_DEV/zxkqhnzh7p5h1z5k42oo.jpg",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-80.19359741359949, 25.774156703131922],
    },
    category: "City",
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "travio_DEV/arxmd4m6hjuseeb8fr3r",
      url: "https://res.cloudinary.com/dpkmmalcg/image/upload/v1767629568/travio_DEV/arxmd4m6hjuseeb8fr3r.jpg",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
    geometry: {
      type: "Point",
      coordinates: [98.38882449537277, 7.883534133823442],
    },
    category: "Pools",
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "travio_DEV/zxszcm004kfa1u6svhal",
      url: "https://res.cloudinary.com/dpkmmalcg/image/upload/v1767629687/travio_DEV/zxszcm004kfa1u6svhal.jpg",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    geometry: {
      type: "Point",
      coordinates: [-86.58499538898468, 36.32366161297616],
    },
    category: "Castles",
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      filename: "travio_DEV/qjrhtjtmesq04m5ongin",
      url: "https://res.cloudinary.com/dpkmmalcg/image/upload/v1767630112/travio_DEV/qjrhtjtmesq04m5ongin.jpg",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    geometry: {
      type: "Point",
      coordinates: [55.696369028566096, 25.28123764979892],
    },
    category: "Pools",
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      filename: "travio_DEV/cv6xq7dpizb3eoktfrrq",
      url: "https://res.cloudinary.com/dpkmmalcg/image/upload/v1767630212/travio_DEV/cv6xq7dpizb3eoktfrrq.jpg",
    },
    price: 1100,
    location: "Montana",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-109.63875722140074, 47.37526722067374],
    },
    category: "Mountain",
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "travio_DEV/yqxigokztnv1ybvmyciq",
      url: "https://res.cloudinary.com/dpkmmalcg/image/upload/v1767634496/travio_DEV/yqxigokztnv1ybvmyciq.jpg",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
    geometry: {
      type: "Point",
      coordinates: [25.32596569508314, 37.445037919901026],
    },
    category: "Beach",
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: "travio_DEV/oavkcj53owdeslpg42ff",
      url: "https://res.cloudinary.com/dpkmmalcg/image/upload/v1767634890/travio_DEV/oavkcj53owdeslpg42ff.jpg",
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
    geometry: {
      type: "Point",
      coordinates: [-84.07391030341387, 10.27356332255719],
    },
    category: "Camping",
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      filename: "travio_DEV/eb4anhepgnhowwyd1apt",
      url: "https://res.cloudinary.com/dpkmmalcg/image/upload/v1767635090/travio_DEV/eb4anhepgnhowwyd1apt.jpg",
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-79.93993118405342, 32.7884363555485],
    },
    category: "City",
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "travio_DEV/pdyxnlofxkcgszk0vdmi",
      url: "https://res.cloudinary.com/dpkmmalcg/image/upload/v1767635275/travio_DEV/pdyxnlofxkcgszk0vdmi.jpg",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
    geometry: {
      type: "Point",
      coordinates: [139.759455, 35.682839],
    },
    category: "City",
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      filename: "travio_DEV/ldxkhrotvmyu63wmq2ii",
      url: "https://res.cloudinary.com/dpkmmalcg/image/upload/v1767636173/travio_DEV/ldxkhrotvmyu63wmq2ii.jpg",
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-71.65539924055338, 43.48491332577259],
    },
    category: "Mountain",
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "travio_DEV/iyouxdaemuasgpdptm16",
      url: "https://res.cloudinary.com/dpkmmalcg/image/upload/v1767636417/travio_DEV/iyouxdaemuasgpdptm16.jpg",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
    geometry: {
      type: "Point",
      coordinates: [73.399658, 1.924992],
    },
    category: "Trending",
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "travio_DEV/ngk61gfmum2rvgkmy5zo",
      url: "https://res.cloudinary.com/dpkmmalcg/image/upload/v1767636742/travio_DEV/ngk61gfmum2rvgkmy5zo.jpg",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-106.82356026023626, 39.19111301233276],
    },
    category: "Mountain",
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "travio_DEV/j5wapxdu36pda6erhdem",
      url: "https://res.cloudinary.com/dpkmmalcg/image/upload/v1767636795/travio_DEV/j5wapxdu36pda6erhdem.jpg",
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
    geometry: {
      type: "Point",
      coordinates: [-84.07391030341387, 10.27356332255719],
    },
    category: "Beach",
  },
  {
    title: "Beach Home Villa",
    description:
      "A serene beachside villa in Virar, offering breathtaking sea views, fresh coastal breezes, and elegant living spaces.",
    image: {
      filename: "travio_DEV/yvg1iodmqvble1fftmd0",
      url: "https://res.cloudinary.com/dpkmmalcg/image/upload/v1767636914/travio_DEV/yvg1iodmqvble1fftmd0.jpg",
    },
    price: 2000,
    location: "Virar, Maharashtra",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [72.81206097453833, 19.44979989487376],
    },
    category: "Beach",
  },
];

module.exports = { data: sampleListings };
