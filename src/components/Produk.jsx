/* eslint-disable react/prop-types */
import { useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const Produk = ({ produk }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  let description = produk.description;
  if (!showFullDescription) {
    description = description.substring(0, 90) + "...";
  }
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(produk.price);

  return (
    <div key={produk.id} className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{produk.category}</div>
          <div>
            <img
              className="h-full max-h-80"
              src={produk.image}
              alt={produk.title}
            />
          </div>
          <h3 className="text-xl font-bold">{produk.title}</h3>
        </div>

        <div className="mb-5">
          <p> {description}</p>
          {showFullDescription && (
            <Link
              to={`/produk/${produk.id}`}
              className=" text-blue-600 rounded-lg text-center text-sm"
            >
              Read More
            </Link>
          )}
        </div>

        <button
          onClick={() => setShowFullDescription((prevState) => !prevState)}
          className="text-indigo-500 mb-5 hover:text-indigo-600"
        >
          {showFullDescription ? "Less" : "More"}
        </button>
        <div className="border border-gray-200 mb-5"></div>
        <div className="flex flex-row lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            <p className="text-2xl">Price {formattedPrice}</p>
          </div>

          <div className="text-white">
            <button className="bg-green-600 px-3 py-2 my-2 mx-3 text-2xl  hover:bg-green-700 active:bg-green-70v0 focus:outline-none focus:ring focus:ring-green-300 rounded-xl">
              Add <MdAddShoppingCart className="inline text-lg mb-1 mr-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produk;
