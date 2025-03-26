import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Login() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: false
    };

    return (
        <div className="bg-gradient-to-r from-blue-600 via-teal-500 to-green-500 min-h-screen flex justify-center items-center p-8">
            <div className="flex flex-col md:flex-row w-full max-w-7xl bg-white shadow-2xl rounded-3xl overflow-hidden h-auto">

                {/* Left side: GIF and Slider Section */}
                <div className="w-full md:w-1/2 p-6 md:p-10 bg-gradient-to-r from-blue-500 to-teal-500 flex flex-col justify-center items-center h-auto">
                    {/* GIF Section */}
                    <div className="w-full h-56 mb-6 flex justify-center items-center">
                        <img
                            src="https://camo.githubusercontent.com/5046cb083418fd1922b7f5990e594c3bb06f5d87e5516cd8839ae0aa48b3aec4/68747470733a2f2f696d616765732e73717561726573706163652d63646e2e636f6d2f636f6e74656e742f76312f3537363966633430316236333162616231616464623261622f313534313538303631313632342d5445363451474b524a4738535741495553374e532f6b6531375a77644742546f6464493870446d34386b506f73776c7a6a53564d4d2d53784f703743563539425a772d7a505067646e346a557756634a45315a7657515578776b6d794578676c4e714770304976544a5a616d574c49327a76595748384b332d735f3479737a63703272795449304871544f6161556f68724938504936465879386339505774426c7141566c555335697a7064634958445a71445976707252715a32395077306f2f636f64696e672d667265616b2e676966" // Replace with your GIF URL
                            alt="Career Growth GIF"
                            className="w-full h-full object-cover rounded-xl shadow-lg"
                        />
                    </div>

                    {/* Slider Section */}
                    <h2 className="text-4xl font-bold mb-4 text-center text-white">Career Opportunities Await</h2>
                    <p className="text-lg font-medium mb-8 text-center text-white">
                        Your career journey starts here. Explore endless possibilities.
                    </p>
                    <div className="w-full">
                        <Slider {...settings}>
                            <div className="bg-blue-800 rounded-xl h-32 flex justify-center items-center text-white shadow-lg px-4">
                                <p className="text-lg">"Achieve your professional dreams with our platform!"</p>
                            </div>
                            <div className="bg-teal-800 rounded-xl h-32 flex justify-center items-center text-white shadow-lg px-4">
                                <p className="text-lg">"Build your skills and land the job you've always wanted."</p>
                            </div>
                            <div className="bg-blue-800 rounded-xl h-32 flex justify-center items-center text-white shadow-lg px-4">
                                <p className="text-lg">"Success is closer than you think—start your journey today!"</p>
                            </div>
                        </Slider>
                    </div>
                </div>

                {/* Right side: Login Form Section */}
                <div className="w-full md:w-1/2 bg-white p-6 md:p-10 flex justify-center items-center h-auto">
                    <form className="w-full">
                        <h2 className="text-4xl font-bold mb-6 text-center text-gray-700">Login to Your Account</h2>
                        <p className="text-sm text-gray-500 mb-8 text-center">
                            Empower your career by logging into your personal dashboard.
                        </p>
                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="email">Email Address</label>
                            <input
                                className="w-full px-4 py-2 bg-gray-100 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="password">Password</label>
                            <input
                                className="w-full px-4 py-2 bg-gray-100 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                            />
                        </div>
                        <div className="mb-6 flex justify-between items-center">
                            <label className="inline-flex items-center text-sm text-gray-600">
                                <input type="checkbox" className="form-checkbox h-5 w-5 text-teal-600" />
                                <span className="ml-2">Remember me</span>
                            </label>
                            <a href="#" className="text-sm text-teal-500 hover:underline">Forgot Password?</a>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-teal-500 text-white font-semibold py-2 rounded-lg hover:bg-teal-600 transition duration-300"
                        >
                            Login
                        </button>
                        <p className="text-sm text-gray-600 mt-4 text-center">
                            Don’t have an account? <a href="#" className="text-teal-500 hover:underline">Sign up</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
