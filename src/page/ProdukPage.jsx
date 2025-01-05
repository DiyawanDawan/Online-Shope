// import {useState,  useEffect } from "react"
import { FaArrowLeft } from "react-icons/fa"
import { useLoaderData, Link, useNavigate } from "react-router-dom"

import { toast } from "react-toastify"


const ProdukPage = ({ deleteProduk }) => {
  const navigate = useNavigate()
  const onDeleteClick = (produkId) => {
    const confirm = window.confirm('Are you sure you want to delete this listing?')
    if (!confirm) return;
    deleteProduk(produkId)
    toast.success('Job delete succefully')
    navigate('/produks')
  }
  const produk = useLoaderData()
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
}).format(produk.price);

  return (
    <>

      {/* <!-- Go Back --> */}
      <section className="relative top-20">
        <div className="container m-auto py-6 px-6">
          <Link
            to="/produks"
            className="text-green-500 hover:text-green-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" />
           Kembali
          </Link>
       
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div
                className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
              >
                <div className="text-gray-500 mb-4">{produk.type}</div>
                
                <h1 className="text-3xl font-bold mb-4">
                  {produk.title}
                </h1>
              <img className="w-1/2" src={produk.image} alt=
              {produk.title} />
                  <h3 className="text-green-800 text-lg font-bold mb-6">
                   Description
                </h3>

                <p className="mb-4">
                  {produk.description}
                </p>

                <h3 className="text-green-800 text-2xl font-bold  mb-2">Harga</h3>

                <p className="mb-4 text-2xl">{formattedPrice}</p>
              </ div>
 
            </main>


              {/* <!-- Manage --> */}
              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">Manage Produk</h3>
                <Link
                  to={`/edit-produk/${produk.id}`}
                  className="bg-green-500 hover:bg-green-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >Edit Job</Link>
                <button onClick={() => onDeleteClick(produk.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Delete Produk
                </button>
              </div>
            
          </div>
        </div>
      </section>
    </>
  )
}

const produkLoader = async ({ params }) => {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
  const data = await res.json();
  return data;

}

export { ProdukPage as default, produkLoader }