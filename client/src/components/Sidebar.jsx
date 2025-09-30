import { useClerk, useUser } from '@clerk/clerk-react';
import { Eraser, FileText, Hash, House, Image, LogOut, Scissors, SquarePen, Users } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/ai', label: 'Dashboard', Icon: House },
  { to: '/ai/write-article', label: 'Write Article', Icon: SquarePen },
  { to: '/ai/blog-titles', label: 'Blog Titles', Icon: Hash },
  { to: '/ai/generate-images', label: 'Generate Images', Icon: Image },
  { to: '/ai/remove-background', label: 'Remove Background', Icon: Eraser },
  { to: '/ai/remove-object', label: 'Remove Object', Icon: Scissors },
  { to: '/ai/review-resume', label: 'Review Resume', Icon: FileText },
  { to: '/ai/community', label: 'Community', Icon: Users },
];

const Sidebar = ({ sidebar, setSidebar }) => {
  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk();

  const isPremium = user?.publicMetadata?.plan === 'premium';

  return (
    <>
      {/* Overlay for mobile - only shows when sidebar is open */}
      {sidebar && (
        <div 
          className='fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden'
          onClick={() => setSidebar(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          w-60 bg-white border-r border-gray-200 
          flex flex-col justify-between
          fixed sm:relative
          top-0 sm:top-auto
          bottom-0 sm:bottom-auto
          left-0
          h-full sm:h-auto
          z-50 sm:z-auto
          transition-transform duration-300 ease-in-out
          ${sidebar ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'}
        `}
      >
        <div className="my-7 w-full">
          <img 
            src={user?.imageUrl} 
            alt="User avatar" 
            className="w-12 h-12 rounded-full mx-auto object-cover" 
          />
          <h1 className="mt-2 text-center font-medium text-sm">{user?.fullName}</h1>
          
          <div className="px-6 mt-6 text-sm text-gray-600 font-medium space-y-1">
            {navItems.map(({ to, label, Icon }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/ai'}
                onClick={() => setSidebar(false)}
                className={({ isActive }) =>
                  `w-full px-3.5 py-2.5 flex items-center gap-3 rounded transition-colors ${
                    isActive 
                      ? 'bg-gradient-to-r from-gray-800 to-blue-400 text-white' 
                      : 'hover:bg-gray-50 text-gray-700'
                  }`
                }
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </NavLink>
            ))}
          </div>
        </div>
        
        <div className="w-full border-t border-gray-200 p-4 px-7 flex items-center justify-between">
          <div 
            onClick={openUserProfile} 
            className="flex gap-2 items-center cursor-pointer hover:opacity-80 transition"
          >
            <img 
              src={user?.imageUrl} 
              className="w-8 h-8 rounded-full object-cover" 
              alt="User profile" 
            />
            <div>
              <h1 className="text-sm font-medium">{user?.fullName}</h1>
              <p className="text-xs text-gray-500">
                {isPremium ? 'Premium' : 'Free'} Plan
              </p>
            </div>
          </div>
          <LogOut
            onClick={() => signOut()}
            className="w-5 h-5 text-gray-400 hover:text-gray-700 transition cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;