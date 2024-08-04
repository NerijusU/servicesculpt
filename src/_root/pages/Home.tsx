import BasicCard from '@/components/shared/BasicCard';
import { Overview } from '@/components/shared/Overview';
import ProgressCard from '@/components/shared/ProgressCard';
import { useGetCurrentUser } from '@/lib/react-query/user';
import { Loader } from 'lucide-react';
const data: { name: string; total: number }[] = [
  {
    name: 'Jan',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Feb',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Mar',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Apr',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'May',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Jun',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Jul',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Aug',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Sep',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Oct',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Nov',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Dec',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
];
const Home = () => {
  const { data: currentUser, isPending: isUserLoading } = useGetCurrentUser();
  return (
    <div className="flex flex-1 w-full">
      <div className="home-container">
        <div className="home-offers w-full">
          {isUserLoading ? (
            <Loader />
          ) : (
            <div className="flex flex-col  justify-start w-full md:pb-0 pb-4">
              <h2 className="h3-bold md:h2-bold text-left w-full">
                {`Hallo, ` + currentUser?.name + `!`}
              </h2>
              <p className="text-light-3 w-full text-left">
                {'Das Wichtigste in Kürze:'}
              </p>
            </div>
          )}
          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col md:flex-1 md:flex-row gap-4">
              <BasicCard
                title={'Heute 3 Termine'}
                subtitle="Das erste beginnt um 09:00"
              />
              <BasicCard title={'495€'} subtitle="Voraussichtlicher Umsatz" />
              <BasicCard
                title={'8 Stunden'}
                subtitle="Voraussichtliche Arbeitszeit"
              />
            </div>
            <div className="flex flex-col md:flex-1 md:flex-row gap-4">
              <div className="flex-1">
                <ProgressCard
                  title={'Noch 6 Termine bis Ende dieser Woche!'}
                  subtitle="Dein Progress"
                  progress={70}
                  buttonText="Termin erstellen"
                  buttonLink="/schedule"
                />
              </div>
              <div className="flex-1">
                <div className="gap-4 w-full grid grid-cols-2">
                  <BasicCard title={'3'} subtitle="Neue Termine" />
                  <BasicCard title={'2'} subtitle="Absagen" />
                  <BasicCard title={'4'} subtitle="Neue Kunden" />
                  <BasicCard title={'8'} subtitle="Bewertungen" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full pt-4 md:pt-0">
            <Overview
              data={data}
              title="Übersicht"
              // subtitle="Umsatz pro Monat"
            />
          </div>
          <div className="w-full flex flex-row gap-4 justify-stretch md:pt-0 pt-4">
            <div className="user-card">
              <div className="flex-center flex-col gap-1">
                <p className="h4-bold text-center">{'Total Revenue'}</p>
                <p className="h2-bold text-center">{'€ 4,769'}</p>
                <p className="small-regular text-light-3 text-center ">
                  {'+20% from last mounth'}
                </p>
              </div>
            </div>
            <div className="user-card">
              <div className="flex-center flex-col gap-1">
                <p className="h4-bold text-center">{'Total Customers'}</p>
                <p className="h2-bold text-center">{'302'}</p>
                <p className="small-regular text-light-3 text-center ">
                  {'+5% from last mounth'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-creators">
        <h3 className="h3-bold text-light-1">Plan</h3>
      </div>
    </div>
  );
};

export default Home;
