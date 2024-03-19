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
import MySearchUserProfile from "./pages/UserPages/MySearchUserProfile";

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
				<Route
					path="/home/goals"
					element={
						<>
							<Header />
							<MyGoals /> <Footer />
						</>
					}
				/>
				<Route
					path="/home/heatmaps"
					element={
						<>
							<Header /> <Heatmaps />
							<Footer />
						</>
					}
				/>

				{/* Training Dropdown Routers */}
				<Route
					path="/home/training"
					element={
						<>
							<Header />
							<Training />
							<Footer />
						</>
					}
				/>
				<Route
					path="/home/trainingCalendar"
					element={
						<>
							<Header />
							<TrainingCalendar /> <Footer />
						</>
					}
				/>
				<Route
					path="/home/activities"
					element={
						<>
							<Header />
							<MyActivities />
							<Footer />
						</>
					}
				/>
				<Route
					path="/home/trainingLog"
					element={
						<>
							<Header />
							<TrainingLog />
							<Footer />
						</>
					}
				/>
				<Route
					path="/home/trainingPlans"
					element={
						<>
							<Header />
							<TrainingPlans />
							<Footer />
						</>
					}
				/>
				<Route
					path="/home/powerCurve"
					element={
						<>
							<Header />
							<PowerCurve />
							<Footer />
						</>
					}
				/>
				<Route
					path="/home/fitnessAndFreshness"
					element={
						<>
							<Header />
							<FitnessAndFreshness />
							<Footer />
						</>
					}
				/>

				{/* Explore Dropdown Routers */}
				<Route
					path="/home/explore"
					element={
						<>
							<Header />
							<Explore />
							<Footer />
						</>
					}
				/>
				<Route
					path="/home/segmentExplore"
					element={
						<>
							<Header />
							<SegmentExplore />
							<Footer />
						</>
					}
				/>
				<Route
					path="/home/segmentSearch"
					element={
						<>
							<Header />
							<SegmentSearch />
							<Footer />
						</>
					}
				/>
				<Route
					path="/home/athleteSearch"
					element={
						<>
							<Header />
							<AthleteSearch />
							<Footer />
						</>
					}
				/>
				<Route
					path="/home/clubs"
					element={
						<>
							<Header />
							<Clubs />
							<Footer />
						</>
					}
				/>
				<Route
					path="/home/apps"
					element={
						<>
							<Header />
							<Apps />
							<Footer />
						</>
					}
				/>
				<Route
					path="/home/createRoute"
					element={
						<>
							<Header />
							<CreateRoute />
							<Footer />
						</>
					}
				/>
				<Route
					path="/home/subscriberPerks"
					element={
						<>
							<Header />
							<SubscriberPerks />
							<Footer />
						</>
					}
				/>

				<Route
					path="/home/challenges"
					element={
						<>
							<Header />
							<Challenges />
							<Footer />
						</>
					}
				/>

				{/* User Dropdown Routers */}
				<Route
					path="/home/findFriends"
					element={
						<>
							<Header />
							<FindFriends />
							<Footer />
						</>
					}
				/>
				<Route
					path="/home/profile"
					element={
						<>
							<Header />
							<MyProfile />
							<Footer />
						</>
					}
				/>
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
				<Route
					path="/home/device"
					element={
						<>
							<Header />
							<Device />
							<Footer />
						</>
					}
				/>
				<Route
					path="/home/file"
					element={
						<>
							<Header />
							<File />
							<Footer />
						</>
					}
				/>
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
				<Route
					path="/home/Mobile"
					element={
						<>
							<Header />
							<Mobile />
							<Footer />
						</>
					}
				/>
				<Route
					path="/home/createPost"
					element={
						<>
							<Header />
							<CreatePost />
							<Footer />
						</>
					}
				/>

				<Route
					path="/home/activity/:activityId"
					element={
						<>
							<Header />
							<ActivityDetailsPage />
							<Footer />
						</>
					}
				/>
				<Route
					path="/home/activity/:activityId/edit"
					element={
						<>
							<Header />
							<EditActivityForm />
							<Footer />
						</>
					}
				/>

				<Route
					path="/home/search/:userId/"
					element={
						<>
							<Header />
							<MySearchUserProfile />
							<Footer />
						</>
					}
				/>

				<Route
					path="/home/post/:postId"
					element={
						<>
							<Header />
							<PostDetailsPage />
							<Footer />
						</>
					}
				/>
				<Route
					path="/home/post/:postId/edit"
					element={
						<>
							<Header />
							<EditPostForm />
							<Footer />
						</>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
