import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      {/* <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" /> */}
      <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" />
      <img className="self-center cursor-pointer" src="https://q66win.com/logo.png" width="180" height="30" />
    </div>
  );
}
