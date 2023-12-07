// Fundamental for creating components, managing state, and handling side effects.
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/DashboardDropdown/Home';
import Challenges from './pages/Challenges';
import MySegments from './pages/DashboardDropdown/MySegments';
import MyGoals from './pages/DashboardDropdown/MyGoals';
import Heatmaps from './pages/DashboardDropdown/Heatmaps';

import Training from './pages/TrainingDropdown/Training';
import TrainingCalendar from './pages/TrainingDropdown/TrainingCalendar';
import MyActivities from './pages/TrainingDropdown/MyActivities';
import TrainingLog from './pages/TrainingDropdown/TrainingLog';
import TrainingPlans from './pages/TrainingDropdown/TrainingPlans';
import PowerCurve from './pages/TrainingDropdown/PowerCurve';
import FitnessAndFreshness from './pages/TrainingDropdown/FitnessAndFreshness';

import Explore from './pages/ExploreDropdown/Explore';
import SegmentExplore from './pages/ExploreDropdown/SegmentExplore';
import SegmentSearch from './pages/ExploreDropdown/SegmentSearch';
import AthleteSearch from './pages/ExploreDropdown/AthleteSearch';
import Clubs from './pages/ExploreDropdown/Clubs';
import Apps from './pages/ExploreDropdown/Apps';
import CreateRoute from './pages/ExploreDropdown/CreateRoute';
import SubscriberPerks from './pages/ExploreDropdown/SubscriberPerks';

import FindFriends from './pages/UserDropdown/FindFriends';
import MyProfile from './pages/UserDropdown/MyProfile';
import Settings from './pages/UserDropdown/Settings';
import LogOut from './pages/UserDropdown/LogOut';

import UploadActivity from './pages/UploadDropdown/UploadActivity';
import AddManualEntry from './pages/UploadDropdown/AddManualEntry';
import CreateRouteUserUpload from './pages/UploadDropdown/CreateRouteUserUpload';
import CreatePost from './pages/UploadDropdown/CreatePost';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                {/* Dashboard Dropdown Routers */}
                <Route path="/"element={<Home/>}></Route>
                <Route path="/segments"element={<MySegments/>}></Route>
                <Route path="/goals"element={<MyGoals/>}></Route>
                <Route path="/heatmaps" element={<Heatmaps />}></Route>

                {/* Training Dropdown Routers */}
                <Route path="/training"element={<Training/>}></Route>
                <Route path="/trainingCalendar"element={<TrainingCalendar/>}></Route>
                <Route path="/activities"element={<MyActivities/>}></Route>
                <Route path="/trainingLog"element={<TrainingLog/>}></Route>
                <Route path="/trainingPlans"element={<TrainingPlans/>}></Route>
                <Route path="/powerCurve"element={<PowerCurve/>}></Route>
                <Route path="/fitnessAndFreshness" element={<FitnessAndFreshness />}></Route>
                
                {/* Explore Dropdown Routers */}
                <Route path="/explore" element={<Explore />}></Route>
                <Route path="/segmentExplore" element={<SegmentExplore />}></Route>
                <Route path="/segmentSearch" element={<SegmentSearch />}></Route>
                <Route path="/athleteSearch" element={<AthleteSearch />}></Route>
                <Route path="/clubs" element={<Clubs />}></Route>
                <Route path="/apps" element={<Apps />}></Route>
                <Route path="/createRoute" element={<CreateRoute />}></Route>
                <Route path="/subscriberPerks" element={<SubscriberPerks />}></Route>
                
                <Route path="/challenges"element={<Challenges/>}></Route>

                {/* User Dropdown Routers */}
                <Route path="/findFriends"element={<FindFriends/>}></Route>
                <Route path="/profile"element={<MyProfile/>}></Route>
                <Route path="/settings"element={<Settings/>}></Route>
                <Route path="/logOut"element={<LogOut/>}></Route>

                {/* Upload Dropdown Routers */}
                <Route path="/uploadActivity"element={<UploadActivity/>}></Route>
                <Route path="/addManualEntry"element={<AddManualEntry/>}></Route>
                <Route path="/createRouteUserUpload"element={<CreateRouteUserUpload/>}></Route>
                <Route path="/CreatePost"element={<CreatePost/>}></Route>
                
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
