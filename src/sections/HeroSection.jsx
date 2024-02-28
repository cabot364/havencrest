import HeroImage from '../assets/images/hero2.jpg';
const HeroSection = () => {
    return (
        <div className="pl-16 relative h-[200px] md:h-[500px] flex items-center justify-center bg-[position:50%_5%] md:bg-[position:50%_15%]" style={{backgroundImage: `url(${HeroImage})`, backgroundSize: '175%', backgroundRepeat: "no-repeat"}}>
            <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
            <div className="hidden md:block mr-auto relative text-white text-center z-10 w-1/3">
                <h1 className="text-[rgb(201,170,121)] text-4xl font-bold mb-4">Elevate Your Lifestyle <br></br>at Havencrest</h1>
                <p className="text-xl font-thin text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel.</p>
                <button className="mt-5 font-bold bg-[rgb(201,170,121)] text-gray-800">Rent Havencrest Today!</button>
                <p className="text-gray-300 text-xs mt-5">*Rent is $4,500/m with 12 and 15 month leases available</p>
            </div>
        </div>
    );
};

export default HeroSection;