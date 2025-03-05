import Image from "next/image";

export default function Portfolio() {
  return (
    <main className="p-10 bg-black text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center">My Drone Photography</h1>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Image src="/images/drone1.jpg" alt="Drone Shot 1" width={500} height={300} className="rounded-lg" />
        <Image src="/images/drone2.jpg" alt="Drone Shot 2" width={500} height={300} className="rounded-lg" />
        <Image src="/images/drone3.jpg" alt="Drone Shot 3" width={500} height={300} className="rounded-lg" />
      </div>

      {/* Video Section */}
      <h2 className="text-3xl font-bold mt-10 mb-4">Aerial Videos</h2>
      <div className="flex justify-center">
        <video className="w-full max-w-3xl rounded-lg" src="/drone-footage.mp4" controls />
      </div>
    </main>
  );
}
