import Header from "../components/header";
import Sidebar from "../components/sidebar";
import ParticlesBackground from "../components/ui/ParticlesBackground";
import { Info, MessageCircle, Lightbulb } from 'lucide-react';


export default function LecturesPage() {
    return (
    <div className="min-h-screen bg-background overflow-hidden">
        <ParticlesBackground />
        <Header />
          
        {/* Main Layout */}
        <div className="flex bg-white h-[calc(100vh)] md:h-[calc(100vh-5rem)]">
            <Sidebar/>

            {/* Main Content */}
            <div className="flex-1 bg-background overflow-y-auto ml-4 md:ml-0 items-center align-center p-4" id="main-content">
                {/* Right Column */}
                <div className="flex flex-col md:ml-16 md:mt-16">
                    <h1 className="text-6xl font-bold text-card-foreground">
                        Data Structure
                    </h1>
                    <h2 className="font-medium mb-8 mr-10">
                        전필 | 월 5교시 (새빛204), 수 6교시 (새빛204) | 김용혁
                    </h2>   

                    {/* Buttons */}
                    <div className="flex flex-col md:flex-row gap-4 mb-10 w-full w-full md:w-2/3">
                        <button className="w-full bg-primary p-2 px-10 rounded-3xl shadow-md flex items-center justify-center z-10">
                            <Info className="h-6 w-6 mr-2 text-white" />
                            <h1 className="text-white text-center">
                                Information
                            </h1>
                        </button>
                        <button className="w-full p-2 px-10 rounded-3xl shadow-md flex items-center justify-center z-10 bg-card">
                            <MessageCircle className="h-6 w-6 mr-2" />
                            <h1 className="text-black text-center">
                                Comments
                            </h1>
                        </button>
                        <button className="w-full p-2 px-10 rounded-3xl shadow-md flex items-center justify-center z-10 bg-card">
                            <Lightbulb className="h-6 w-6 mr-2" />
                            <h1 className="text-black text-center">
                                Tips
                            </h1>
                        </button>
                    </div>

                    {/* Information */}
                    <div className="bg-card p-6 rounded-3xl shadow-md md:w-2/3 h-full">
                        <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
                        <p className="mb-4">This course will cover the basic concepts of data structures, including arrays, linked lists, stacks, queues, trees, and graphs. You will learn how to analyze the time and space complexity of algorithms, and how to implement algorithms using a variety of data structures.</p>
                        <p className="mb-4">By the end of the course, you should be able to:</p>
                        <ul className="list-disc pl-8 mb-4">
                            <li>Implement algorithms using a variety of data structures</li>
                            <li>Analyze the time and space complexity of algorithms</li>
                            <li>Understand the trade-offs between different data structures</li>
                        </ul>
                        <p className="text-sm font-light">Note: This course is intended for beginners who are new to programming and data structures.</p>
                    </div>

                </div>

            </div>
        </div>
    </div>
    )
}