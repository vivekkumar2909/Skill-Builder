import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState, useEffect, useRef } from "react";
import { BiLoaderAlt } from "react-icons/bi";
import { FaCode, FaDatabase, FaServer, FaCloud, FaRobot, FaLaptopCode, FaShieldAlt, FaMobileAlt, } from "react-icons/fa";
import { DiPython, DiJavascript1, DiJava, DiReact, DiNodejs, DiAngularSimple } from "react-icons/di";
// import { DiPython, DiJava, DiJavascript1, DiReact, DiNodejs, DiAngularSimple } from "react-icons/di";
import { SiDjango, SiGraphql, SiMongodb, SiFirebase, SiDocker, SiKubernetes, SiRust, SiGo, SiPhp, SiSwift, SiFlutter } from "react-icons/si"

const topics = [
    { name: "C++", icon: <FaCode className="text-teal-300" /> },
    { name: "Python", icon: <DiPython className="text-yellow-300" /> },
    { name: "Java", icon: <DiJava className="text-blue-500" /> },
    { name: "JavaScript", icon: <DiJavascript1 className="text-yellow-500" /> },
    { name: "TypeScript", icon: <DiJavascript1 className="text-blue-400" /> },
    { name: "React", icon: <DiReact className="text-blue-400" /> },
    { name: "Angular", icon: <DiAngularSimple className="text-red-400" /> },
    { name: "Vue.js", icon: <FaLaptopCode className="text-green-400" /> },
    { name: "Node.js", icon: <DiNodejs className="text-green-500" /> },
    { name: "Express.js", icon: <FaServer className="text-gray-300" /> },
    { name: "Next.js", icon: <FaLaptopCode className="text-black" /> },
    { name: "Django", icon: <SiDjango className="text-green-400" /> },
    { name: "Flask", icon: <SiDjango className="text-gray-500" /> },
    { name: "Spring Boot", icon: <FaServer className="text-green-600" /> },
    { name: "FastAPI", icon: <FaServer className="text-blue-400" /> },
    { name: "GraphQL", icon: <SiGraphql className="text-pink-400" /> },
    { name: "REST API", icon: <FaServer className="text-gray-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "MySQL", icon: <FaDatabase className="text-blue-400" /> },
    { name: "PostgreSQL", icon: <FaDatabase className="text-blue-600" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
    { name: "Supabase", icon: <SiDjango className="text-green-400" /> },
    { name: "Redis", icon: <FaDatabase className="text-red-500" /> },
    { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
    { name: "Kubernetes", icon: <SiKubernetes className="text-indigo-400" /> },
    { name: "AWS", icon: <FaCloud className="text-orange-500" /> },
    { name: "Azure", icon: <FaCloud className="text-blue-600" /> },
    { name: "Google Cloud", icon: <FaCloud className="text-yellow-400" /> },
    { name: "Cybersecurity", icon: <FaShieldAlt className="text-red-500" /> },
    { name: "AI/ML", icon: <FaRobot className="text-purple-500" /> },
    { name: "NLP", icon: <FaRobot className="text-blue-500" /> },
    { name: "Computer Vision", icon: <FaRobot className="text-teal-500" /> },
    { name: "Blockchain", icon: <FaShieldAlt className="text-gray-600" /> },
    { name: "Ethereum", icon: <FaShieldAlt className="text-gray-500" /> },
    { name: "Solidity", icon: <FaCode className="text-gray-400" /> },
    { name: "Smart Contracts", icon: <FaShieldAlt className="text-gray-300" /> },
    { name: "Rust", icon: <SiRust className="text-gray-500" /> },
    { name: "Go", icon: <SiGo className="text-blue-400" /> },
    { name: "PHP", icon: <SiPhp className="text-indigo-600" /> },
    { name: "Swift", icon: <SiSwift className="text-orange-400" /> },
    { name: "Kotlin", icon: <FaMobileAlt className="text-purple-500" /> },
    { name: "Dart", icon: <FaMobileAlt className="text-cyan-500" /> },
    { name: "Flutter", icon: <SiFlutter className="text-cyan-400" /> },
    { name: "React Native", icon: <FaMobileAlt className="text-blue-400" /> },
    { name: "iOS Development", icon: <FaMobileAlt className="text-gray-300" /> },
    { name: "Android Development", icon: <FaMobileAlt className="text-green-500" /> },
    { name: "DevOps", icon: <FaServer className="text-gray-400" /> },
    { name: "CI/CD", icon: <FaServer className="text-blue-500" /> },
    { name: "Terraform", icon: <FaCloud className="text-gray-500" /> },
    { name: "Ansible", icon: <FaServer className="text-red-500" /> },
    { name: "Linux", icon: <FaLaptopCode className="text-gray-600" /> },
    { name: "Bash Scripting", icon: <FaCode className="text-gray-400" /> },
    { name: "PowerShell", icon: <FaCode className="text-blue-400" /> },
    { name: "Data Structures", icon: <FaDatabase className="text-yellow-500" /> },
    { name: "Algorithms", icon: <FaDatabase className="text-red-500" /> },
    { name: "Design Patterns", icon: <FaLaptopCode className="text-gray-500" /> },
    { name: "System Design", icon: <FaServer className="text-green-500" /> },
    { name: "Microservices", icon: <FaServer className="text-teal-500" /> },
    { name: "Event-Driven Architecture", icon: <FaServer className="text-orange-400" /> },
    { name: "Message Queues", icon: <FaDatabase className="text-gray-300" /> },
    { name: "Kafka", icon: <FaDatabase className="text-orange-500" /> },
    { name: "RabbitMQ", icon: <FaDatabase className="text-blue-500" /> },
    { name: "GraphQL APIs", icon: <SiGraphql className="text-pink-500" /> },
    { name: "REST APIs", icon: <FaServer className="text-gray-400" /> },
    { name: "Web Security", icon: <FaShieldAlt className="text-red-400" /> },
    { name: "Penetration Testing", icon: <FaShieldAlt className="text-red-500" /> },
];

export default function Questions() {
    const [value, setValue] = useState("");
    const [loading, setLoading] = useState(false);
    const [selectedTopic, setSelectedTopic] = useState(null);
    const [animatedText, setAnimatedText] = useState("");
    const [typingIndex, setTypingIndex] = useState(0);
    const outputRef = useRef(null);

    const handleGenerate = async (topic) => {
        try {
            setLoading(true);
            setValue("");
            setAnimatedText("");
            setSelectedTopic(topic);
            setTypingIndex(0);

            const genAI = new GoogleGenerativeAI("AIzaSyD4-xQTxSJYoFKKler3NNeEW_mgyoSCqak");
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

            const prompt = `Top interview questions for ${topic}`;
            const result = await model.generateContent(prompt);

            setValue(result.response.text());
        } catch (error) {
            console.error("Error generating content:", error.message);
            setValue("❌ Failed to generate content. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!loading && value) {
            if (typingIndex < value.length) {
                setTimeout(() => {
                    setAnimatedText((prev) => prev + value[typingIndex]);
                    setTypingIndex(typingIndex + 1);

                    if (outputRef.current) {
                        outputRef.current.scrollTop = outputRef.current.scrollHeight;
                    }
                }, 20);
            }
        }
    }, [value, typingIndex, loading]);

    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center bg-black py-16 px-4">
            <h1 className="text-4xl font-extrabold text-white text-center mb-8">
                ✨ Pick a Topic & Get Interview Questions ✨
            </h1>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 mb-8">
                {topics.map((topic, index) => (
                    <button
                        key={index}
                        onClick={() => handleGenerate(topic.name)}
                        className="flex items-center gap-2 bg-gray-700 text-white rounded-xl px-6 py-3 font-semibold shadow-md hover:scale-105 transition-all"
                    >
                        {topic.icon} {topic.name}
                    </button>
                ))}
            </div>

            <div className="relative w-full max-w-6xl transition-all duration-500">
                <div
                    className={`p-6 rounded-xl shadow-xl border-2 transition-all duration-500 
                        ${loading ? "border-teal-400" : "border-gray-600"} 
                        bg-gradient-to-br from-gray-900 to-gray-800 text-white 
                        overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900`}
                    ref={outputRef}
                    style={{
                        minHeight: selectedTopic ? "300px" : "150px",
                        maxHeight: loading || animatedText ? "600px" : "350px",
                    }}
                >
                    {loading ? (
                        <div className="flex flex-col justify-center items-center">
                            <BiLoaderAlt className="animate-spin text-4xl text-teal-400 mb-2" />
                            <p className="text-lg text-teal-300">Generating questions...</p>
                        </div>
                    ) : animatedText ? (
                        <p className="text-lg leading-relaxed">{animatedText}</p>
                    ) : (
                        <p className="text-lg text-gray-400 text-center">👆 Select a topic to get started!</p>
                    )}
                </div>
            </div>
        </div>
    );
}
