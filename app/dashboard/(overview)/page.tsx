import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { fetchCardData } from '@/app/lib/data'; // remove fetchRevenue
import { Suspense } from 'react';
import { RevenueChartSkeleton, LatestInvoicesSkeleton, } from '@/app/ui/skeletons';
import ImageSlider from '@/app/src/Components/ImageSlider';
import Marquee from 'react-fast-marquee';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

export default async function Page() {
    const {
        numberOfInvoices,
        numberOfCustomers,
        totalPaidInvoices,
        totalPendingInvoices,
    } = await fetchCardData();

    const slides = [
        'https://q66win.com/uploads/banner/2024-03-15/banner_en16.jpg',
        'https://q66win.com/uploads/banner/2024-03-15/banner_en18.png'
    ]

    return (
        <main>
            <div className="'max-w-lg'">
                <ImageSlider autoSlide={true} autoSlideInterval={5000}>
                    {slides.map((s) => (
                        <img src={s} />
                    ))}
                </ImageSlider>
            </div>

            <div className='grid-cols-2'>
                <div className='w-5 h-9'>
                    <FontAwesomeIcon icon={faVolumeHigh} />
                </div>
                <Marquee>
                    <div>
                        <p>Welcome to Q77WIN - Your Most Trusted Online Casino Asia ! Sign up & Deposit RM30 Get Free RM30 Credit ! Happy Winning !</p></div>
                </Marquee>
            </div>

            {/* <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div>
                        <h3>Slide 1</h3>
                        <p>This is the content for Slide 1.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <h3>Slide 2</h3>
                        <p>This is the content for Slide 2.</p>
                    </div>
                </SwiperSlide>
            </Swiper> */}

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Card title="Collected" value={totalPaidInvoices} type="collected" />
                <Card title="Pending" value={totalPendingInvoices} type="pending" />
                <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
                <Card
                    title="Total Customers"
                    value={numberOfCustomers}
                    type="customers"
                />
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <Suspense fallback={<RevenueChartSkeleton />}>
                    <RevenueChart />
                </Suspense>
                <Suspense fallback={<LatestInvoicesSkeleton />}>
                    <LatestInvoices />
                </Suspense>
            </div>
        </main>
    );
}


