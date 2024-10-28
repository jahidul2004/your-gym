import { useState } from "react";
import Link from "../Link/Link";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Blog", path: "/blog" },
        { id: 5, name: "Contact", path: "/contact" },
    ];

    return (
        <nav className="mt-5 flex justify-between items-center mb-2">
            <div className="md:hidden btn" onClick={() => setOpen(!open)}>
                <MdMenu className={`text-4xl`}></MdMenu>
            </div>
            <ul
                className={`absolute top-10 md:static bg-[#f2f2f2] p-4 rounded-xl w-max my-2 md:flex gap-5 ${
                    open ? "block" : "hidden"
                }`}
            >
                {routes.map((route) => (
                    <Link key={route.id} route={route}></Link>
                ))}
            </ul>
            <h1 className="text-3xl font-bold">Your Gym</h1>
        </nav>
    );
};

export default Navbar;
