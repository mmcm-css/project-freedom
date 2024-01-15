import Image from "next/image";
import logo from "../../../public/img/mcm-logo.svg";
import hamburger from "../../../public/img/Hamburger.svg";

const Navbar = () => {
    return (
        <>
            <nav className="flex p-2 justify-between">
                <Image src={logo} width={60} height={50} alt="logo" />
                <Image src={hamburger} width={23} height={18} alt="hamburger" />
            </nav>
        </>
    )
}

export default Navbar;