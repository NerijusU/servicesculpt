import Calendar from '@/components/svgs/Calendar';
import GalleryAdd from '@/components/svgs/GalleryAdd';
import Home from '@/components/svgs/Home';
import People from '@/components/svgs/People';
import TrendingUp from '@/components/svgs/TrendingUp';
import Wallpaper from '@/components/svgs/Wallpaper';

export const sidebarLinks = [
  {
    icon: Home,
    route: '/',
    label: 'Dashboard',
  },
  {
    icon: Calendar,
    route: '/schedule',
    label: 'Schedule',
  },
  {
    icon: People,
    route: '/customers',
    label: 'Customers',
  },
  {
    icon: TrendingUp,
    route: '/analytics',
    label: 'Analytics',
  },
  {
    icon: GalleryAdd,
    route: '/create-offer',
    label: 'Create Offer',
  },
  {
    icon: People,
    route: '/all-users',
    label: 'All Users',
  },
];

export const bottombarLinks = [
  {
    icon: Home,
    route: '/',
    label: 'Dashboard',
  },
  {
    icon: Wallpaper,
    route: '/schedule',
    label: 'Schedule',
  },
  {
    icon: TrendingUp,
    route: '/analytics',
    label: 'Analytics',
  },
  {
    icon: GalleryAdd,
    route: '/create-offer',
    label: 'Create',
  },
];
