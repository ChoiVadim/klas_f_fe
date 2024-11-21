import { Link } from 'react-router-dom';
import { Home, FileText, Mail, Settings} from 'lucide-react';

export default function Sidebar() {
    return (
        <div className="w-32 min-h-[calc(100vh-4rem)] bg-card flex flex-col items-center py-4">
        <Link to="#" className="p-2 rounded-lg transition-colors flex flex-col items-center bg-primary text-white hover:bg-primary-dark z-10">
            <Home className="w-8 h-8" />
        </Link>
        <span className="text-base font-medium mb-3">Home</span>      
        <Link to="#" className="p-2 rounded-lg hover:bg-background transition-colors flex flex-col items-center text-muted-foreground z-10">
            <FileText className="w-8 h-8" />
        </Link>
        <span className="text-base font-medium mb-3">Todo</span>
        <Link to="#" className="p-2 rounded-lg hover:bg-background transition-colors flex flex-col items-center text-muted-foreground z-10">
            <Mail className="w-8 h-8" />
        </Link>
        <span className="text-base font-medium mb-3">Chat</span>
        <Link to="#" className="p-2 rounded-lg hover:bg-background transition-colors flex flex-col items-center text-muted-foreground z-10">
            <Settings className="w-8 h-8" />
        </Link>
        <span className="text-base font-medium mb-3">Settings</span>
        </div>
    )
}
