import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import HomePage from "./page/HomePage"
import MainLayout from "./layouts/MainLayout"
import ProduksPage from "./page/ProduksPage"
import ProdukPage, { produkLoader } from "./page/ProdukPage"
import NotFoudPage from "./page/NotFoudPage"
import AddProdukPage from "./page/AddProdukPage"
import AboutPage from "./page/AbautPage"
import EditProdukPage from "./page/EditProdukPage"


const baseURl = 'https://fakestoreapi.com';

const App = () => {
  const addProduk = async (newProduk) => {
    // console.log(newProduk)
    await fetch(`${baseURl}/products/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProduk)
      
      
    })
    return;
  }
  const deleteProduk = async (id) => {
    // console.log('Delete', id);
    await fetch(`${baseURl}/products/${id}`, {
      method: 'DELETE',
    })
    return;
  }
  const updateProduk = async (product) => {
    await fetch(`h${baseURl}/products/${product.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/produks" element={<ProduksPage />} />
        <Route path="/abaut" element={<AboutPage />} />
        <Route path="/produk/:id" element={<ProdukPage deleteProduk={deleteProduk} />} loader={produkLoader} />
        <Route path="/edit-produk/:id" element={<EditProdukPage updateProdukSubmit={updateProduk} />} loader={produkLoader} />
        <Route path="/add-produk" element={<AddProdukPage addProdukSubmit={addProduk} />} />
        <Route path="*" element={<NotFoudPage />} />
      </Route>
    )

  )
  return (
    <RouterProvider router={router} />
  )
}


// https://fakestoreapi.com/docs

export default App