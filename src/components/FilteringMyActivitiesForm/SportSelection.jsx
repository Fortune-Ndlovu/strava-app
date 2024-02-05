import React from "react";

const SportSelection = ({ selectedOption, handleOptionChange }) => {
	 const handleChange = (e) => {
    const selectedValue = e.target.value;
    if (handleOptionChange) {
      handleOptionChange(selectedValue);
    }
  };
	return (
		<div className="select-input">
			<select
        className="form-select"
        value={selectedOption}
        onChange={handleChange}
      >
				<option value="All Sport Types">All Sport Types</option>
				<option value="Ride">Ride</option>
				<option value="Run">Run</option>
				<option value="Swim">Swim</option>
				<option value="Hike">Hike</option>
				<option value="Walk">Walk</option>
				<option value="AlpineSki">Alpine Ski</option>
				<option value="BackcountrySki">Backcountry Ski</option>
				<option value="Canoeing">Canoe</option>
				<option value="Crossfit">Crossfit</option>
				<option value="EBikeRide">E-Bike Ride</option>
				<option value="Elliptical">Elliptical</option>
				<option value="Golf">Golf</option>
				<option value="Handcycle">Handcycle</option>
				<option value="IceSkate">Ice Skate</option>
				<option value="InlineSkate">Inline Skate</option>
				<option value="Kayaking">Kayaking</option>
				<option value="Kitesurf">Kitesurf</option>
				<option value="NordicSki">Nordic Ski</option>
				<option value="RockClimbing">Rock Climb</option>
				<option value="RollerSki">Roller Ski</option>
				<option value="Rowing">Rowing</option>
				<option value="Sail">Sail</option>
				<option value="Skateboard">Skateboard</option>
				<option value="Snowboard">Snowboard</option>
				<option value="Snowshoe">Snowshoe</option>
				<option value="Soccer">Football (Soccer)</option>
				<option value="StairStepper">Stair-Stepper</option>
				<option value="StandUpPaddling">Stand Up Paddling</option>
				<option value="Surfing">Surfing</option>
				<option value="Velomobile">Velomobile</option>
				<option value="VirtualRide">Virtual Ride</option>
				<option value="VirtualRun">Virtual Run</option>
				<option value="WeightTraining">Weight Training</option>
				<option value="Wheelchair">Wheelchair</option>
				<option value="Windsurf">Windsurf</option>
				<option value="Workout">Workout</option>
				<option value="Yoga">Yoga</option>
			</select>
		</div>
	);
};

export default SportSelection;
