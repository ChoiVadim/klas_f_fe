import { Home, FileText, Mail, Plus, Settings, LogIn, LogOut, Search} from 'lucide-react'
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png'



export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
        {/* Top Bar */}
        <div className="flex items-center p-4 bg-white">
            <div className="flex items-center gap-2 mr-8">
            <img
                src={Logo}
                alt="KLAS-F Logo"
                className="w-16 h-16"
            />
              </div>
              
            {/* Search Bar */}
            <div className="flex-1 pr-40 pl-40">
                <div className="relative">
                    <input
                    type="text"
                    placeholder="Search courses, assignments, etc."
                    className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:border-primary"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <Search className="w-5 h-5 text-gray-400" />
                    </div>
                </div>
            </div>
              
            <div className="flex items-center gap-4 ml-auto">
                <LogOut className="w-6 h-6 text-primary" />  
            </div>
        </div>
        

      {/* Main Layout */}
      <div className="flex bg-white">
        {/* Sidebar */}
        <div className="w-24 min-h-[calc(100vh-4rem)] bg-card flex flex-col items-center py-4">
          <Link to="#" className="p-2 rounded-lg transition-colors flex flex-col items-center bg-primary text-white hover:bg-primary-dark">
            <Home className="w-6 h-6" />
          </Link>
          <span className="text-xs mb-3">Home</span>      
          <Link to="#" className="p-2 rounded-lg hover:bg-background transition-colors flex flex-col items-center text-muted-foreground">
            <FileText className="w-6 h-6" />
          </Link>
          <span className="text-xs mb-3">Todo</span>
          <Link to="#" className="p-2 rounded-lg hover:bg-background transition-colors flex flex-col items-center text-muted-foreground">
            <Mail className="w-6 h-6" />
          </Link>
          <span className="text-xs mb-3">Chat</span>
          <Link to="#" className="p-2 rounded-lg hover:bg-background transition-colors flex flex-col items-center text-muted-foreground">
            <Settings className="w-6 h-6" />
          </Link>
          <span className="text-xs mb-3">Settings</span>
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-6 shadow-[0_4px_10px_rgba(0,0,0,0.1),0_0_15px_rgba(0,0,0,0.05)] bg-background rounded-3xl">
           {/* Top Row */}
          <div className="grid grid-cols-3 gap-16">
            {/* Left Column: Welcome Section */}
            <div className="col-span-1 row-span-2 bg-background pl-20 rounded-3xl pt-48 w-full">
              <h1 className="text-3xl font-bold text-card-foreground">
                최바딤 님
              </h1>
              <h1 className="text-3xl text-card-foreground">
                WELCOME TO KLAS-F! 
              </h1>
              <h2 className="text-sm mb-8">
                KLAS-F is a community platform for students. 
              </h2>
              <div className="bg-card rounded-lg p-4 shadow-md inline-block w-full">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary rounded-full" />
                  <div>
                    <div className="font-bold text-card-foreground">최바딤</div>
                    <div className="text-sm text-muted-foreground">2022203502 미디어커뮤니케이션학부</div>
                  </div>
                </div>
              </div>
              {/* INFO */}
              <div className="mt-16">
                <h2 className="font-bold mb-4 text-card-foreground">MY INFO</h2>
                <div className="flex gap-4">
                  <Link to="#" className="bg-card p-4 rounded-lg shadow-md hover:bg-primary-light transition-colors text-center w-24">
                    <div className="w-12 h-12 bg-secondary rounded-lg mx-auto mb-2" />
                    <div className="text-sm text-card-foreground">CREDITS</div>
                  </Link>
                  <Link to="#" className="bg-card p-4 rounded-lg shadow-md hover:bg-primary-light transition-colors text-center w-24">
                    <div className="w-12 h-12 bg-secondary rounded-lg mx-auto mb-2" />
                    <div className="text-sm text-card-foreground">SCORE</div>
                  </Link>
                  <Link to="#" className="bg-card p-4 rounded-lg shadow-md hover:bg-primary-light transition-colors text-center w-24">
                    <div className="w-12 h-12 bg-secondary rounded-lg mx-auto mb-2 flex items-center justify-center">
                    </div>
                    <div className="text-sm text-card-foreground">ELSE</div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Club Recommendations */}
            <div className="col-span-2 p-4 pt-14">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-yellow-500">📕</span>
                <h2 className="font-bold text-card-foreground">Lectures to listen</h2>
              </div>
              <div className="grid grid-cols-3 gap-10">
                <Link to="#" className="bg-card p-4 rounded-3xl shadow-md hover:bg-primary-light transition-colors w-full aspect-square">
                  <div className="flex items-center gap-4">
                    <div>
                      <div className="font-bold text-card-foreground">Text</div>
                      <div className="text-sm text-muted-foreground">Some description</div>
                    </div>
                  </div>
                </Link>
                <Link to="#" className="bg-card p-4 rounded-3xl shadow-md hover:bg-primary-light transition-colors w-full aspect-square">
                  <div className="flex items-center gap-4">
                    <div>
                      <div className="font-bold text-card-foreground">Text</div>
                      <div className="text-sm text-muted-foreground">Some description</div>
                    </div>
                  </div>
                </Link>
              </div>
              {/* Bottom Row: Activities Section */}
              <h2 className="font-bold mt-8 text-card-foreground">📌 Some other information</h2>
              <div className="p-6 mt-4 bg-card rounded-3xl shadow-md">
                <div className="grid grid-cols-4 gap-10">
                  <Link to="#" className="bg-card rounded-3xl shadow-md overflow-hidden aspect-square">
                    <div className="p-2">
                      <div className="font-bold text-sm text-card-foreground">Text</div>
                      <div className="text-xs text-muted-foreground">Some description</div>
                    </div>
                  </Link>
                  <Link to="#" className="bg-card rounded-3xl shadow-md overflow-hidden aspect-square">
                    <div className="p-2">
                      <div className="font-bold text-sm text-card-foreground">Text</div>
                      <div className="text-xs text-muted-foreground">Some description</div>
                    </div>
                  </Link>
                  <Link to="#" className="bg-card rounded-3xl shadow-md overflow-hidden aspect-square">
                    <div className="p-2">
                      <div className="font-bold text-sm text-card-foreground">Text</div>
                      <div className="text-xs text-muted-foreground">Some description</div>
                    </div>
                  </Link>
                  {/* Add more cards as needed */}
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
  )
}