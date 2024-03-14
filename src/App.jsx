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
							<SignUpFooter />
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
							<SignUpHeader />
							<SignUp />
							<SignUpFooter />
						</>
					}
				/>
				<Route
					path="/home/"
					element={
						<>
							<Header />
							<Home />
							{/* <MySegments />
							<MyGoals />
							<Heatmaps />
							<Training />
							<TrainingCalendar />
							<MyActivities />
							<TrainingLog />
							<TrainingPlans />
							<PowerCurve />
							<FitnessAndFreshness />
							<Explore />
							<SegmentExplore />
							<SegmentSearch />
							<AthleteSearch />
							<Clubs />
							<Apps />
							<CreateRoute />
							<SubscriberPerks />
							<Challenges />
							<FindFriends />
							<MyProfile />
							<Settings />
							<Device />
							<File />
							<Manual />
							<Mobile />
							<CreatePost /> */}
							<Footer />
						</>
					}
				/>

				{/* Dashboard Dropdown Routers */}
				<Route path="/home/" element={<Home />} />
				<Route
					path="/home/segments"
					element={
						<>
							<Header /> <MySegments />
							<Footer />
						</>
					}
				/>
				<Route path="/home/goals" element={<MyGoals />} />
				<Route path="/home/heatmaps" element={<Heatmaps />} />

				{/* Training Dropdown Routers */}
				<Route path="/home/training" element={<Training />} />
				<Route path="/home/trainingCalendar" element={<TrainingCalendar />} />
				<Route path="/home/activities" element={<MyActivities />} />
				<Route path="/home/trainingLog" element={<TrainingLog />} />
				<Route path="/home/trainingPlans" element={<TrainingPlans />} />
				<Route path="/home/powerCurve" element={<PowerCurve />} />
				<Route
					path="/home/fitnessAndFreshness"
					element={<FitnessAndFreshness />}
				/>

				{/* Explore Dropdown Routers */}
				<Route path="/home/explore" element={<Explore />} />
				<Route path="/home/segmentExplore" element={<SegmentExplore />} />
				<Route path="/home/segmentSearch" element={<SegmentSearch />} />
				<Route path="/home/athleteSearch" element={<AthleteSearch />} />
				<Route path="/home/clubs" element={<Clubs />} />
				<Route path="/home/apps" element={<Apps />} />
				<Route path="/home/createRoute" element={<CreateRoute />} />
				<Route path="/home/subscriberPerks" element={<SubscriberPerks />} />

				<Route path="/home/challenges" element={<Challenges />} />

				{/* User Dropdown Routers */}
				<Route path="/home/findFriends" element={<FindFriends />} />
				<Route path="/home/profile" element={<MyProfile />} />
				<Route
					path="/home/settings"
					element={
						<>
							<Header />
							<Settings />
							<Footer />
						</>
					}
				/>

				{/* Upload Dropdown Routers */}
				<Route path="/home/device" element={<Device />} />
				<Route path="/home/file" element={<File />} />
				<Route
					path="/home/manual"
					element={
						<>
							<Header />
							<Manual />
							<Footer />
						</>
					}
				/>
				<Route path="/home/Mobile" element={<Mobile />} />
				<Route path="/home/createPost" element={<CreatePost />} />

				<Route
					path="/home/activity/:activityId"
					element={<>
							<Header />
							<ActivityDetailsPage />
							<Footer />
						</> }
				/>
				<Route
					path="/home/activity/:activityId/edit"
					element={<>
							<Header />
							<EditActivityForm />
							<Footer />
						</> }
				/>

				<Route path="/home/post/:postId" element={<PostDetailsPage />} />
				<Route path="/home/post/:postId/edit" element={<EditPostForm />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
