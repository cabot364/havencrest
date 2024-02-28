import Logo from "../assets/images/havencrest_logo.svg";

const Footer = () => {
    return (
        <header className="mt-10 text-white w-full relative bg-[#2B1C22FF]">
            <div className="max-w-full mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between relative z-10 headerWithGradient">
                <img src={Logo} alt="Havencrest Logo" className="w-56 md:ml-auto md:mr-10"/>
            </div>
        </header>
    );
};

export default Footer;
