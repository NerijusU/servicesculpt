import { Route, Routes } from 'react-router-dom';
import './globals.css';
import SigninForm from './_auth/forms/SigninForm';
import { Home } from './_root/pages';
import SignupForm from './_auth/forms/SignupForm';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';
import { Toaster } from '@/components/ui/toaster';
import CreateOffer from './_root/pages/offers/CreateOffer';
import EditOffer from './_root/pages/offers/EditOffer';
import OfferDetails from './_root/pages/offers/OfferDetails';
import UpdateProfile from './_root/pages/profile/UpdateProfile';
import Schedule from './_root/pages/schedule/Schedule';
import Customers from './_root/pages/Customers';
import Analytics from './_root/pages/Analytics';
import Offers from './_root/pages/offers/Offers';
import Settings, { colors } from './_root/pages/Settings';
import React from 'react';
import AllUsers from './_root/pages/AllUsers';
import Profile from './_root/pages/profile/Profile';

const App = () => {
  React.useEffect(() => {
    const persistedColor = sessionStorage.getItem('primaryColor');
    if (persistedColor) {
      document.documentElement.style.setProperty('--primary', persistedColor);
    } else {
      document.documentElement.style.setProperty(
        '--primary',
        'rgb(99, 102, 241)'
      );

      sessionStorage.setItem('primaryColor', colors[0]);
    }
  }, []);
  return (
    <main className="flex h-screen">
      <Routes>
        {/*public */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        {/*private */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="/explore" element={<Explore />} /> */}
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/create-offer" element={<CreateOffer />} />
          <Route path="/update-offer/:id" element={<EditOffer />} />
          <Route path="/offers/:id" element={<OfferDetails />} />
          <Route path="/profile/:id/*" element={<Profile />} />
          <Route path="/update-profile/:id" element={<UpdateProfile />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>

      <Toaster />
    </main>
  );
};

export default App;
