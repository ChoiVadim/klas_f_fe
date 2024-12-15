import Header from "../components/header";
import ParticlesBackground from "../components/ui/ParticlesBackground";
import Sidebar from "../components/sidebar";
import { Link } from "react-router-dom";

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
                        All Information, files and tips about subjects in one place! 🖐 
                    </h2>   
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 md:mr-16">
                        <Link to="/subjects/algorithm" className="bg-card p-6 rounded-3xl shadow-md flex items-center aspect-square max-h-96 z-10">
                            <div className="flex w-full justify-center items-center">
                                <h1 className="text-card-foreground text-md font-bold text-center">
                                    자료구조
                                </h1>
                            </div>
                        </Link>
                        <div className="bg-card p-6 rounded-3xl shadow-md flex items-center aspect-square max-h-96 z-10">
                            <div className="flex w-full justify-center items-center text-center">
                                <h1 className="text-card-foreground text-md font-bold">
                                    알고리즘
                                </h1>
                            </div>
                        </div>
                        <div className="bg-card p-6 rounded-3xl shadow-md flex items-center aspect-square max-h-96 z-10">
                            <div className="flex w-full justify-center items-center text-center">
                                <h1 className="text-card-foreground text-md font-bold text-center">
                                    프로그래밍
                                </h1>
                            </div>
                        </div>
                        <div className="bg-card p-6 rounded-3xl shadow-md flex items-center aspect-square max-h-96 z-10">
                            <div className="flex w-full justify-center items-center text-center">
                                <h1 className="text-card-foreground text-md font-bold">
                                    모바일 프로그래밍
                                </h1>
                            </div>
                        </div>
                        <div className="bg-card p-6 rounded-3xl shadow-md flex items-center aspect-square max-h-96 z-10">
                            <div className="flex w-full justify-center items-center">
                                <h1 className="text-card-foreground text-md font-bold text-center">
                                    웹 프로그래밍
                                </h1>
                            </div>
                        </div>
                        <div className="bg-card p-6 rounded-3xl shadow-md flex items-center aspect-square max-h-96 z-10">
                            <div className="flex w-full justify-center items-center">
                                <h1 className="text-card-foreground text-md font-bold text-center">
                                    데이터베이스
                                </h1>
                            </div>
                        </div>
                        <div className="bg-card p-6 rounded-3xl shadow-md flex items-center aspect-square max-h-96 z-10">
                            <div className="flex w-full justify-center items-center">
                                <h1 className="text-card-foreground text-md font-bold text-center">
                                    데이터베이스
                                </h1>
                            </div>
                        </div>
                        <div className="bg-card p-6 rounded-3xl shadow-md flex items-center aspect-square max-h-96 z-10">
                            <div className="flex w-full justify-center items-center">
                                <h1 className="text-card-foreground text-md font-bold text-center">
                                    데이터베이스
                                </h1>
                            </div>
                        </div>
                        <div className="bg-card p-6 rounded-3xl shadow-md flex items-center aspect-square max-h-96 z-10">
                            <div className="flex w-full justify-center items-center">
                                <h1 className="text-card-foreground text-md font-bold text-center">
                                    데이터베이스
                                </h1>
                            </div>
                        </div>
                        <div className="bg-card p-6 rounded-3xl shadow-md flex items-center aspect-square max-h-96 z-10">
                            <div className="flex w-full justify-center items-center">
                                <h1 className="text-card-foreground text-md font-bold text-center">
                                    데이터베이스
                                </h1>
                            </div>
                        </div>
                        <div className="bg-card p-6 rounded-3xl shadow-md flex items-center aspect-square max-h-96 z-10">
                            <div className="flex w-full justify-center items-center">
                                <h1 className="text-card-foreground text-md font-bold text-center">
                                    데이터베이스
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
      </div>
    )
}