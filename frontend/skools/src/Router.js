import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomePage from './pages/HomePage';
import HomePageLogin from './pages/HomePageLogin';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import SearchPage from './pages/SearchPage';
import ComparePage from './pages/ComparePage';
import ProfilePage from './pages/ProfilePage';
import SchoolDetailPage from './pages/SchoolDetailPage';
import SettingProfilePage from './pages/SettingProfilePage';
import SettingPasswordPage from './pages/SettingPasswordPage';
import SettingOthersPage from './pages/SettingOthersPage';
import SchoolAuthPage from './pages/SchoolAuthPage';
import { CmsDetailsPage } from './pages/CmsDetailsPage';
import CmsEventPage from './pages/CmsEventPage';
import CmsSocialPage from './pages/CmsSocialPage';
import SocialPage from './pages/ViewSocial';

const PureRouter = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isSchoolAuthenticated = useSelector((state) => state.cmsAuth.isSchoolAuthenticated);

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <Routes>
            <Route path="/" element={<HomePageLogin />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/setting" element={<SettingProfilePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/compare" element={<ComparePage />} />
            <Route path="/detail" element={<SchoolDetailPage />} />
            <Route path="/setting/password" element={<SettingPasswordPage />} />
            <Route path="/setting/others" element={<SettingOthersPage />} />
            <Route path="*" element={<HomePageLogin />} />
          </Routes>
        </div>
      ) : isSchoolAuthenticated ? (
        <div>
          <Routes>
            <Route path="/cms/school_details" element={<CmsDetailsPage />} />
            <Route path="/cms/events" element={<CmsEventPage />} />
            <Route path="/cms/social" element={<CmsSocialPage />} />
            <Route path="/cms/socialTest/6" element={<SocialPage />} />
            <Route path="*" element={<CmsDetailsPage />} />
          </Routes>
        </div>
      ) : (
        <div>
          <Routes>
            <Route path="/cms/school_details" element={<CmsDetailsPage />} />
            {/* <Route path='/cms/eventmodal' element={<EventModal />} /> */}
            {/* <Route path='/cms/showevents' element={<CmsShowEvents />} /> */}
            <Route path="/cms/events" element={<CmsEventPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/compare" element={<ComparePage />} />
            <Route path="/detail" element={<SchoolDetailPage />} />
            <Route path="/cmsAuth" element={<SchoolAuthPage />} />
            <Route path="*" element={<LoginPage />} />
          </Routes>
        </div>
      )}
    </div>
  );
};

export default PureRouter;