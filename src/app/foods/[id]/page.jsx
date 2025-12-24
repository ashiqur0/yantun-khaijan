// app/foods/[id]/page.jsx

export async function generateStaticParams() {
  return [{ id: '52898' }, { id: '52955' }, { id: '52926' }]
}

// dynamic page title by foods title
export async function generateMetadata({ params }) {
  const { id } = await params;
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
    { cache: "no-store" }
  );

  const { details = {} } = await res.json();

  return {
    title: details.title,
    generator: 'Next.js',
    applicationName:'Yantun Khaijan',
    referrer: 'origin-when-cross-origin',
    keywords: ['Next.js', 'React', 'JavaScript', 'Yantun Khaijan'],
    authors: [{ name: 'Md Ashiqur Rahman' }, { name: 'Md Ashiqur Rahman', url: 'https://github.com/ashiqur0' }],
    creator: 'Md Ashiqur Rahman',
    publisher: 'Md Ashiqur Rahman',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  }
}

const getFood = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  const data = await res.json();
  return data.details;
};

const FoodDetails = async ({ params }) => {
  const { id } = await params;
  const food = await getFood(id);

  if (!food) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-red-500">
          Food Not Found
        </h2>
      </div>
    );
  }

  const {
    title,
    foodImg,
    price,
    category,
    area,
    video,
  } = food;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8 bg-white shadow rounded-xl overflow-hidden">
        {/* Image */}
        <img
          src={foodImg}
          alt={title}
          className="w-full h-full object-cover"
        />

        {/* Details */}
        <div className="p-6 space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">
            {title}
          </h1>

          <p className="text-gray-500">
            Category: <span className="font-medium">{category}</span>
          </p>

          <p className="text-gray-500">
            Area: <span className="font-medium">{area}</span>
          </p>

          <p className="text-2xl font-bold text-green-600">
            ৳ {price}
          </p>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <a
              href={video}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Watch Video
            </a>

            <button className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;