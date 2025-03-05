import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover opacity-50"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/drone-footage.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl sm:text-7xl font-bold">Aerial Perspectives</h1>
        <p className="text-lg sm:text-xl mt-4">Capturing the world from above</p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <a
            href="/portfolio"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg"
          >
            View Portfolio
          </a>
          <a
            href="/contact"
            className="px-6 py-3 border border-white rounded-lg text-lg hover:bg-white hover:text-black"
          >
            Contact Me
          </a>
        </div>
      </div>
    </main>
  );
}
