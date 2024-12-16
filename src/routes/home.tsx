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
                    <div className="text-xs md:text-sm text-muted-foreground ">Overall</div>
                    <div className="text-xs md:text-sm text-muted-foreground ">Credits</div>
                    <div className="text-card-foreground font-bold text-2xl md:text-3xl">85/133</div>
                  </div>
                  <div className="bg-card p-4 rounded-lg shadow-md text-center w-1/3 md:w-[200px] aspect-square flex flex-col justify-center z-10">
                    <div className="text-xs md:text-sm text-muted-foreground">Major Credits</div>
                    <div className="text-card-foreground font-bold text-2xl md:text-3xl">43/60</div>
                  </div>
                  <div className="bg-card p-4 rounded-lg shadow-md text-center w-1/3 md:w-[200px] aspect-square flex flex-col justify-center z-10">
                    <div className="text-xs md:text-sm text-muted-foreground">Elective Credits</div>  
                    <div className="text-card-foreground font-bold text-2xl md:text-3xl">42/30</div>
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
              <div className="flex md:flex-row flex-col gap-4 md:gap-4">
                
                {/*Card 1*/}
                <div className="bg-card p-6 rounded-3xl shadow-md flex items-center aspect-square max-h-96 z-10">
                  <div className="flex items-center">
                    <div>
                      <div className="font-bold text-card-foreground text-2xl mb-2">Agenda</div>
                      <div className="font-bold text-card-foreground text-xl mb-0.5">December:</div>
                      <div className="text-base text-muted-foreground text-base">  
                        Class evaluation: 24.12.02 - 13<br/>
                        Grades reveal: 24.12.24~<br/>
                      <div className="font-bold text-card-foreground text-xl mb-0.5">January:</div>
                        Dormitory application: 25.01.01 - 14<br/>
                      <div className="font-bold text-card-foreground text-xl mb-0.5">February:</div>
                        Software registration: 25.02.15<br/>
                        All departments registration: 25.02.19<br/>
                      </div>
                    </div>
                  </div>
                </div>

                {/*Card 2*/}
                <div className="bg-card p-6 rounded-3xl shadow-md flex items-center aspect-square max-h-96 z-10">
                  <div className="flex items-center">
                    <div>
                      <div className="font-bold text-card-foreground text-2xl mb-2">Credits to go</div>
                      <div className="text-base text-muted-foreground text-base"> 
                        Total: 85/133 63.91%<br/>
                        Major Credits: 43/60 71.67%<br/>
                        Elective Credits: 42/30 140%<br/>
                        Average Score: 3.97<br/>
                        <br/>
                      <div className="font-bold text-card-foreground text-xl mb-0.5">Avg. to take per semester:</div>
                        Overall: 16.00<br/>
                        Major Credits: 5.66
                      </div>
                    </div>
                  </div>
                </div>

                {/*Card 3*/}
                <div className="bg-card p-6 rounded-3xl shadow-md flex items-center aspect-square max-h-96 z-10">
                  <div className="flex items-center">
                    <div>
                      <div className="font-bold text-card-foreground text-2xl mb-2">Scholarship conditions</div>
                      <div className="text-base text-muted-foreground text-md">  
                        100% - GPA 4.3+<br/>
                        70% - GPA 4.0 - 4.29<br/>
                        <span className='text-green-500 font-bold'>50% - GPA 3.5 - 3.99</span><br/>
                        30% - GPA 3.0 - 3.49<br/>
                        <br/>
                        No scholarship<br/>
                        GPA is under 3.0
                        <br/>
                        <br/>
                        <a href="https://oia.kw.ac.kr/campus/scholarship.php"><em>More Information</em></a>
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