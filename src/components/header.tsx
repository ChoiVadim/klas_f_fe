import Logo from '../assets/logo.png'
import { LogOut, Search } from 'lucide-react'

export default function Header() {
    return (
        <div className="flex items-center p-4 bg-white">
        <div className="flex items-center gap-2 mr-8">
            <img
                src={Logo}
                alt="KLAS-F Logo"
                className="w-16 h-16"
            />
        </div>
      
        <div className="flex-1">
            <div className="relative w-1/3 mx-auto">
                <input
                    type="text"
                    placeholder="Search courses, assignments, etc."
                    className="w-full py-3 pl-16 pr-6 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:border-primary"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                    <Search className="w-7 h-7 text-gray-400" />
                </div>
            </div>
          </div>
      
      <div className="flex items-center gap-4 ml-auto">
          <LogOut className="w-6 h-6 text-primary" />  
      </div>
      </div>
    )
}