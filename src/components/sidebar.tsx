import { Link, useLocation } from 'react-router-dom';
import { Home, User, Book, HelpCircle } from 'lucide-react';

export default function Sidebar() {
    const location = useLocation();
    const homeColor = location.pathname === '/' ? 'text-primary' : 'text-muted-foreground';
    const todoColor = location.pathname === '/mypage' ? 'text-primary' : 'text-muted-foreground';
    const chatColor = location.pathname === '/lectures' ? 'text-primary' : 'text-muted-foreground';
    const settingsColor = location.pathname === '/faq' ? 'text-primary' : 'text-muted-foreground';

    return (
        <div className="hidden md:flex w-20 min-h-[calc(100vh-4rem)] bg-card flex flex-col items-center align-center justify-center">

            {/* Home */}
            <Link to="/" className={`p-2 rounded-lg transition-colors flex flex-col items-center ${homeColor} hover:bg-primary-dark z-10`}>
                <Home className="w-6 h-6" />
            </Link>
            <span className={`text-xs font-medium mb-3 ${homeColor}`}>Home</span>      

            {/* MyPage */}
            <Link to="/mypage" className={`p-2 rounded-lg hover:bg-background transition-colors flex flex-col items-center ${todoColor} z-10`}>
                <User className="w-6 h-6" />
            </Link>
            <span className={`text-xs font-medium mb-3 ${todoColor}`}>MyPage</span>

            {/* Lectures */}
            <Link to="/lectures" className={`p-2 rounded-lg hover:bg-background transition-colors flex flex-col items-center ${chatColor} z-10`}>
                <Book className="w-6 h-6" />
            </Link>
            <span className={`text-xs font-medium mb-3 ${chatColor}`}>Lectures</span>

            {/* FAQ */}
            <Link to="/faq" className={`p-2 rounded-lg hover:bg-background transition-colors flex flex-col items-center ${settingsColor} z-10`}>
                <HelpCircle className="w-6 h-6" />
            </Link>
            <span className={`text-xs font-medium mb-3 ${settingsColor}`}>FAQ</span>
            
        </div>
    )
}
