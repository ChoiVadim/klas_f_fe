import Logo from '../assets/logo.png'
import { LogOut, Search } from 'lucide-react'

export default function Header() {
    return (
        <div className="flex items-center p-4 bg-white ">
        <div className="flex items-center gap-2 mr-8">
            <img
                src={Logo}
                alt="KLAS-F Logo"
                    className="w-17 h-17"
                    width={100}
                    height={100}
            />
        </div>
      
        <div className="flex-1">
            <div className="relative w-1/3 mx-auto">
                <input
                    type="text"
                    placeholder="Search courses, assignments, etc."
                    className="w-full py-3 pl-16 pr-6 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:border-primary text-lg"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                    <Search className="w-7 h-7 text-gray-400" />
                </div>
            </div>
          </div>
      
            <div className="flex items-center gap-2 shadow-md p-2 rounded-md absolute right-5 pl-4 pr-4 hover:bg-background hover:scale-105 transition-all">
                <h1 className="text-base font-medium">Logout</h1>
                <LogOut className="w-8 h-8 text-primary" />  
            </div>
        </div>
    )
}