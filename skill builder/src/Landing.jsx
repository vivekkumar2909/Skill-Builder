import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa";

export default function Landing() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white w-full">
            {/* Navbar / Header */}
            <div className="w-full flex justify-center py-10">
                <h1 className="text-5xl font-extrabold font-serif pt-10 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    SKILL BUILDER
                </h1>
            </div>

            {/* Hero Section */}
            <div className="w-full flex mt-12">
                {/* Left Content */}
                <div className="w-1/2 flex justify-center px-12">
                    <div className="pt-10 space-y-5">
                        <h1 className="text-5xl font-extrabold text-white font-serif leading-tight">
                            Connect with <span className="text-blue-400">Yourself</span>
                        </h1>
                        <p className="text-lg text-gray-300 font-serif">
                            Find and get top jobs across various industries.
                        </p>
                        <p className="text-lg text-gray-300 font-serif">
                            Build your career with us and achieve your dream job.
                        </p>
                        <p className="text-lg text-gray-300 font-serif hover:text-blue-400 transition duration-300">
                            Unlock your full potential with our skill-building tools.
                        </p>
                        <p className="text-lg text-gray-300 font-serif hover:text-blue-400 transition duration-300">
                            Collaborate with top professionals around the globe.
                        </p>
                        <p className="text-lg text-gray-300 font-serif hover:text-blue-400 transition duration-300">
                            Stay ahead with our industry insights and guidance.
                        </p>

                        <div className="mt-8">
                            <Link to="/home" className="px-6 py-3 rounded-lg bg-blue-500 text-white font-semibold text-lg transition-transform transform hover:scale-110 hover:bg-blue-600 shadow-md">
                                Get Started 🚀
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right Content - Image */}
                <div className="w-1/2 flex justify-center">
                    <img
                        className="h-[55vh] w-[55vh] rounded-full shadow-lg hover:scale-105 transition-transform duration-500"
                        src="https://gifdb.com/images/high/animated-man-computer-coding-nae6mec378lsg1i3.gif"
                        alt="Coding Animation"
                    />
                </div>
            </div>

            {/* Features Section */}
            <div className="mt-20 flex justify-center">
                <div className="w-full flex justify-center flex-wrap gap-8 mb-20">
                    {[
                        { title: "Coding Languages", desc: "Master one language to achieve your dream job." },
                        { title: "Development Frameworks", desc: "Know about the popular development frameworks." },
                        { title: "Databases", desc: "Learn about the best practices for databases." },
                        { title: "Cloud Computing", desc: "Understand the essentials of cloud computing." }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="w-80 h-44 text-white flex flex-col justify-between p-4 rounded-lg border border-gray-600 bg-gray-800 shadow-lg transition-all transform hover:scale-105 hover:shadow-xl"
                        >
                            <FaCode className="text-4xl text-blue-400 mb-2" />
                            <h3 className="text-xl font-bold">{item.title}</h3>
                            <p className="text-gray-400">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
