import { Link, useLocation } from 'react-router-dom';
import { Home, FileText, Mail, Settings} from 'lucide-react';

export default function Sidebar() {
    const location = useLocation();
    const homeColor = location.pathname === '/' ? 'text-primary' : 'text-muted-foreground';
    const todoColor = location.pathname === '/todos' ? 'text-primary' : 'text-muted-foreground';
    const chatColor = location.pathname === '/chat' ? 'text-primary' : 'text-muted-foreground';
    const settingsColor = location.pathname === '/settings' ? 'text-primary' : 'text-muted-foreground';

    return (
        <div className="hidden md:flex w-20 min-h-[calc(100vh-4rem)] bg-card flex flex-col items-center align-center justify-center">

            {/* Home */}
            <Link to="/" className={`p-2 rounded-lg transition-colors flex flex-col items-center ${homeColor} hover:bg-primary-dark z-10`}>
                <Home className="w-6 h-6" />
            </Link>
            <span className={`text-xs font-medium mb-3 ${homeColor}`}>Home</span>      

            {/* Todo */}
            <Link to="/todos" className={`p-2 rounded-lg hover:bg-background transition-colors flex flex-col items-center ${todoColor} z-10`}>
                <FileText className="w-6 h-6" />
            </Link>
            <span className={`text-xs font-medium mb-3 ${todoColor}`}>Todo</span>

            {/* Chat */}
            <Link to="/chat" className={`p-2 rounded-lg hover:bg-background transition-colors flex flex-col items-center ${chatColor} z-10`}>
                <Mail className="w-6 h-6" />
            </Link>
            <span className={`text-xs font-medium mb-3 ${chatColor}`}>Chat</span>

            {/* Settings */}
            <Link to="/settings" className={`p-2 rounded-lg hover:bg-background transition-colors flex flex-col items-center ${settingsColor} z-10`}>
                <Settings className="w-6 h-6" />
            </Link>
            <span className={`text-xs font-medium mb-3 ${settingsColor}`}>Settings</span>
            
        </div>
    )
}
