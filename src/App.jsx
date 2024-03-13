import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/DashboardPages/Home";
import Challenges from "./pages/Challenges";
import MySegments from "./pages/DashboardPages/MySegments";
import MyGoals from "./pages/DashboardPages/MyGoals";
import Heatmaps from "./pages/DashboardPages/Heatmaps";

import Training from "./pages/TrainingPages/Training";
import TrainingCalendar from "./pages/TrainingPages/TrainingCalendar";
import MyActivities from "./pages/TrainingPages/MyActivities";
import TrainingLog from "./pages/TrainingPages/TrainingLog";
import TrainingPlans from "./pages/TrainingPages/TrainingPlans";
import PowerCurve from "./pages/TrainingPages/PowerCurve";
import FitnessAndFreshness from "./pages/TrainingPages/FitnessAndFreshness";

import Explore from "./pages/ExplorePages/Explore";
import SegmentExplore from "./pages/ExplorePages/SegmentExplore";
import SegmentSearch from "./pages/ExplorePages/SegmentSearch";
import AthleteSearch from "./pages/ExplorePages/AthleteSearch";
import Clubs from "./pages/ExplorePages/Clubs";
import Apps from "./pages/ExplorePages/Apps";
import CreateRoute from "./pages/ExplorePages/CreateRoute";
import SubscriberPerks from "./pages/ExplorePages/SubscriberPerks";

import FindFriends from "./pages/UserPages/FindFriends";
import MyProfile from "./pages/UserPages/MyProfile";
import Settings from "./pages/UserPages/Settings";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";

import CreatePost from "./pages/UserUploadPages/CreatePost";

import Device from "./pages/UserUploadPages/Device";
import File from "./pages/UserUploadPages/File";
import Manual from "./pages/UserUploadPages/Manual";
import Mobile from "./pages/UserUploadPages/Mobile";

import ActivityDetailsPage from "./pages/ActivityDetailsPage";
import EditActivityForm from "./components/EditActivityForm/EditActivityForm";

import PostDetailsPage from "./pages/PostDetailsPage";
import EditPostForm from "./components/EditPostForm/EditPostForm";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SignUpHeader from "./components/SignUpHeader/SignUpHeader";
import SignUpFooter from "./components/SignUpFooter/SignUpFooter";
import LogInHeader from "./components/LogInHeader/LogInHeader";
import LogInFooter from "./components/LogInFooter/LogInFooter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <>
              <LogInHeader />
              <LogIn />
              <LogInFooter />
            </>
          }
        />
        <Route
          path="/signUp"
          element={
            <>
              <SignUpHeader />
              <SignUp />
              <SignUpFooter />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Header />
              <Routes>
                {/* Dashboard Dropdown Routers */}
                <Route path="/" element={<Home />} />
                <Route path="/segments" element={<MySegments />} />
                <Route path="/goals" element={<MyGoals />} />
                <Route path="/heatmaps" element={<Heatmaps />} />

                {/* Training Dropdown Routers */}
                <Route path="/training" element={<Training />} />
                <Route
                  path="/trainingCalendar"
                  element={<TrainingCalendar />}
                />
                <Route path="/activities" element={<MyActivities />} />
                <Route path="/trainingLog" element={<TrainingLog />} />
                <Route path="/trainingPlans" element={<TrainingPlans />} />
                <Route path="/powerCurve" element={<PowerCurve />} />
                <Route
                  path="/fitnessAndFreshness"
                  element={<FitnessAndFreshness />}
                />

                {/* Explore Dropdown Routers */}
                <Route path="/explore" element={<Explore />} />
                <Route
                  path="/segmentExplore"
                  element={<SegmentExplore />}
                />
                <Route path="/segmentSearch" element={<SegmentSearch />} />
                <Route path="/athleteSearch" element={<AthleteSearch />} />
                <Route path="/clubs" element={<Clubs />} />
                <Route path="/apps" element={<Apps />} />
                <Route path="/createRoute" element={<CreateRoute />} />
                <Route
                  path="/subscriberPerks"
                  element={<SubscriberPerks />}
                />

                <Route path="/challenges" element={<Challenges />} />

                {/* User Dropdown Routers */}
                <Route path="/findFriends" element={<FindFriends />} />
                <Route path="/profile" element={<MyProfile />} />
                <Route path="/settings" element={<Settings />} />

                {/* Upload Dropdown Routers */}
                <Route path="/device" element={<Device />} />
                <Route path="/file" element={<File />} />
                <Route path="/manual" element={<Manual />} />
                <Route path="/Mobile" element={<Mobile />} />
                <Route path="/createPost" element={<CreatePost />} />

                <Route
                  path="/activity/:activityId"
                  element={<ActivityDetailsPage />}
                />
                <Route
                  path="/activity/:activityId/edit"
                  element={<EditActivityForm />}
                />

                <Route
                  path="/post/:postId"
                  element={<PostDetailsPage />}
                />
                <Route path="/post/:postId/edit" element={<EditPostForm />} />
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
