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
import {
    AtSymbolIcon,
    KeyIcon,
    ExclamationCircleIcon,
} from '@heroicons/react/24/outline';

import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '@/app/ui/button';
import Album from './Album';
import LiveDateTimelbl from './LiveDateTimeLabel';
import './styles.css';
import Footer from './footer';


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

    const photos = [
        { src: 'https://q66win.com/provider_image/slot/naga_games.png', width: 800, height: 600 },
        { src: 'https://q66win.com/provider_image/slot/advant_play.png', width: 1600, height: 900 },
        { src: 'https://q66win.com/provider_image/slot/fcgaming.png', width: 1600, height: 900 },
        { src: 'https://q66win.com/provider_image/slot/nextspin.png', width: 1600, height: 900 },
        { src: 'https://q66win.com/provider_image/slot/spadegaming.png', width: 1600, height: 900 },
        { src: 'https://q66win.com/provider_image/slot/lucky365.png', width: 1600, height: 900 },
        { src: 'https://q66win.com/provider_image/slot/jdb.png', width: 1600, height: 900 },
        // Add more photo objects as needed
    ];

    const sports = [
        { src: 'https://q66win.com/provider_image/sport/cmd368.png', width: 800, height: 600 },
        { src: 'https://q66win.com/provider_image/sport/sabasports.png', width: 1600, height: 900 },
        { src: 'https://q66win.com/provider_image/esport/tf_gaming.png', width: 1600, height: 900 },
        // Add more photo objects as needed
    ];


    const live = [
        { src: 'https://q66win.com/provider_image/live/evolution.png', width: 800, height: 600 },
        { src: 'https://q66win.com/provider_image/live/sexy-gaming.png', width: 1600, height: 900 },
        { src: 'https://q66win.com/provider_image/live/ct855.png', width: 1600, height: 900 },
        { src: 'https://q66win.com/provider_image/live/World_entertainment.png', width: 1600, height: 900 },
        { src: 'https://q66win.com/provider_image/live/sa-gaming.png', width: 1600, height: 900 },
        { src: 'https://q66win.com/provider_image/live/pragmatic-live.png', width: 1600, height: 900 },

        // Add more photo objects as needed
    ];

    const fishing = [
        { src: 'https://q66win.com/provider_image/fish/FC_gaming.png', width: 800, height: 600 },
        { src: 'https://q66win.com/provider_image/fish/JDB.png', width: 1600, height: 900 },
        { src: 'https://q66win.com/provider_image/fish/jili.png', width: 1600, height: 900 },
        { src: 'https://q66win.com/provider_image/fish/joker-fishing.png', width: 1600, height: 900 },

        // Add more photo objects as needed
    ];

    const lottery = [
        { src: 'https://q66win.com/provider_image/lottery/28_win.png', width: 800, height: 600 },

        // Add more photo objects as needed
    ];

    const esports = [
        { src: 'https://q66win.com/provider_image/esport/tf_gaming.png', width: 800, height: 600 },

        // Add more photo objects as needed
    ];

    return (
        <>
            <div className="sticky-header">

                <div style={{ marginBottom: '-30px' }}>
                    <LiveDateTimelbl />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', background: 'rgb(244, 234, 255)' }}>

                    <div className="flex flex-row gap-3 mb-8 relative">

                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Username"
                                required
                            />
                            <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />

                        </div>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Password"
                                required
                                minLength={6}
                            />
                            <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />

                        </div>
                        <LoginButton />
                        <Button style={{ backgroundColor: 'white', color: 'black', border: '1px solid black' }}>
                            Join Now
                        </Button>
                    </div>
                </div>

            </div>
            <div className='z-10 flex-1 overflow-y-auto grow custom-scrollbar' style={{ display: 'flex', justifyContent: 'center' }}>
                <main style={{ width: '60%' }}>

                    <ImageSlider autoSlide={true} autoSlideInterval={5000}>
                        {slides.map((s) => (
                            <img src={s} />
                        ))}
                    </ImageSlider>


                    <div className="flex flex-row gap-3 mt-3 mb-3">
                        <div className='w-5 justify-center mx-auto'>
                            <FontAwesomeIcon icon={faVolumeHigh} />
                        </div>
                        <Marquee>
                            <div>
                                <p>Welcome to Q77WIN - Your Most Trusted Online Casino Asia ! Sign up & Deposit RM30 Get Free RM30 Credit ! Happy Winning !</p></div>
                        </Marquee>
                    </div>
                    <>
                        <div className='flex flex-row items-center gap-3 mb-3'>
                            <img src="https://q66win.com/vendor_type/slot.png" alt="category.slot" className="w-[40px]" />
                            <div className='text-[20px]'>Slots</div>
                        </div>
                        <Album photos={photos} />

                    </>
                    <>
                        <div className='flex flex-row items-center gap-3 mb-3'>
                            <img src="https://q66win.com/vendor_type/sport.png" alt="category.sport" className="w-[40px]" />
                            <div className='text-[20px]'>Sport</div>
                        </div>
                        <Album photos={sports} />
                    </>
                    <>
                        <div className='flex flex-row items-center gap-3 mb-3'>
                            <img src="https://q66win.com/vendor_type/live.png" alt="category.live" className="w-[40px]" />
                            <div className='text-[20px]'>Live</div>
                        </div>

                        <Album photos={live} />
                    </>
                    <>
                        <div className='flex flex-row items-center gap-3 mb-3'>
                            <img src="https://q66win.com/vendor_type/fishing.png" alt="category.live" className="w-[40px]" />
                            <div className='text-[20px]'>Fishing</div>
                        </div>

                        <Album photos={fishing} />
                    </>
                    <>
                        <div className='flex flex-row items-center gap-3 mb-3'>
                            <img src="https://q66win.com/vendor_type/lottery.png" alt="category.live" className="w-[40px]" />
                            <div className='text-[20px]'>Lottery</div>
                        </div>

                        <Album photos={lottery} />
                    </>
                    <>
                        <div className='flex flex-row items-center gap-3 mb-3'>
                            <img src="https://q66win.com/vendor_type/lottery.png" alt="category.live" className="w-[40px]" />
                            <div className='text-[20px]'>E-Sports</div>
                        </div>

                        <Album photos={esports} />
                    </>

                    <div className='py-5'>
                        <img src="https://q66win.com/download/download_app_en.jpeg" width="100%" />
                    </div>

                    <div className='my-5 px-5' style={{ background: 'rgb(255, 255, 255)', color: 'rgb(0, 0, 0)' }}>
                        <div className='flex flex-row justify-between mx-5'>
                            <Footer />
                        </div>
                    </div>


                    {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
                    </div> */}
                </main>
            </div>
        </>
    );
}

function LoginButton() {

    return (
        <Button >
            Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
        </Button>
    );
}



