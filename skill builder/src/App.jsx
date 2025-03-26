import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Card from "./components/Card";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { FaCircleArrowUp } from "react-icons/fa6";
import Landing from './Landing';
import Questions from './components/Questions';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";


function MainContent() {

  const [value1, setValue1] = useState(""); // Job Description
  const [value2, setValue2] = useState(""); // User Skills
  const [value3, setValue3] = useState(""); // Required Skills
  const [loading, setLoading] = useState(false); // Loading state
  const [response, setResponse] = useState(''); // Generated Response

  const handleGenerate = async () => {
    try {
      setLoading(true);
      setResponse("");

      const genAI = new GoogleGenerativeAI("AIzaSyD4-xQTxSJYoFKKler3NNeEW_mgyoSCqak");
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = `Provide interview preparation suggestions for a job with the following details: 
      - Job Description: ${value1}
      - Skills the candidate has: ${value2}
      - Required Skills: ${value3}
      
      Format the response in bullet points.`;

      const result = await model.generateContent(prompt);
      const generatedText = result.response.text();

      setResponse(generatedText);
    } catch (error) {
      console.error("Error generating content:", error.message);
      setResponse("❌ Failed to generate content. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-row bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <div className="w-72 bg-gray-50 shadow-md">
        <SideBar />
      </div>

      <div className="flex flex-col justify-center items-center w-full p-6 lg:p-12">

        {/* Scrollable Response Section */}
        <div className="w-full max-w-6xl bg-gray-800 text-white p-6 rounded-lg shadow-lg mb-6 max-h-64 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-3 text-blue-400">🎯 Generated Interview Preparation Tips</h2>
          <div className="whitespace-pre-line text-sm leading-relaxed">
            {response ? (
              response.split("\n").map((line, index) => (
                <p key={index} className="mb-2">🔹 {line}</p>
              ))
            ) : (
              <p className="text-gray-400 italic">No response generated yet.</p>
            )}
          </div>
        </div>

        {/* Informative Cards */}
        <div className="w-full max-w-6xl flex flex-wrap justify-center gap-4 mt-4">
          <Card description={'🚀 Unlock the skills you need to land your dream job. Gain insights into industry trends, enhance your expertise, and succeed in today’s competitive job market.'} />
          <Card description={'💼 Explore exciting opportunities. Our ChatBot helps you understand yourself better and find the perfect career path!'} />
          <Card description={'📝 Get all your interview questions answered. Use our chatbot to prepare effectively and gain confidence for your interviews.'} />
        </div>

        {/* Input Fields */}
        <div className="flex flex-col md:flex-row gap-4 mt-8 w-full max-w-4xl">
          <input
            onChange={(e) => setValue1(e.target.value)}
            placeholder="📄 Enter Job Description"
            type="text"
            className="bg-gray-700 text-white w-full h-12 px-4 rounded-md placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
          <input
            onChange={(e) => setValue2(e.target.value)}
            placeholder="🛠️ Enter Skills You Have"
            type="text"
            className="bg-gray-700 text-white w-full h-12 px-4 rounded-md placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
          <input
            onChange={(e) => setValue3(e.target.value)}
            placeholder="✅ Enter Required Skills"
            type="text"
            className="bg-gray-700 text-white w-full h-12 px-4 rounded-md placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
        </div>

        {/* Submit Button */}
        <div className="mt-8 flex w-full max-w-4xl justify-center">
          <button
            className="bg-green-600 flex items-center justify-between w-full text-white text-xl px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition duration-300"
            onClick={handleGenerate}
          >
            <span>{loading ? "⏳ Generating..." : "🚀 Generate Tips"}</span>
            <FaCircleArrowUp className="text-4xl text-white hover:text-gray-300 transition duration-300" />
          </button>
        </div>

      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<MainContent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
