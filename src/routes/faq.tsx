import Header from "../components/header";
import Sidebar from "../components/sidebar";
import ParticlesBackground from "../components/ui/ParticlesBackground";

export default function FAQPage() {
    return (
        <div className="min-h-screen bg-background overflow-hidden">
        <ParticlesBackground />
        <Header />
          
        {/* Main Layout */}
        <div className="flex bg-white h-[calc(100vh)] md:h-[calc(100vh-5rem)]">
            <Sidebar/>

            {/* Main Content */}
            <div className="flex-1 bg-background overflow-y-auto ml-4 md:ml-0 items-center align-center p-4" id="main-content">
                <div className="flex flex-col md:ml-16 md:mt-16">
                    <h1 className="text-6xl font-bold text-card-foreground">
                        Chat
                    </h1>
                    <h2 className="font-medium mb-8 mr-10">
                        Chat with your friends! 
                    </h2>   
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 md:mr-16">
                        <div className="bg-card p-6 rounded-3xl shadow-md flex items-center aspect-square max-h-96 z-10">
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
      </div>
    )
}