import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa";

export default function Landing() {
    return (
        <div className="min-h-screen bg-gray-900 text-white w-full">
            <div className="w-full">
                <div className="p-11 h-20 w-full text-white justify-center flex text-4xl font-bold font-serif pt-32">
                    SKILL BUILDER
                </div>

                <div className="w-full flex mt-12">
                    <div className="w-1/2 flex justify-center">
                        <div className="pt-10 space-y-4">
                            <h1 className="text-4xl font-bold text-white font-serif">Connect with Yourself</h1>
                            <p className="text-xl text-gray-400 font-serif">
                                Find and get top jobs across various industries.
                            </p>
                            <p className="text-xl text-gray-400 font-serif">
                                Build your career with us and achieve your dream job.
                            </p>
                            <p className="text-xl text-gray-400 font-serif hover:text-blue-400 transition-colors duration-300">
                                Unlock your full potential with our skill-building tools.
                            </p>
                            <p className="text-xl text-gray-400 font-serif hover:text-blue-400 transition-colors duration-300">
                                Collaborate with top professionals around the globe.
                            </p>
                            <p className="text-xl text-gray-400 font-serif hover:text-blue-400 transition-colors duration-300">
                                Stay ahead with our industry insights and guidance.
                            </p>
                            <div className="w-32 px-3 py-1 h-10 rounded-lg bg-blue-500 text-white mt-10 font-serif animate-bounce">
                                <Link to="/home" className="flex justify-center items-center w-full h-full">
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 flex justify-center">
                        <img
                            className="h-[50vh] w-[50vh] rounded-full"
                            src="https://gifdb.com/images/high/animated-man-computer-coding-nae6mec378lsg1i3.gif"
                            alt="Coding Animation"
                        />
                    </div>
                </div>

                <div className="mt-20 flex justify-center">
                    <div className="w-full flex justify-center gap-8 mb-20">
                        {[
                            { title: "Coding Languages", desc: "Master one language to achieve your dream job." },
                            { title: "Development Frameworks", desc: "Know about the popular development frameworks." },
                            { title: "Databases", desc: "Learn about the best practices for databases." },
                            { title: "Cloud Computing", desc: "Understand the essentials of cloud computing." }
                        ].map((item, index) => (
                            <div key={index} className="w-72 h-40 text-white flex p-2 rounded-sm border-2 shadow-md z-1 border-gray-700 hover:shadow-lg transition-shadow duration-300 bg-gray-800">
                                <div className="flex flex-col">
                                    <FaCode className="text-2xl p-2" />
                                    <div className="p-2 font-bold">
                                        {item.title}
                                    </div>
                                    <div className="flex flex-col p-2">
                                        {item.desc}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
