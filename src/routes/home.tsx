import Header from '../components/header';
import Sidebar from '../components/sidebar';
import Swiper from '../components/swiper';
import UserImage from '../assets/kw-photo.jpg'
import ParticlesBackground from '../components/ui/ParticlesBackground'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <ParticlesBackground />
      <Header />
        
      {/* Main Layout */}
      <div className="flex bg-white h-[calc(100vh)] md:h-[calc(100vh-5rem)]">
        <Sidebar/>

        {/* Main Content */}
        <div className="flex-1 bg-background overflow-y-auto ml-4 md:ml-0" id="main-content">
          {/* Top Row */}
          <div className="grid grid-cols-1 md:grid-cols-3">

            {/* Left Column: Welcome Section */}
            <div className="col-span-1 p-4 pt-6 md:pt-16 md:pl-36 md:pt-36 w-full">
              <h1 className="text-6xl font-bold text-card-foreground">
                최바딤
              </h1>
              <h1 className="text-3xl font-bold text-card-foreground">
                WELCOME TO KLAS-F
              </h1>
              <h2 className="font-medium mb-8">
                KLAS-F easy access to everything you need! 🎉
              </h2>

              {/*User card*/ }
              <div className="bg-card rounded-lg p-6 shadow-md w-full relative">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <img
                      src={UserImage}
                      alt="Profile"
                      className="w-14 h-14 rounded-full object-cover"
                    />
                  </div>

                  <div>
                    <div className="font-bold text-card-foreground text-xl">최바딤</div>
                    <div className="text-base text-muted-foreground text-md">2022203502 소프트웨어학과 3학년</div>
                  </div>
                </div>
              </div>

              {/* INFO */}
              <div className="mt-8 md:mt-24">
                <h2 className="font-bold mb-4 text-card-foreground text-xl">💼 CREDITS</h2>
                <div className="flex gap-4 md:gap-6">
                  <div className="bg-card p-4 rounded-lg shadow-md text-center w-1/3 md:w-[200px] aspect-square flex flex-col justify-center z-10">
                    <div className="text-xs md:text-sm text-muted-foreground ">Full Credits</div>
                    <div className="text-card-foreground font-bold text-2xl md:text-3xl">70/133</div>
                  </div>
                  <div className="bg-card p-4 rounded-lg shadow-md text-center w-1/3 md:w-[200px] aspect-square flex flex-col justify-center z-10">
                    <div className="text-xs md:text-sm text-muted-foreground">Major Credits</div>
                    <div className="text-card-foreground font-bold text-2xl md:text-3xl">24/50</div>
                  </div>
                  <div className="bg-card p-4 rounded-lg shadow-md text-center w-1/3 md:w-[200px] aspect-square flex flex-col justify-center z-10">
                    <div className="text-xs md:text-sm text-muted-foreground">Elective Credits</div>  
                    <div className="text-card-foreground font-bold text-2xl md:text-3xl">12/30</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-span-2 pt-6  md:pt-14 pl-4 md:pl-32">

              {/* Top Row: Main Information Section */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-yellow-500">📕</span>
                <h2 className="font-bold text-card-foreground text-xl">MAIN INFORMATION</h2>
              </div>
              <div className="flex md:flex-row flex-col gap-4 md:gap-16 pr-4 md:pr-16">
                
                {/*Card 1*/}
                <div className="bg-card p-6 rounded-3xl shadow-md flex items-center aspect-square max-h-96 z-10">
                  <div className="flex items-center">
                    <div>
                      <div className="font-bold text-card-foreground text-xl mb-4">How many credits do you need?</div>
                      <div className="text-base text-muted-foreground text-base">  
                        Credits: 66/133 49.62%<br/>
                        Major Credits: 20/60 33.33%<br/>
                        Elective Credits: 46/30<br/>
                        Average Score: 3.97<br/>
                        Credits for each semesters: 16.75<br/>
                        Major Credits for each semesters: 10.0
                      </div>
                    </div>
                  </div>
                </div>

                {/*Card 2*/}
                <div className="bg-card p-6 rounded-3xl shadow-md flex items-center aspect-square max-h-96 z-10">
                  <div className="flex items-center">
                    <div>
                      <div className="font-bold text-card-foreground text-xl mb-4">How to get good scholarship?</div>
                      <div className="text-base text-muted-foreground text-base">  
                        Credits: 66/133 49.62%<br/>
                        Major Credits: 20/60 33.33%<br/>
                        Elective Credits: 46/30<br/>
                        Average Score: 3.97<br/>
                        Credits for each semesters: 16.75<br/>
                        Major Credits for each semesters: 10.0
                      </div>
                    </div>
                  </div>
                </div>

                {/*Card 3*/}
                <div className="bg-card p-6 rounded-3xl shadow-md flex items-center aspect-square max-h-96 z-10">
                  <div className="flex items-center">
                    <div>
                      <div className="font-bold text-card-foreground text-xl mb-4">How to get good scholarship?</div>
                      <div className="text-base text-muted-foreground text-md">  
                        1. First of all, your TOPIK result must be both valid and 4급. To keep it valid take TOPIK exam once in 1.5 years.<br/>
                        2.Second, watch your grades. Remember, GPA is an average of all of your grades.<br/>
                        3. So, to receive a 100% scholarship, you must have 4.3+ GPA; 70% – 4.0 - 4.3; 50% – 3.5 - 4.0 ; 30% – 3.0 - 3.5; no scholarship is when you get average lower than 3.0. <br/>
                        <a href="https://oia.kw.ac.kr/campus/scholarship.php">More Information</a>
                      </div>
                    </div>
                  </div>
                </div>
                
                
              </div>

              {/* News */}
              <h2 className="font-bold pt-10 md:mt-2 mb-4 text-card-foreground text-xl">📌 NEWS</h2>
              <div className="bg-card rounded-l-3xl mb-6 md:mb-0 shadow-md z-10 overflow-auto">
                <Swiper/>
              </div>

            </div>
            </div>
          </div>
        </div>
      </div>
  )
}