import Head from 'next/head';
import Topheader from '../components/Topheader';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import CardText from '../components/cards-text';

export default function Home() {
  return (
    <div>
      <Topheader />
      <Navbar />

      <main className="container mx-auto p-6 mt-16">
        {/* Categories Section */}
        <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {['Clothes', 'Electronics', 'Shoes', 'Accessories', 'Home'].map((category, index) => (
            <div key={index} className="relative bg-gray-200 p-4 rounded shadow">
              {/* Replace placeholder URLs with actual image sources */}
              <img
                src={`/About/Images/${index + 1}.png`} // Dynamic image source based on index
                alt={category}
                className="rounded"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white">
                <h2 className="font-bold">{category}</h2>
                <p>{Math.floor(Math.random() * 10) + 1} Items</p>
              </div>
            </div>
          ))}
        </section>

        {/* Filter Section */}
        <section className="bg-white p-4 shadow rounded mt-8 flex justify-between items-center">
          <p>Showing all 12 results</p>
          <div className="flex items-center gap-4">
            <select className="border border-gray-300 rounded p-2">
              <option>Popularity</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Filter
            </button>
          </div>
        </section>
        <Footer />

        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] mt-[450px]">
          {/* Product Cards */}
          {["/Card/1a.png", "/Card/2a.png", "/Card/3.png", "/Card/4a.png",
            "/Card/5.png", "/Card/6a.png", "/Card/7a.png", "/Card/8a.png",
            "/Card/9a.png", "/Card/10a.png", "/Card/11a.png", "/Card/12a.png "
          ].map((pic, index) => (
            <div key={index} className="w-[240px] h-[615px] mx-auto">
              <div className="w-full h-full">
                <div className="w-[239px] h-[427px]">
                  <img src={pic} alt={`picture${index + 1}`} className="w-full h-full object-cover" />
                </div>
                <CardText />
                git add .

                
                 </div>
              
            </div>
          ))}
        </div>

        {/* Pagination Section */}
        <section className="flex justify-center items-center gap-4 mt-8">
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Previous</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">1</button>
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">2</button>
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Next</button>
        </section>
      </main>
    </div>
  );
}
