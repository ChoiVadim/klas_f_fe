import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function SwiperComponent() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
            <Swiper
            slidesPerView={isMobile ? 1 : 3}
                centeredSlides={true}
                spaceBetween={0}
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                
                <SwiperSlide className="h-full">
                    <a href="https://www.kw.ac.kr/en/life/notice.jsp?BoardMode=view&DUID=47953" target="_blank" rel="noopener noreferrer" className="bg-card p-6 rounded-3xl shadow-lg w-full flex flex-col justify-center h-full">
                        <h1 className="text-card-foreground text-base font-bold mb-2">
                            [Undergraduate] Notice on the 2024 Second Semester Midterm Exam Schedule and Guidelines
                        </h1>
                        <p className="text-muted-foreground text-sm">
                            The midterm exam schedule and guidelines for the 2024 second semester have been announced. Please check the details on the official website.
                        </p>
                    </a>
                </SwiperSlide>

                <SwiperSlide className="h-full">
                    <a href="https://www.kw.ac.kr/en/life/notice.jsp?BoardMode=view&DUID=47953" target="_blank" rel="noopener noreferrer" className="bg-card p-6 rounded-3xl shadow-lg w-full flex flex-col justify-center h-full">
                        <h1 className="text-card-foreground text-base font-bold mb-2">
                            [Undergraduate] Notice on the 2024 Second Semester Midterm Exam Schedule and Guidelines
                        </h1>
                        <p className="text-muted-foreground text-sm">
                            The midterm exam schedule and guidelines for the 2024 second semester have been announced. Please check the details on the official website.
                        </p>
                    </a>
                </SwiperSlide>

                <SwiperSlide className="h-full">
                    <a href="https://www.kw.ac.kr/en/life/notice.jsp?BoardMode=view&DUID=47953" target="_blank" rel="noopener noreferrer" className="bg-card p-6 rounded-3xl shadow-lg w-full flex flex-col justify-center h-full">
                        <h1 className="text-card-foreground text-base font-bold mb-2">
                            [Undergraduate] Notice on the 2024 Second Semester Midterm Exam Schedule and Guidelines
                        </h1>
                        <p className="text-muted-foreground text-sm">
                            The midterm exam schedule and guidelines for the 2024 second semester have been announced. Please check the details on the official website.
                        </p>
                    </a>
                </SwiperSlide>

                <SwiperSlide className="h-full">
                    <a href="https://www.kw.ac.kr/en/life/notice.jsp?BoardMode=view&DUID=47953" target="_blank" rel="noopener noreferrer" className="bg-card p-6 rounded-3xl shadow-lg w-full flex flex-col justify-center h-full">
                        <h1 className="text-card-foreground text-base font-bold mb-2">
                            [Undergraduate] Notice on the 2024 Second Semester Midterm Exam Schedule and Guidelines
                        </h1>
                        <p className="text-muted-foreground text-sm">
                            The midterm exam schedule and guidelines for the 2024 second semester have been announced. Please check the details on the official website.
                        </p>
                    </a>
                </SwiperSlide>

                <SwiperSlide className="h-full">
                    <a href="https://www.kw.ac.kr/en/life/notice.jsp?BoardMode=view&DUID=47953" target="_blank" rel="noopener noreferrer" className="bg-card p-6 rounded-3xl shadow-lg w-full flex flex-col justify-center h-full">
                        <h1 className="text-card-foreground text-base font-bold mb-2">
                            [Undergraduate] Notice on the 2024 Second Semester Midterm Exam Schedule and Guidelines
                        </h1>
                        <p className="text-muted-foreground text-sm">
                            The midterm exam schedule and guidelines for the 2024 second semester have been announced. Please check the details on the official website.
                        </p>
                    </a>
                </SwiperSlide>

                <SwiperSlide className="h-full">
                    <a href="https://www.kw.ac.kr/en/life/notice.jsp?BoardMode=view&DUID=47953" target="_blank" rel="noopener noreferrer" className="bg-card p-6 rounded-3xl shadow-lg w-full flex flex-col justify-center h-full">
                        <h1 className="text-card-foreground text-base font-bold mb-2">
                            [Undergraduate] Notice on the 2024 Second Semester Midterm Exam Schedule and Guidelines
                        </h1>
                        <p className="text-muted-foreground text-sm">
                            The midterm exam schedule and guidelines for the 2024 second semester have been announced. Please check the details on the official website.
                        </p>
                    </a>
                </SwiperSlide>
               
            
            </Swiper>
    )
}
