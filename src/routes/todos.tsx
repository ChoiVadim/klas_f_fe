import Header from "../components/header";
import Subjects  from "./subjects";
import ElectiveS from "./elective";
import ParticlesBackground from "../components/ui/ParticlesBackground";
import Sidebar from "../components/sidebar";


export default function TodosPage() {
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
                        Subjects
                    </h1>
                    <h2 className="font-medium mb-8 mr-10">
                        All major and elective subjects what you need in one place! 🖐 
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:mr-16">
                        {/* Major Subjects */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:mr-16">
                            <h1 className="col-span-2 md:col-span-3 text-xl font-bold text-card-foreground">
                                Major Subjects
                            </h1>
                            <Subjects />
                        </div>
                        {/* Elective Subjects */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:mr-16">
                            <h1 className="col-span-2 md:col-span-3 text-xl font-bold text-card-foreground">
                                Elective Subjects
                            </h1>
                            <ElectiveS />
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
      </div>
    )
}