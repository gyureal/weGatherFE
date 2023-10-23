import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages';
import SignUp from './pages/signUp';
import Login from './pages/login';
import EmailResend from './pages/EmailResend';
import CheckEmailToken from './pages/CheckEmailToken';
import Profile from './pages/Profile';
import SettingsProfile from './pages/settings/SettingsProfile';
import SettingsPassword from './pages/settings/SettingsPassword';
import SettingsAlarm from './pages/settings/SettingsAlarm';
import SettingInterests from './pages/settings/SettingInterests';
import AddSmallGroups from './pages/smallGroups/AddSmallGroups';
import SmallGroupMain from './pages/smallGroups/SmallGroupMain';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />}></Route>
        <Route path='/sign-up' element={<SignUp />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/email-resend' element={<EmailResend />}></Route>
        <Route path='/check-email-token' element={<CheckEmailToken />}></Route>

        <Route path='/profile/:username' element={<Profile />}></Route>
        <Route path='/settings/profile' element={<SettingsProfile />}></Route>
        <Route path='/settings/password' element={<SettingsPassword />}></Route>
        <Route path='/settings/alarm' element={<SettingsAlarm />}></Route>
        <Route path='/settings/interests' element={<SettingInterests />}></Route>

        <Route path='/smallGroups/add' element={<AddSmallGroups />}></Route>
        <Route path='/smallGroups/:path' element={<SmallGroupMain />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
