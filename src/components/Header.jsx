import Logo from "../assets/images/havencrest_logo.svg";

const Header = () => {
    return (
        <header className="text-white w-full relative bg-[#2B1C22FF]">
            <div className="max-w-full mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between relative z-10 headerWithGradient">
                <img src={Logo} alt="Havencrest Logo" className="w-56 md:ml-10"/>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center p-5 rounded z-10">
                    <a href="#feature" className="mr-5 hover:text-gray-400 text-white">Features</a>
                    <a href="#experience" className="mr-5 hover:text-gray-400 text-white">Experience</a>
                    <a href="#rent" className="mr-5 hover:text-gray-400 text-white">Rent</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
