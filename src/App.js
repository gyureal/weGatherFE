import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SettingsProfile from './pages/settings/SettingsProfile';
import SettingsPassword from './pages/settings/SettingsPassword';
import SettingsAlarm from './pages/settings/SettingsAlarm';
import SettingInterests from './pages/settings/SettingInterests';
import AddSmallGroups from './pages/smallGroups/AddSmallGroups';
import SmallGroupMain from './pages/smallGroups/SmallGroupMain';
import SmallGroupMember from './pages/smallGroups/SmallGroupMember';
import SmallGroupEdit from './pages/smallGroups/settings/SmallGroupEdit';
import SmallGroupBanner from './pages/smallGroups/settings/SmallGroupBanner';
import Index from './pages/main';
import SignUp from './pages/main/signUp';
import Login from './pages/main/login';
import EmailResend from './pages/main/EmailResend';
import CheckEmailToken from './pages/main/CheckEmailToken';
import Profile from './pages/main/Profile';
import SamllGroupInterests from './pages/smallGroups/settings/SmallGroupInterests';

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
        <Route path='/smallGroups/:path/members' element={<SmallGroupMember />}></Route>

        <Route path='/smallGroups/:path/settings' element={<SmallGroupEdit />}></Route>
        <Route path='/smallGroups/:path/settings/edit' element={<SmallGroupEdit />}></Route>
        <Route path='/smallGroups/:path/settings/banner' element={<SmallGroupBanner />}></Route>
        <Route path='/smallGroups/:path/settings/interests' element={<SamllGroupInterests />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
