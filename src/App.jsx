// Fundamental for creating components, managing state, and handling side effects.
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
import LogOut from "./pages/UserPages/LogOut";

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

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				{/* Dashboard Dropdown Routers */}
				<Route path="/" element={<Home />}></Route>
				<Route path="/segments" element={<MySegments />}></Route>
				<Route path="/goals" element={<MyGoals />}></Route>
				<Route path="/heatmaps" element={<Heatmaps />}></Route>

				{/* Training Dropdown Routers */}
				<Route path="/training" element={<Training />}></Route>
				<Route path="/trainingCalendar" element={<TrainingCalendar />}></Route>
				<Route path="/activities" element={<MyActivities />}></Route>
				<Route path="/trainingLog" element={<TrainingLog />}></Route>
				<Route path="/trainingPlans" element={<TrainingPlans />}></Route>
				<Route path="/powerCurve" element={<PowerCurve />}></Route>
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

				<Route path="/challenges" element={<Challenges />}></Route>

				{/* User Dropdown Routers */}
				<Route path="/findFriends" element={<FindFriends />}></Route>
				<Route path="/profile" element={<MyProfile />}></Route>
				<Route path="/settings" element={<Settings />}></Route>
				<Route path="/logOut" element={<LogOut />}></Route>

				{/* Upload Dropdown Routers */}
				<Route path="/device" element={<Device />}></Route>
				<Route path="/file" element={<File />}></Route>
				<Route path="/manual" element={<Manual />}></Route>
				<Route path="/Mobile" element={<Mobile />}></Route>
				<Route path="/createPost" element={<CreatePost />}></Route>

				<Route path="/activity/:activityId" element={<ActivityDetailsPage />} />
				<Route path="/activity/:activityId/edit" element={<EditActivityForm />} />
				
				<Route path="/post/:postId" element={<PostDetailsPage />} />
				<Route path="/post/:postId/edit" element={<EditPostForm />}/>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
