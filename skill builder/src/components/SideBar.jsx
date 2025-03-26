import { FaHistory } from "react-icons/fa";
import { useState } from "react";

function SideBar() {
    const [historyItems, setHistoryItems] = useState([
        "Job Matching Analysis",
        "Interview Preparation",
        "Resume Review",
        "AI-based Suggestions",
        "Salary Insights",
        "Job Market Trends",
        "Company Research",
        "Application Tracking",
        "Skill Gap Analysis",
        "Career Guidance",
    ]);

    return (
        <div className="fixed left-0 top-14 h-[calc(100%-3.5rem)] w-64 border-r border-gray-700 shadow-lg bg-gray-900 rounded-r-lg">
            <nav className="flex flex-col p-4 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                <div className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <FaHistory className="text-yellow-400" /> Recent History
                </div>

                <div className="flex flex-col gap-3">
                    {historyItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 bg-gray-700 text-white p-3 rounded-md hover:bg-gray-600 active:bg-gray-500 transition duration-300 cursor-pointer"
                        >
                            <FaHistory className="text-blue-300" />
                            <span className="truncate">{item}</span>
                        </div>
                    ))}
                </div>
            </nav>
        </div>
    );
}

export default SideBar;
