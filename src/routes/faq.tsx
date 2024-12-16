import Header from "../components/header";
import Sidebar from "../components/sidebar";
import ParticlesBackground from "../components/ui/ParticlesBackground";
import { useState } from "react";
import { HelpCircle } from "lucide-react";

export default function FAQPage() {
    const [expanded, setExpanded] = useState({});
    const questions = [
        {
            question: "How do I apply for lectures?",
            answer: "First year students apply as freshmen, others later."
        },
        {
            question: "Can you apply for part payment, what are the conditions?",
            answer: "Part payment is available only when you have to pay more than 1 mil won, it’s divided by 1 mil; e.g. Gotta pay 1.5 mil -> 1 part: 1 mil, 2 part: 500k"
        },
        {
            question: "How to pay ?",
            answer: "online bank transfer"
        },
        {
            question: "Why are there already subjects saying ?",
            answer: "Some subjects are meant for 1 years only, so you can apply for them only during "
        },
        {
            question: "What papers do one require to get part-work permit?",
            answer: "check immigration office website or Kwangwoon news feed"
        },
        {
            question: "Many questions about lecture registration",
            answer: "there is PDF document for that"
        },
        {
            question: "There is a compulsory Korean lectures for foreigners, can I cancel them?",
            answer: "If you have 5th level of Korean or more, attend the office"
        },
        {
            question: "Visa related questions",
            answer: "Kwangwoon newsfeed"
        },
        {
            question: "Credits related questions",
            answer: "If you have high average grade, you’re able to apply for 21 credit, otherwise – 18 credits. 1 hour a week lecture – 1 credit, practical lectures – 2 credits, 3 hours a week lectures – 3 credits"
        },
        {
            question: "Lectures for foreigners tend to be easier and contain less study material",
            answer: ""
        },
        {
            question: "This one is compulsory for graduation, better to take this one first year first term",
            answer: ""
        },
        {
            question: "How do I register subjects on MacOS?",
            answer: "There is no available program for MacOS, find a Windows PC (ask friend or PC)"
        },
        {
            question: "Can I listen to the lectures form other departments?",
            answer: "Yes, they will appear as at your record. Kinda same as . And if you take 2nd major or minor later, they will change to /"
        },
        {
            question: "Are there any special lectures to help foreigners with TOPIK exam?",
            answer: "Yes, sometimes 2 weeks before TOPIK the university holds small term courses to prepare for TOPIK. One should check the newsfeed"
        },
        {
            question: "What do I do if I’ve missed some lectures due to illness?",
            answer: "You gotta have a paper from the doctor which confirms you were ill. Bring it to the office of your department"
        },
        {
            question: "Do foreigners need to listen to lectures?",
            answer: "They are obligatory for Koreans, foreigners are allowed to skip them"
        },
        {
            question: "Do I need to pay ?",
            answer: "Not really but you get some benefits during events"
        },
        {
            question: "How to sign up for library application?",
            answer: "Use your student ID and password is your birthdate"
        },
        {
            question: "TOPIK fee refund and TOPIK level scholarship",
            answer: "You can get a refund of TOPIK fee once a semester, check the newsfeed; There is also a scholarship for TOPIK level: 600k won for the first time you increase your level 3->4 and so on, and 300k the second time you increase it 4->5 and so on). Check for  news at  tab."
        },
        {
            question: "You can receive your TOPIK fee (55000 won) once a semester via international affairs office. Check for  news at  tab.",
            answer: "You can receive your TOPIK fee (55000 won) once a semester via international affairs office. Check for  news at  tab."
        },
        {
            question: "Graduation conditions for foreigners: you need to have a valid TOPIK of 4 or higher, so make sure to pass the TOPIK 6 months before graduation. Most of the departments require just to have an appropriate total number of credits, either 133 or 130; 60 or 45 for major credits and 30 for elective courses. But departments from (, , , ) also need to make a graduation project. Keep that in mind!",
            answer: "Most of the departments require just to have an appropriate total number of credits, either 133 or 130; 60 or 45 for major credits and 30 for elective courses. But departments from (, , , ) also need to make a graduation project. Keep that in mind!"
        },
        {
            question: "You can go for double major(45-60, depends on the major requirements) or minor (21). To be able to register for that, you must have 3.0 or higher GPA, be 2-4 year student. Check for the  news at  tab on the website.",
            answer: "To be able to register for that, you must have 3.0 or higher GPA, be 2-4 year student. Check for the  news at  tab on the website."
        },
    ];
   


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
                        FAQ
                        <HelpCircle className="inline-block m-2 w-10 h-10" />
                    </h1>
                    <h2 className="font-medium mb-8 mr-10">
                        Most asked questions are here! 
                    </h2>   
                    <div className="flex flex-col gap-4 md:gap-4 md:mr-16 md:w-2/3">
                        {questions.map((question, index) => {
                                const isOpen = expanded[index];
                                return (
                                    <div key={index} className="bg-card rounded-3xl shadow-md z-10">
                                        <button
                                            onClick={() => setExpanded({ ...expanded, [index]: !isOpen })}
                                            className="flex items-center justify-between w-full p-6"
                                        >
                                            <h3 className="text-lg font-bold text-card-foreground text-left">{question.question}</h3>
                                            <span className={isOpen ? "rotate-180" : ""}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-card-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </span>
                                        </button>
                                        <div
                                            className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40" : "max-h-0"}`} // Add transition classes
                                        >
                                            <p className="text-sm text-muted-foreground p-6 pt-0">{question.answer}</p>
                                        </div>
                                    </div>
                                );
                            }
                        )}
                    </div>
                </div>
            
            </div>
        </div>
      </div>
    )
}