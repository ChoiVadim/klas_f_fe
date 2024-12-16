import Logo from '../assets/logo.png'
import { LogOut, Search, Home, User, Book, HelpCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation();
    const homeColor = location.pathname === '/' ? 'text-primary' : 'text-muted-foreground';
    const todoColor = location.pathname === '/todos' ? 'text-primary' : 'text-muted-foreground';
    const chatColor = location.pathname === '/chat' ? 'text-primary' : 'text-muted-foreground';
    const settingsColor = location.pathname === '/settings' ? 'text-primary' : 'text-muted-foreground';
    
    return (
        <><div className="hidden md:flex items-center p-2 pl-4 bg-white md:w-full md:justify-between">
            {/* Logo */}
            <div className="flex items-center select-none">
                <img
                    src={Logo}
                    alt="KLAS-F Logo"
                    className="w-17 h-17"
                    width={60}
                    height={60} />
            </div>

            {/* Search Bar */}
            <div className="flex-1">
                <div className="relative w-1/3 mx-auto">
                    <input
                        type="text"
                        placeholder="Search courses"
                        className="w-full py-2 pl-16 pr-6 bg-white border rounded-full focus:outline-none focus:border-primary text-base" />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                        <Search className="w-6 h-6 text-gray-400" />
                    </div>
                </div>
            </div>

            {/* Logout Button */}
            <div className="flex items-center hover:bg-background hover:scale-105 transition-all">
                <LogOut className="w-6 h-6 text-muted-foreground" />
            </div>

        </div><div className="flex md:hidden items-center p-2 bg-white">
                {/* Logo */}
                <div className="flex items-center select-none">
                    <img
                        src={Logo}
                        alt="KLAS-F Logo"
                        className="w-15 h-15"
                        width={60}
                        height={60} />
                </div>
                {/* Icons */}
                <div className="flex items-center align-center w-full justify-between">
                    <div className="flex items-center relative mx-auto"> 
                        {/* Home */}
                        <Link to="/" className={`p-2 rounded-lg transition-colors flex flex-col items-center ${homeColor} hover:bg-primary-dark z-10`}>
                            <Home className="w-6 h-6" />
                        </Link>

                        {/* My Courses */}
                        <Link to="/mypage" className={`p-2 rounded-lg hover:bg-background transition-colors flex flex-col items-center ${todoColor} z-10`}>
                            <User className="w-6 h-6" /> {/* Changed to User icon */}
                        </Link>

                        {/* All Courses */}
                        <Link to="/lectures" className={`p-2 rounded-lg hover:bg-background transition-colors flex flex-col items-center ${chatColor} z-10`}>
                            <Book className="w-6 h-6" /> {/* Changed to Book icon */}
                        </Link>

                        {/* FAQ */}
                        <Link to="/faq" className={`p-2 rounded-lg hover:bg-background transition-colors flex flex-col items-center ${settingsColor} z-10`}>
                            <HelpCircle className="w-6 h-6" /> {/* Changed to HelpCircle icon */}
                        </Link>
                        <Search className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <div className="flex items-center">
                        <LogOut className="w-6 h-6 text-muted-foreground" />
                    </div>
                </div>
            </div></>
    )
}
