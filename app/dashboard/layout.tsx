import SideNav from '@/app/ui/dashboard/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden" style={{ background: 'rgb(244, 234, 255)' }}>
      <div className="w-full flex-none md:w-64" style={{ background: 'white' }}>
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12" style={{ background: 'rgb(244, 234, 255)' }}>{children}</div>
    </div>
  );
}