// src/App.jsx
import React from 'react';
import Header from './components/Header';
import HeroSection from './sections/HeroSection.jsx';
import FeatureSection from './sections/FeatureSection.jsx';
import RentSection from './sections/RentSection.jsx'
import Gallery from "./components/Gallery.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <HeroSection/>
            <main className="px-10 md:px-0 md:w-2/3 md:m-auto pt-10">
                <section id="feature">
                    <FeatureSection/>
                </section>
                <hr className="my-10 border-[rgb(201,170,121)] opacity-50"></hr>
                <ul className="hidden md:flex flex-row justify-between text-xl font-thin px-10">
                    <li className="text-[rgb(201,170,121)]">6000 sqft</li>
                    <li className="border-r-2 opacity-50"></li>
                    <li className="text-[rgb(201,170,121)]">8 bedrooms</li>
                    <li className="border-r-2 opacity-50"></li>
                    <li className="text-[rgb(201,170,121)]">5 bathrooms</li>
                    <li className="border-r-2 opacity-50"></li>
                    <li className="text-[rgb(201,170,121)]">7 Acres</li>
                </ul>
                <hr className="my-10 border-[rgb(201,170,121)] opacity-50"></hr>

                <section id="experience" className="flex flex-col md:flex-row justify-between">
                    <div className="md:w-3/4">
                        <h2 className="text-[rgb(201,170,121)] text-4xl font-bold">The Havencrest Experience</h2>
                        <p className="leading-loose text-gray-300 text-lg font-thin mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel. Dignissim sodales ut eu sem integer vitae justo. Condimentum lacinia quis vel eros donec. Enim nec dui nunc mattis enim ut. Feugiat sed lectus vestibulum mattis. Tristique nulla aliquet enim tortor at auctor urna. At lectus urna duis convallis convallis tellus id interdum velit. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Tempus iaculis urna id volutpat lacus laoreet non curabitur. Nec ultrices dui sapien eget mi proin sed libero enim. Ornare arcu dui vivamus arcu felis bibendum ut tristique. Hac habitasse platea dictumst quisque sagittis purus sit. Sed ullamcorper morbi tincidunt ornare massa eget.</p>
                        <p className="leading-loose text-gray-300 text-lg font-thin mt-5">Posuere urna nec tincidunt praesent semper feugiat. Nulla porttitor massa id neque aliquam vestibulum morbi. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Fringilla urna porttitor rhoncus dolor purus. Volutpat sed cras ornare arcu dui vivamus arcu felis bibendum. Vel facilisis volutpat est velit. Nisl tincidunt eget nullam non nisi est sit amet.</p>
                    </div>
                    <div className="my-10 md:my-0 w-full md:w-auto flex flex-col ml-auto">
                        <Gallery></Gallery>
                        <div className="text-center md:text-left p-5 bg-gradient-to-b from-[#2B1C22FF] to-[rgba(255,255,255,0.1)]">
                            <h2 className="text-gray-300 text-2xl font-bold">Amenities</h2>
                            <ul className="text-[rgb(201,170,121)] text-sm font-thin mt-5 space-y-2">
                                <li>6000 sqft of living space</li>
                                <li>8 bedrooms</li>
                                <li>5 bathrooms</li>
                                <li>7 acres of land</li>
                                <li>Breathtaking views</li>
                                <li>Open floorplan</li>
                                <li>Spacious bedrooms</li>
                                <li>Modern kitchen</li>
                                <li>Wrap-around porch</li>
                                <li>Outdoor firepit</li>
                                <li>3-car garage</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section id="rent">
                    <RentSection/>
                </section>
            </main>
            <Footer/>
        </div>
    );
}

export default App;