export default function Hero() {
  return (
    <section
      className="relative flex items-center px-4 md:px-12 py-32 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/cuptomorro.png')`, // ganti dgn gambar cup background
      }}
    >

      {/* konten teks */}
      <div className="relative max-w-lg z-10 text-left ml-0 md:ml-8">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
          HEY ! <br />
          <span className="text-gray-900">ENJOY YOUR COFFEE TIME</span>
        </h1>

        <p className="mt-4 text-gray-700">
          100% ARABICA COFFEE <br /> FRESHLY ROASTED &amp; BREWED
        </p>

        <p className="mt-6 font-bold text-lg text-gray-900">@TOMORO</p>
      </div>
    </section>
  );
}
