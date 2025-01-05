
const AboutPage = () => {
  return (
    <div className="p-6 bg-gray-100 text-gray-800 relative top-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-6">Tentang Kami</h1>
        <p className="text-lg leading-relaxed mb-6">
          Selamat datang di <span className="font-semibold text-green-600">Online Store Kami</span>, platform belanja online yang memberikan pengalaman belanja terbaik, cepat, dan mudah. 
          Kami adalah perusahaan yang berdedikasi untuk menyediakan produk-produk berkualitas dengan harga terbaik untuk pelanggan kami.
        </p>

        <h2 className="text-2xl font-semibold text-green-600 mb-4">Visi Kami</h2>
        <p className="text-lg leading-relaxed mb-6">
          Menjadi platform toko online terkemuka yang menyediakan solusi belanja modern untuk semua orang, kapan saja dan di mana saja.
        </p>

        <h2 className="text-2xl font-semibold text-green-600 mb-4">Misi Kami</h2>
        <ul className="list-disc list-inside text-lg leading-relaxed mb-6">
          <li>Memberikan produk berkualitas terbaik kepada pelanggan.</li>
          <li>Menyediakan layanan pelanggan yang cepat dan ramah.</li>
          <li>Berinovasi dalam teknologi untuk mempermudah proses belanja.</li>
          <li>Membangun hubungan jangka panjang dengan pelanggan dan mitra kami.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-green-600 mb-4">Kenapa Memilih Kami?</h2>
        <p className="text-lg leading-relaxed mb-4">
          Kami menawarkan berbagai keuntungan, termasuk:
        </p>
        <ul className="list-disc list-inside text-lg leading-relaxed mb-6">
          <li>Produk berkualitas tinggi dengan harga bersaing.</li>
          <li>Pengiriman cepat dan terpercaya.</li>
          <li>Metode pembayaran yang aman dan beragam.</li>
          <li>Tim dukungan pelanggan yang siap membantu Anda 24/7.</li>
        </ul>

        <p className="text-lg leading-relaxed text-center">
          Kami percaya bahwa belanja online tidak hanya tentang produk, tetapi juga pengalaman. 
          Terima kasih telah mempercayakan kami sebagai partner belanja Anda. Selamat berbelanja di 
          <span className="font-semibold text-green-600"> Online Store Kami</span>!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
