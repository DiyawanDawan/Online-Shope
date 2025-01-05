import { Link } from "react-router-dom"
import { FaExclamationTriangle } from "react-icons/fa"

const NotFoudPage = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center h-96 relative top-10">
    {/* <i className="fas fa-exclamation-triangle text-yellow-400 fa-4x mb-4"></i> */}
    <FaExclamationTriangle className="text-yellow-400 text-6xl mb-4" />
    <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
    <p className="text-xl mb-5">This page does not exist</p>
    <Link
      to="/"
      className="text-white bg-green-700 hover:bg-green-900 rounded-md px-3 py-2 mt-4"
      >Go Back</Link>
  </section>
  )
}

export default NotFoudPage