import { Link } from 'react-router-dom';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import ParticlesBackground from '../components/ui/ParticlesBackground'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <ParticlesBackground />
      <Header />
        

      {/* Main Layout */}
      <div className="flex bg-white">
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 space-y-6 shadow-[0_4px_10px_rgba(0,0,0,0.1),0_0_15px_rgba(0,0,0,0.05)] bg-background rounded-tl-3xl">
          {/* Top Row */}
          <div className="grid grid-cols-3 grid-rows-1 h-full ">

            {/* Left Column: Welcome Section */}
            <div className="col-span-1 row-span-2 bg-background pl-32 rounded-3xl pt-48 w-full">
              <h1 className="text-7xl font-bold text-card-foreground">
                최바딤
              </h1>
              <h1 className="text-4xl font-bold text-card-foreground">
                WELCOME TO KLAS-F! 
              </h1>
              <h2 className="text-lg font-medium mb-8">
                KLAS-F easy access to everything you need 😀 
              </h2>

              <div className="bg-card rounded-lg p-6 shadow-md w-full relative">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary rounded-full" />
                  <div>
                    <div className="font-bold text-card-foreground text-2xl">최바딤</div>
                    <div className="text-base text-muted-foreground text-xl">2022203502 미디어커뮤니케이션학부</div>
                  </div>
                </div>
              </div>

              {/* INFO */}
              <div className="mt-32">
                <h2 className="font-bold mb-4 text-card-foreground text-2xl">💼 CREDITS</h2>
                <div className="flex gap-4">
                  <div className="bg-card p-4 rounded-lg shadow-md hover:bg-primary-light transition-colors text-center w-full aspect-square flex flex-col justify-center z-10">
                    <div className="text-base text-card-foreground ">Full Credits</div>
                    <div className="text-card-foreground font-bold text-5xl">70/133</div>
                  </div>
                  <div className="bg-card p-4 rounded-lg shadow-md hover:bg-primary-light transition-colors text-center w-full aspect-square flex flex-col justify-center z-10">
                    <div className="text-card-foreground">Major </div>
                    <div className="text-card-foreground font-bold text-5xl">24/50</div>
                  </div>
                  <div className="bg-card p-4 rounded-lg shadow-md hover:bg-primary-light transition-colors text-center w-full aspect-square flex flex-col justify-center z-10">
                    <div className="text-card-foreground">Elective Credits</div>
                    <div className="text-card-foreground font-bold text-5xl">12/30</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Club Recommendations */}
            <div className="col-span-2 pt-14 flex flex-col h-full pl-32">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-yellow-500">📕</span>
                <h2 className="font-bold text-card-foreground text-2xl">MAIN INFORMATION</h2>
              </div>
              <div className="flex gap-16">
                
                <div className="bg-card p-6 rounded-3xl shadow-md flex items-center aspect-square max-h-96 z-10">
                  <div className="flex items-center gap-4 p-6">
                    <div>
                      <div className="font-bold text-card-foreground text-2xl mb-4">How many credits do you need?</div>
                      <div className="text-base text-muted-foreground text-xl">  
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

                <div className="bg-card p-6 rounded-3xl shadow-md flex items-center aspect-square max-h-96 z-10">
                  <div className="flex items-center gap-4 p-6">
                    <div>
                      <div className="font-bold text-card-foreground text-2xl mb-4">How to get good scholarship?</div>
                      <div className="text-base text-muted-foreground text-xl">  
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

                <div className="bg-card p-6 rounded-3xl shadow-md flex items-center aspect-square max-h-96 z-10">
                  <div className="flex items-center gap-4 p-6">
                    <div>
                      <div className="font-bold text-card-foreground text-2xl mb-4">How to get good scholarship?</div>
                      <div className="text-base text-muted-foreground text-xl">  
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
                
                
              </div>

              {/* Bottom Row: Activities Section */}
              <h2 className="font-bold mt-8 text-card-foreground text-2xl">📌 NEWS</h2>
              <div className="p-6 mt-4 bg-card rounded-l-3xl shadow-md z-10 w-full overflow-auto">
              <Swiper
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={0}
                pagination={{
                  type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                >
                  
                <SwiperSlide >
                  <a href="https://www.kw.ac.kr/en/life/notice.jsp?BoardMode=view&DUID=47953" target="_blank" rel="noopener noreferrer" className="bg-card p-6 rounded-3xl shadow-lg flex items-center aspect-square max-h-96">
                    <h1 className="text-card-foreground text-xl font-bold">
                      [Undergraduate] Notice on the 2024 Second Semester Midterm Exam Schedule and Guidelines
                    </h1>
                    <p className="text-muted-foreground text-sm">
                      The midterm exam schedule and guidelines for the 2024 second semester have been announced. Please check the details on the official website.
                    </p>
                  </a>
                </SwiperSlide>
                  
                <SwiperSlide >
                  <a href="https://www.kw.ac.kr/en/life/notice.jsp?BoardMode=view&DUID=47953" target="_blank" rel="noopener noreferrer" className="bg-card p-6 rounded-3xl shadow-lg flex items-center aspect-square max-h-96">
                    <h1 className="text-card-foreground text-xl font-bold">
                      [Undergraduate] Notice on the 2024 Second Semester Midterm Exam Schedule and Guidelines
                    </h1>
                    <p className="text-muted-foreground text-sm">
                      The midterm exam schedule and guidelines for the 2024 second semester have been announced. Please check the details on the official website.
                    </p>
                  </a>
                </SwiperSlide>
                  
                <SwiperSlide >
                  <a href="https://www.kw.ac.kr/en/life/notice.jsp?BoardMode=view&DUID=47953" target="_blank" rel="noopener noreferrer" className="bg-card p-6 rounded-3xl shadow-lg flex items-center aspect-square max-h-96">
                    <h1 className="text-card-foreground text-xl font-bold">
                      [Undergraduate] Notice on the 2024 Second Semester Midterm Exam Schedule and Guidelines
                    </h1>
                    <p className="text-muted-foreground text-sm">
                      The midterm exam schedule and guidelines for the 2024 second semester have been announced. Please check the details on the official website.
                    </p>
                  </a>
                </SwiperSlide>
                  
                <SwiperSlide >
                  <a href="https://www.kw.ac.kr/en/life/notice.jsp?BoardMode=view&DUID=47953" target="_blank" rel="noopener noreferrer" className="bg-card p-6 rounded-3xl shadow-lg flex items-center aspect-square max-h-96">
                    <h1 className="text-card-foreground text-xl font-bold">
                      [Undergraduate] Notice on the 2024 Second Semester Midterm Exam Schedule and Guidelines
                    </h1>
                    <p className="text-muted-foreground text-sm">
                      The midterm exam schedule and guidelines for the 2024 second semester have been announced. Please check the details on the official website.
                    </p>
                  </a>
                </SwiperSlide>
                  
                <SwiperSlide >
                  <a href="https://www.kw.ac.kr/en/life/notice.jsp?BoardMode=view&DUID=47953" target="_blank" rel="noopener noreferrer" className="bg-card p-6 rounded-3xl shadow-lg flex items-center aspect-square max-h-96">
                    <h1 className="text-card-foreground text-xl font-bold">
                      [Undergraduate] Notice on the 2024 Second Semester Midterm Exam Schedule and Guidelines
                    </h1>
                    <p className="text-muted-foreground text-sm">
                      The midterm exam schedule and guidelines for the 2024 second semester have been announced. Please check the details on the official website.
                    </p>
                  </a>
                </SwiperSlide>
                  
                <SwiperSlide >
                  <a href="https://www.kw.ac.kr/en/life/notice.jsp?BoardMode=view&DUID=47953" target="_blank" rel="noopener noreferrer" className="bg-card p-6 rounded-3xl shadow-lg flex items-center aspect-square max-h-96">
                    <h1 className="text-card-foreground text-xl font-bold">
                      [Undergraduate] Notice on the 2024 Second Semester Midterm Exam Schedule and Guidelines
                    </h1>
                    <p className="text-muted-foreground text-sm">
                      The midterm exam schedule and guidelines for the 2024 second semester have been announced. Please check the details on the official website.
                    </p>
                  </a>
                </SwiperSlide>
                  
                <SwiperSlide >
                  <a href="https://www.kw.ac.kr/en/life/notice.jsp?BoardMode=view&DUID=47953" target="_blank" rel="noopener noreferrer" className="bg-card p-6 rounded-3xl shadow-lg flex items-center aspect-square max-h-96">
                    <h1 className="text-card-foreground text-xl font-bold">
                      [Undergraduate] Notice on the 2024 Second Semester Midterm Exam Schedule and Guidelines
                    </h1>
                    <p className="text-muted-foreground text-sm">
                      The midterm exam schedule and guidelines for the 2024 second semester have been announced. Please check the details on the official website.
                    </p>
                  </a>
                </SwiperSlide>
                  
                <SwiperSlide >
                  <a href="https://www.kw.ac.kr/en/life/notice.jsp?BoardMode=view&DUID=47953" target="_blank" rel="noopener noreferrer" className="bg-card p-6 rounded-3xl shadow-lg flex items-center aspect-square max-h-96">
                    <h1 className="text-card-foreground text-xl font-bold">
                      [Undergraduate] Notice on the 2024 Second Semester Midterm Exam Schedule and Guidelines
                    </h1>
                    <p className="text-muted-foreground text-sm">
                      The midterm exam schedule and guidelines for the 2024 second semester have been announced. Please check the details on the official website.
                    </p>
                  </a>
                </SwiperSlide>
                
              </Swiper>
              </div>

            </div>
            </div>
          </div>
        </div>
      </div>
  )
}