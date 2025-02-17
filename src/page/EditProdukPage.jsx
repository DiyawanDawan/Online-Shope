import { useState, useEffect } from "react";
import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditProdukPage = ({ updateProdukSubmit }) => {
  const produk = useLoaderData(); 
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (produk) {
      setTitle(produk.title);
      setPrice(produk.price);
      setDescription(produk.description);
      setImage(produk.image);
      setCategory(produk.category);
    }
  }, [produk]);

  const submitForm = (e) => {
    e.preventDefault();

    const updateProduk = {
      id,
      title,
      price,
      category,
      description,
      image,
    };

    updateProdukSubmit(updateProduk);
    toast.success("Produk updated successfully");
    navigate(`/produk/${id}`);
  };

  return (
    <section className="bg-green-100 relative top-20">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6 text-green-800">
              Update Produk
            </h2>

            <div className="mb-4">
              <label htmlFor="title" className="block text-green-700 font-bold mb-2">
                Product Title
              </label>
              <input
                type="text"
                id="title"
                className="border rounded w-full py-2 px-3 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-green-500 invalid:text-green-600
      focus:invalid:border-green-500 focus:invalid:ring-green-500"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="price" className="block text-green-700 font-bold mb-2">
                Price
              </label>
              <input
                type="number"
                id="price"
                 placeholder="Harga produk"
                className="border rounded w-full py-2 px-3 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-green-500 invalid:text-green-600
      focus:invalid:border-green-500 focus:invalid:ring-green-500"
                
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="category" className="block text-green-700 font-bold mb-2">
                Category
              </label>
              <input
                type="text"
                id="category"
                className="border rounded w-full py-2 px-3 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-green-500 invalid:text-green-600
      focus:invalid:border-green-500 focus:invalid:ring-green-500"
                placeholder="Kategory product"
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="description" className="block text-green-700 font-bold mb-2">
                Description
              </label>
              <textarea
                id="description"
                className="border rounded w-full py-2 px-3 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-green-500 invalid:text-green-600
      focus:invalid:border-green-500 focus:invalid:ring-green-500"
                rows="4"
                placeholder="Product description"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="image" className="block text-green-700 font-bold mb-2">
                Image
              </label>
              <input
                type="text"
                id="image"
                className="border rounded w-full py-2 px-3 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-green-500 invalid:text-green-600
      focus:invalid:border-green-500 focus:invalid:ring-green-500"
                placeholder="Masukan produk URL"
                required
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>

            <div>
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Update Produk
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditProdukPage;
