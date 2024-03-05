import React from 'react';
import { BrowserRouter, Routes, Route, useRoutes, Router } from 'react-router-dom';
import SettingsProfile from './pages/settings/SettingsProfile';
import SettingsPassword from './pages/settings/SettingsPassword';
import SettingsAlarm from './pages/settings/SettingsAlarm';
import SettingInterests from './pages/settings/SettingInterests';
import AddSmallGroups from './pages/smallGroups/AddSmallGroups';
import SmallGroupMain from './pages/smallGroups/SmallGroupMain';
import SmallGroupMember from './pages/smallGroups/SmallGroupMember';
import SmallGroupEdit from './pages/smallGroups/settings/SmallGroupEdit';
import SmallGroupBanner from './pages/smallGroups/settings/SmallGroupBanner';
import SignUp from './pages/main/signUp';
import Login from './pages/main/login';
import EmailResend from './pages/main/EmailResend';
import CheckEmailToken from './pages/main/CheckEmailToken';
import Profile from './pages/users/Profile';
import SamllGroupInterests from './pages/smallGroups/settings/SmallGroupInterests';
import Main from './pages/main/Main';
import SmallGroupsAll from './pages/smallGroups/SmallGroupsAll';
import SmallGroupStatus from './pages/smallGroups/settings/SmallGroupStatus';
import SmallGroupJoinRequests from './pages/smallGroups/SmallGroupJoinRequests';
import UserSmallGroups from './pages/users/UserSmallGroups';
import NotFound from './pages/errorPage/NotFound';
import AutheticatedRoute from './AutheticatedRoute';



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path='/sign-up' element={<SignUp />}></Route>
        <Route path='/login' element={<Login />}></Route>

        <Route path='/email-resend' element={<AutheticatedRoute><EmailResend /></AutheticatedRoute>}></Route>
        <Route path='/check-email-token' element={<AutheticatedRoute><CheckEmailToken /></AutheticatedRoute>}></Route>

        <Route path='/users/:username/profile' element={<AutheticatedRoute><Profile /></AutheticatedRoute>}></Route>
        <Route path='/users/:username/smallGroups' element={<AutheticatedRoute><UserSmallGroups /></AutheticatedRoute>}></Route>

        <Route path='/settings/profile' element={<AutheticatedRoute><SettingsProfile /></AutheticatedRoute>}></Route>
        <Route path='/settings/password' element={<AutheticatedRoute><SettingsPassword /></AutheticatedRoute>}></Route>
        <Route path='/settings/alarm' element={<AutheticatedRoute><SettingsAlarm /></AutheticatedRoute>}></Route>
        <Route path='/settings/interests' element={<AutheticatedRoute><SettingInterests /></AutheticatedRoute>}></Route>

        <Route path='/smallGroups' element={<SmallGroupsAll />}></Route>
        <Route path='/smallGroups/add' element={<AutheticatedRoute > <AddSmallGroups /></AutheticatedRoute>}></Route>
        <Route path='/smallGroups/:path' element={<AutheticatedRoute><SmallGroupMain /></AutheticatedRoute>}></Route>
        <Route path='/smallGroups/:path/members' element={<AutheticatedRoute> <SmallGroupMember /></AutheticatedRoute>}></Route>
        <Route path='/smallGroups/:path/join-requests' element={<AutheticatedRoute> <SmallGroupJoinRequests /></AutheticatedRoute>}></Route>

        <Route path='/smallGroups/:path/settings' element={<AutheticatedRoute><SmallGroupEdit /></AutheticatedRoute>}></Route>
        <Route path='/smallGroups/:path/settings/edit' element={<AutheticatedRoute><SmallGroupEdit /></AutheticatedRoute>}></Route>
        <Route path='/smallGroups/:path/settings/banner' element={<AutheticatedRoute><SmallGroupBanner /></AutheticatedRoute>}></Route>
        <Route path='/smallGroups/:path/settings/interests' element={<AutheticatedRoute><SamllGroupInterests /></AutheticatedRoute>}></Route>
        <Route path='/smallGroups/:path/settings/status' element={<AutheticatedRoute><SmallGroupStatus /></AutheticatedRoute>}></Route>

        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}