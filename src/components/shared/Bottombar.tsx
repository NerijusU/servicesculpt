import { bottombarLinks } from '@/constants';
import { Link, useLocation } from 'react-router-dom';

const Bottombar = () => {
  const { pathname } = useLocation();
  // TODO: distinguish between authenticated and not and render different links

  return (
    <section className="bottom-bar">
      {bottombarLinks.map(link => {
        const isActive = pathname === link.route;
        const IconComponent = link.icon;

        return (
          <Link
            key={`bottombar-${link.label}`}
            to={link.route}
            className={`${
              isActive && 'rounded-[10px] bg-primary'
            } flex-center flex-col gap-1 p-2 transition`}
          >
            <IconComponent
              className={`group-hover:invert-white ${isActive && 'invert-white'}`}
              fill="none"
              width={16}
              height={16}
            />
            <p
              className={`tiny-medium text-dark-2 dark:text-light-2 ${isActive && 'invert-white'}`}
            >
              {link.label}
            </p>
          </Link>
        );
      })}
    </section>
  );
};

export default Bottombar;
