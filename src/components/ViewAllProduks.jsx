import { Link } from "react-router-dom"

const ViewAllProduks = () => {
    return (
        <section className="m-auto max-w-lg my-10 px-6">
            <Link
                to="/jobs"
                className="block bg-green-600 text-white text-center py-4 px-6 rounded-xl hover:bg-green-700"
            >Lihat Semua Produks</Link
            >
        </section>
    )
}

export default ViewAllProduks