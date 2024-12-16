import Header from "../components/header";
import ParticlesBackground from "../components/ui/ParticlesBackground";
import Sidebar from "../components/sidebar";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function SettingsPage() {
    const [isLoading, setIsLoading] = useState(false)
    const [news, setNews] = useState([]); // State to hold news items
    const [error, setError] = useState(null); // State to hold any errors


    useEffect(() => {
        const fetchNews = async () => {
            try {
                setIsLoading(true)
                const response = await fetch('http://172.100.6.194:8080/news', {
                    method: 'GET',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch news');
                }

                const data = await response.json();
                setNews(data); // Set the fetched news data
                setIsLoading(false)
            } catch (err) {
                setError(err.message); // Set the error message
                setIsLoading(false)
            }
        };

        fetchNews();
    }, []); //
        
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
                        Settings
                    </h1>
                    <h2 className="font-medium mb-8 mr-10">
                        All Information, files and tips about subjects in one place! 
                    </h2>   
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 md:mr-16">
                    {isLoading ? 'Fetching news...' : ''}
                    {news.length > 0 ? (
                        news.map((item, index) => (
                            <Link to={item.link} key={index} target="_blank" className="bg-card p-6 rounded-3xl shadow-md flex items-center aspect-square max-h-96 z-10">
                                <div className="flex w-full justify-center items-center text-center">
                                    <h1 className="text-card-foreground text-md font-bold">
                                        {item.title} 
                                    </h1>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <p>No news available.</p> 
                    )}
                </div>
                </div>
            
            </div>
        </div>
      </div>
    )
}
