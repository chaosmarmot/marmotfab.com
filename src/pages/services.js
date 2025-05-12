import Link from "next/link";
import Header from "../Header";

export default function Services() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center">
      <Header />
      <h1 className="text-4xl font-bold mb-4 mt-20">Our Services</h1>
      <p className="text-lg text-gray-600 mb-10 max-w-xl text-center">
        We offer precision engineering and design services for off-road
        platforms and custom fabrication. Here are a few ways we can help bring
        your ideas to life:
      </p>
      <div className="grid gap-8 md:grid-cols-3 w-full max-w-4xl">
        <div className="p-6 bg-gray-50 rounded-xl shadow text-center">
          <h2 className="text-2xl font-semibold mb-2">Custom Bumper Design</h2>
          <p className="text-gray-600 mb-4">
            CAD-driven, vehicle-specific bumpers for Toyota & Lexus platforms.
            Includes 3D modeling and fitment validation.
          </p>
          <div className="text-lg font-bold text-blue-700">from $750</div>
        </div>
        <div className="p-6 bg-gray-50 rounded-xl shadow text-center">
          <h2 className="text-2xl font-semibold mb-2">
            Skid Plate Engineering
          </h2>
          <p className="text-gray-600 mb-4">
            Precision-fit underbody protection, designed for strength and easy
            installation. FEA and stress analysis included.
          </p>
          <div className="text-lg font-bold text-blue-700">from $400</div>
        </div>
        <div className="p-6 bg-gray-50 rounded-xl shadow text-center">
          <h2 className="text-2xl font-semibold mb-2">
            Accessory Mounts & Brackets
          </h2>
          <p className="text-gray-600 mb-4">
            Custom mounts for lights, recovery gear, and more. Designed for your
            specific build and needs.
          </p>
          <div className="text-lg font-bold text-blue-700">from $150</div>
        </div>
      </div>
      <Link
        href="/contact"
        className="mt-12 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-blue-700 transition"
      >
        Request a Quote
      </Link>
    </div>
  );
}
