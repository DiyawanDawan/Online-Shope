/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Produk from "./Produk";
import Spinner from "./Spinner";

const Produks = ({ isHome = false }) => {
  const [produks, setProduks] = useState([]);
  const [filteredProduks, setFilteredProduks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const apiUrl = isHome
      ? "https://fakestoreapi.com/products?limit=6"
      : "https://fakestoreapi.com/products?sort=desc";

    const fetchProduks = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setProduks(data);
        console.log(data)
        setFilteredProduks(data); 
      } catch (error) {
        console.log("Error Fetching Data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduks();
  }, [isHome]);
  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = produks.filter((produk) =>
      produk.title.toLowerCase().includes(value)
    );
    setFilteredProduks(filtered);
  };

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 id="produk" className="text-3xl font-bold text-green-500 mb-6 text-center">
          {isHome ? "Produks" : "Semua produks"}
        </h2>

        {/* Fitur Pencarian */}
        {!isHome && (
          <div className="mb-6 text-center">
            <input
              type="text"
              placeholder="Cari produk..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full max-w-xs p-3 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        )}

        {/* Spinner saat data sedang dimuat */}
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProduks.length > 0 ? (
              filteredProduks.map((produk) => (
                <Produk key={produk.id} produk={produk} />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-600">
                Produk tidak ditemukan.
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Produks;
