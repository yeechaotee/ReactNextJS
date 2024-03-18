'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  // {
  //   name: 'Invoices',
  //   href: '/dashboard/invoices',
  //   icon: DocumentDuplicateIcon,
  // },
  // { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
  { name: 'Slots', href: '/dashboard/slots', icon: UserGroupIcon },
  { name: 'Sports', href: '/dashboard/sports', icon: UserGroupIcon },
  { name: 'Live', href: '/dashboard/live', icon: UserGroupIcon },
  { name: 'Fishing', href: '/dashboard/fishing', icon: UserGroupIcon },
  { name: 'Lottery', href: '/dashboard/lottery', icon: UserGroupIcon },
  { name: 'E-sports', href: '/dashboard/esports', icon: UserGroupIcon },
  { name: 'Promotions', href: '/dashboard/promotions', icon: UserGroupIcon },
  { name: 'Invite', href: '/dashboard/invite', icon: UserGroupIcon },
  { name: 'Rebate', href: '/dashboard/rebate', icon: UserGroupIcon },
  { name: 'Check In', href: '/dashboard/checkin', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
