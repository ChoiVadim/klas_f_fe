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
                    <a href="https://www.kw.ac.kr/ko/life/notice.jsp?BoardMode=view&DUID=48539" target="_blank" rel="noopener noreferrer" className="bg-card p-6 rounded-3xl shadow-lg w-full flex flex-col justify-center h-full">
                        <h1 className="text-card-foreground text-base font-bold mb-2">
                            [International Students] Information on refund of regular TOPIK II application fees for the 2024-2 semester
                        </h1>
                        <p className="text-muted-foreground text-sm">
                        1. Subject to application: TOPIK II applicants for the second semester of 2024 among foreign students (undergraduate and graduate...
                        </p>
                    </a>
                </SwiperSlide>

                <SwiperSlide className="h-full">
                    <a href="https://www.kw.ac.kr/ko/life/notice.jsp?BoardMode=view&DUID=48530" target="_blank" rel="noopener noreferrer" className="bg-card p-6 rounded-3xl shadow-lg w-full flex flex-col justify-center h-full">
                        <h1 className="text-card-foreground text-base font-bold mb-2">
                            [Bachelor] Announcement of the grade processing period for the second semester of 2024
                        </h1>
                        <p className="text-muted-foreground text-sm">
                            Announcement of the Second Semester of 2024 The second semester of 2024 will be announced as follows. 1. Final Exam Period: December...
                        </p>
                    </a>
                </SwiperSlide>

                <SwiperSlide className="h-full">
                    <a href="https://www.kw.ac.kr/ko/life/notice.jsp?BoardMode=view&DUID=48491" target="_blank" rel="noopener noreferrer" className="bg-card p-6 rounded-3xl shadow-lg w-full flex flex-col justify-center h-full">
                        <h1 className="text-card-foreground text-base font-bold mb-2">
                            [Registration/Scholarship] Information on applying for excellent grades and frontier scholarships for the first semester of 2025
                        </h1>
                        <p className="text-muted-foreground text-sm">
                        In the first semester of 2025, we will guide you on the application and reception of school scholarships (excellent...
                        </p>
                    </a>
                </SwiperSlide>

                <SwiperSlide className="h-full">
                    <a href="https://www.kw.ac.kr/ko/life/notice.jsp?BoardMode=view&DUID=48691" target="_blank" rel="noopener noreferrer" className="bg-card p-6 rounded-3xl shadow-lg w-full flex flex-col justify-center h-full">
                        <h1 className="text-card-foreground text-base font-bold mb-2">
                            [General] Recruitment of members of the Exercise Health Center in the 4th quarter of 2024
                        </h1>
                        <p className="text-muted-foreground text-sm">
                        - Target for recruitment: Undergraduate students, professors, faculty and staff at Kwangwoon University - Use period: December 20, 2024...
                        </p>
                    </a>
                </SwiperSlide>

                <SwiperSlide className="h-full">
                    <a href="https://www.kw.ac.kr/en/life/notice.jsp?BoardMode=view&DUID=47953" target="_blank" rel="noopener noreferrer" className="bg-card p-6 rounded-3xl shadow-lg w-full flex flex-col justify-center h-full">
                        <h1 className="text-card-foreground text-base font-bold mb-2">
                            [International Student] Information on the 2nd recruitment written test for undergraduate foreigners in the 1st semester of 2025
                        </h1>
                        <p className="text-muted-foreground text-sm">
                        Information on the 2nd recruitment of foreigners for the undergraduate college entrance exam for the 1st semester of 2025, 1. Inquiry...
                        </p>
                    </a>
                </SwiperSlide>

                <SwiperSlide className="h-full">
                    <a href="https://www.kw.ac.kr/ko/life/job.jsp?BoardMode=view&DUID=48537" target="_blank" rel="noopener noreferrer" className="bg-card p-6 rounded-3xl shadow-lg w-full flex flex-col justify-center h-full">
                        <h1 className="text-card-foreground text-base font-bold mb-2">
                            [Employment-related] [On-the-job training] Information on student participation in the "Gwangwoon Group (virtual company) Winter Internship Program"
                        </h1>
                        <p className="text-muted-foreground text-sm">
                        [On-the-job training] The "Kwangwoon Group (virtual company) Winter Internship Program" Student Participation Support Team...
                        </p>
                    </a>
                </SwiperSlide>
               
            
            </Swiper>
    )
}
