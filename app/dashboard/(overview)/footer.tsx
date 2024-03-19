import React from 'react';
import { Divider } from '@mui/material'; // Import MUI Divider

const Footer: React.FC = () => {
    return (
        <div className="my-5  px-6" style={{ background: 'rgb(255, 255, 255)', color: 'rgb(0, 0, 0)' }}>
            <div className="flex flex-row justify-between mx-10 gap-14">
                <div>
                    <div className="mb-2 text-lg font-semibold">Games</div>
                    <div className="flex flex-col gap-2">
                        <a href="/slots"><div className="text-sm" style={{ color: 'rgb(0, 0, 0)', transition: 'color 0.1s ease 0s' }}>Slots</div></a>
                        <a href="/live"><div className="text-sm" style={{ color: 'rgb(0, 0, 0)', transition: 'color 0.1s ease 0s' }}>Live</div></a>
                        <a href="/fishing"><div className="text-sm" style={{ color: 'rgb(0, 0, 0)', transition: 'color 0.1s ease 0s' }}>Fishing</div></a>
                        <a href="/lottery"><div className="text-sm" style={{ color: 'rgb(0, 0, 0)', transition: 'color 0.1s ease 0s' }}>Lottery</div></a>
                        <a href="/esport"><div className="text-sm" style={{ color: 'rgb(0, 0, 0)', transition: 'color 0.1s ease 0s' }}>E-Sports</div></a>
                    </div>
                </div>
                <div>
                    <div className="mb-2 text-lg font-semibold">Information</div>
                    <div className="flex flex-col gap-2">
                        <a href="/rebate"><div className="text-sm" style={{ color: 'rgb(0, 0, 0)', transition: 'color 0.1s ease 0s' }}>Rebate</div></a>
                        <a href="/about-us"><div className="text-sm" style={{ color: 'rgb(0, 0, 0)', transition: 'color 0.1s ease 0s' }}>About Us</div></a>
                        <a href="/about-us/tnc"><div className="text-sm" style={{ color: 'rgb(0, 0, 0)', transition: 'color 0.1s ease 0s' }}>Term & Conditions</div></a>
                    </div>
                </div>
                <div>
                    <div className="mx-3">
                        <div className="text-lg font-semibold" style={{ color: 'rgb(0, 0, 0)' }}>Follow Us</div>
                        <div className="flex flex-row items-center gap-2 mt-3">
                            <a href="https://www.facebook.com/quick77official/"><img src="https://q66win.com/icon/fb.svg" alt="Facebook" width="40" /></a>
                            <a href="https://www.instagram.com/q77win"><img src="https://q66win.com/icon/insta.svg" alt="Instagram" width="40" /></a>
                            <a href="https://t.me/Q77Win"><img src="https://q66win.com/icon/telegram1.svg" alt="Telegram" width="40" /></a>
                        </div>
                    </div>
                    <div className="mx-3 mt-3">
                        <div className="text-lg font-semibold" style={{ color: 'rgb(0, 0, 0)' }}>Certification</div>
                        <div className="flex flex-row items-center gap-2 mt-3">
                            <a target="_blank" href="/"><img src="https://q66win.com/icon/recobmm.png" alt="" /></a>
                            <a target="_blank" href="/"><img src="https://q66win.com/icon/godaddy.png" alt="" /></a>
                            <a target="_blank" href="/"><img src="https://q66win.com/icon/pagco.png" alt="" /></a>
                        </div>
                    </div>
                    <div className="mx-3 mt-3">
                        <div className="text-lg font-semibold" style={{ color: 'rgb(0, 0, 0)' }}>Contact Us</div>
                        <div className="flex flex-row items-center gap-2 mt-3">
                            {/* Add your contact icons here */}
                        </div>
                    </div>

                </div>
                <div>
                    <div className="mx-3">
                        <div className="text-lg font-semibold" style={{ color: 'rgb(0, 0, 0)' }}>Payment Method</div>
                        <div className="flex flex-row items-center gap-2 mt-3">
                            <a href="/"><img src="https://q66win.com/icon/tng.png" alt="Touch 'n Go" width="40" /></a>
                            <a href="/"><img src="https://q66win.com/icon/grab.png" alt="GrabPay" width="40" /></a>
                            <a href="/"><img src="https://q66win.com/icon/boost.png" alt="Boost" width="40" /></a>
                            <a href="/"><img src="https://q66win.com/icon/usdt.png" alt="USDT" width="40" /></a>
                            <a href="/"><img src="https://q66win.com/icon/btc.png" alt="Bitcoin" width="40" /></a>
                            <a href="/"><img src="https://q66win.com/icon/eth.png" alt="Ethereum" width="40" /></a>
                            <a href="/"><img src="https://q66win.com/icon/fpx.png" alt="FPX" width="40" /></a>
                            <a href="/"><img src="https://q66win.com/icon/duitnow.png" alt="DuitNow" width="40" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <Divider variant="middle" style={{ margin: '20px auto' }} />
            <div className="text-sm max-w-[700px] mx-auto text-center">
                This website is operated by Westward Way Tech N.V., registration number: 168306, registered address: Parkeerplaats Dienst Openbare Scholen. The operating license number of this website is N.V.#1168/JAZ, issued and regulated by the Government of Curaçao as a Gaming Service Provider. The management, payment, and support services related to the operation of this website are provided by legitimate and legal companies. Please ensure that you are over 18 years old before registering and engaging in entertainment! Gambling is addictive, please play responsibly.
            </div>
            <Divider variant="middle" style={{ margin: '20px auto' }} />
            <div className="text-sm text-center">© 2024 Q77Win All Rights Reserved</div>
        </div>
    );
};

export default Footer;
