import { Link } from 'react-router-dom';
import { Home, FileText, Mail, Settings} from 'lucide-react';

export default function Sidebar() {
    return (
        <div className="w-24 min-h-[calc(100vh-4rem)] bg-card flex flex-col items-center py-4">
        <Link to="#" className="p-2 rounded-lg transition-colors flex flex-col items-center bg-primary text-white hover:bg-primary-dark">
            <Home className="w-6 h-6" />
        </Link>
        <span className="text-sm mb-3">Home</span>      
        <Link to="#" className="p-2 rounded-lg hover:bg-background transition-colors flex flex-col items-center text-muted-foreground">
            <FileText className="w-6 h-6" />
        </Link>
        <span className="text-sm mb-3">Todo</span>
        <Link to="#" className="p-2 rounded-lg hover:bg-background transition-colors flex flex-col items-center text-muted-foreground">
            <Mail className="w-6 h-6" />
        </Link>
        <span className="text-sm mb-3">Chat</span>
        <Link to="#" className="p-2 rounded-lg hover:bg-background transition-colors flex flex-col items-center text-muted-foreground">
            <Settings className="w-6 h-6" />
        </Link>
        <span className="text-sm mb-3">Settings</span>
        </div>
    )
}
