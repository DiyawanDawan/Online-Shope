import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"

const AddProdukPage = ({ addProdukSubmit }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [catagory, setCatagory] = useState("");
  const [description, setDescription] = useState("");

  const [image, setImgae] = useState("")
const navigate = useNavigate()
  const submitForm = (e) => {
    e.preventDefault()
    // console.log(description);

    const newProduk = {
       id: Date.now(),
        title,
        price,
        catagory,
        description, 
        image,
    }
    addProdukSubmit(newProduk)
    toast.success('Job added succesfully')
    return navigate('/produks')
  }
  return (
    <section className="bg-green-100 relative top-20">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center text-green-800 font-semibold mb-6">Add Produk</h2>

        
            <div className="mb-4">
              <label htmlFor="title" className="block text-green-700 font-bold mb-2">
               Titel
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2  focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-green-500 invalid:text-green-600
      focus:invalid:border-green-500 focus:invalid:ring-green-500"
                placeholder="Judul Produk"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="price" className="block text-green-700 font-bold mb-2">
                Harga
              </label>
              <input
                type="number"
                id="price"
                name="price"
                className="border rounded w-full py-2 px-3 mb-2 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-green-500 invalid:text-green-600
      focus:invalid:border-green-500 focus:invalid:ring-green-500"
                placeholder="Harga Produk"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
           

            <div className="mb-4">
              <label htmlFor="catagory" className="block text-green-700 font-bold mb-2">
                Catagory
              </label>
              <input
                type="text"
                id="catagory"
                name="catagory"
                className="border rounded w-full py-2 px-3 mb-2 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-green-500 invalid:text-green-600
      focus:invalid:border-green-500 focus:invalid:ring-green-500"
                placeholder="Katagory produk"
                required
                value={catagory}
                onChange={(e) => setCatagory(e.target.value)}
              />
            </div>

          

            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-green-700 font-bold mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-green-500 invalid:text-green-600
      focus:invalid:border-green-500 focus:invalid:ring-green-500"
                rows="4"
                placeholder="Deskripsi produk"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
           
            <div className="mb-4">
              <label htmlFor="image" className="block text-green-700 font-bold mb-2">
               Iamage Url
              </label>
              
              <input
                type="text"
                id="image"
                name="image"
                className="border rounded w-full py-2 px-3 mb-2 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-green-500 invalid:text-green-600
      focus:invalid:border-green-500 focus:invalid:ring-green-500"
                placeholder="Prduk image URL"
                required
                value={image}
                onChange={(e) => setImgae(e.target.value)}
              />
            </div>

        

            <div>
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Produk
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddProdukPage;
