import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import a from '../../assets/exercises/Chest/Dumbbell-Press-1.gif';
import b from '../../assets/exercises/Chest/Lever-Incline-Chest-Press.gif';
import c from '../../assets/exercises/Shoulders/Seated-Dumbbell-Lateral-Raise.gif';
import d from '../../assets/exercises/Shoulders/Two-Arm-Cable-Front-Raise.gif';
import e from '../../assets/exercises/Chest/Chest-Dips.gif';
import g from '../../assets/exercises/Chest/Cable-Crossover.gif';
import h from '../../assets/exercises/Biceps/Barbell-Triceps-Extension.gif';
import ph1 from '../../assets/exercises/client/mohamed samier/day 1/Incline-Dumbbell-Press 1.gif'
import ph2 from '../../assets/exercises/client/mohamed samier/day 1/Dumbbell-Press-2.gif'
import ph3 from '../../assets/exercises/client/mohamed samier/day 1/Seated-Dumbbell-Lateral-Raise 3.gif'
import ph4 from '../../assets/exercises/client/mohamed samier/day 1/Chest-Dips4.gif'
import ph5 from '../../assets/exercises/client/mohamed samier/day 1/Lever-Chest-Press 5.gif'
import ph6 from '../../assets/exercises/client/mohamed samier/day 1/Two-Arm-Cable-Front-Raise 6.gif'
import ph7 from '../../assets/exercises/client/mohamed samier/day 1/Cable-Crossover 7.gif'
import ph8 from '../../assets/exercises/client/mohamed samier/day 1/Barbell-Triceps-Extension 8.gif'
import ph9 from '../../assets/exercises/client/mohamed samier/day 2/Seated-Cable-Row  1.gif'
import ph10 from '../../assets/exercises/client/mohamed samier/day 2/Lat-Pulldown  2.gif'
import ph11 from '../../assets/exercises/client/mohamed samier/day 2/Incline-Reverse-Grip-Dumbbell-Row  3.gif'
import ph12 from '../../assets/exercises/client/mohamed samier/day 2/V-bar-Lat-Pulldown 4.gif'
import ph13 from '../../assets/exercises/client/mohamed samier/day 2/Full-Range-Of-Motion-Lat-Pulldown5.gif'
import ph14 from '../../assets/exercises/client/mohamed samier/day 2/Rear-Delt-Machine-Flys6.gif'
import ph15 from '../../assets/exercises/client/mohamed samier/day 2/Seated-Incline-Dumbbell-Curl 7.gif'
import ph16 from '../../assets/exercises/client/mohamed samier/day 2/Lever-Preacher-Curl8.gif'
import ph17 from '../../assets/exercises/client/mohamed samier/day 3/smith-machine-squat 1.gif'
import ph18 from '../../assets/exercises/client/mohamed samier/day 3/Lever-Single-Leg-Curl 2.gif'
import ph19 from '../../assets/exercises/client/mohamed samier/day 3/Leg-Press 3.gif'
import ph20 from '../../assets/exercises/client/mohamed samier/day 3/Barbell-Romanian-Deadlift 4.gif'
import ph21 from '../../assets/exercises/client/mohamed samier/day 3/LEG-EXTENSION5.gif'
import ph22 from '../../assets/exercises/client/mohamed samier/day 3/Leg-Press-Calf-Raise 6.gif'
import ph23 from '../../assets/exercises/client/mohamed samier/day 3/Cross-Crunch.gif'
import ph24 from '../../assets/exercises/client/mohamed samier/day 3/Seated-Bench-Leg-Pull-in.gif'
import ph25 from '../../assets/exercises/client/mohamed samier/day 4/Dumbbell-Shoulder-Press 1.gif'
import ph26 from '../../assets/exercises/client/mohamed samier/day 4/Seated-Dumbbell-Lateral-Raise 2.gif'
import ph27 from '../../assets/exercises/client/mohamed samier/day 4/Two-Arm-Cable-Front-Raise3.gif'
import ph28 from '../../assets/exercises/client/mohamed samier/day 4/Rear-Delt-Machine-Flys 4.gif'
import ph29 from '../../assets/exercises/client/mohamed samier/day 4/Seated-Incline-Dumbbell-Curl 5.gif'
import ph30 from '../../assets/exercises/client/mohamed samier/day 4/Pushdown 6.gif'
import ph31 from '../../assets/exercises/client/mohamed samier/day 4/Barbell-Triceps-Extension7.gif'
import ph32 from '../../assets/exercises/client/mohamed samier/day 5/Lying-Chest-Press-Machine1.gif'
import ph33 from '../../assets/exercises/client/mohamed samier/day 5/Dumbbell-Shoulder-Press 2.gif'
import ph34 from '../../assets/exercises/client/mohamed samier/day 6/Lever-Reverse-T-Bar-Row2.gif'
import ph35 from '../../assets/exercises/client/mohamed samier/day 6/close-grip-cable-row 3.gif'
import ph36 from '../../assets/exercises/client/mohamed samier/day 6/Rope-Straight-Arm-Pulldown4.gif'
import ph37 from '../../assets/exercises/client/mohamed samier/day 6/Full-Range-Of-Motion-Lat-Pulldown 5.gif'
import ph38 from '../../assets/exercises/client/mohamed samier/day 5/Cable-Rope-Overhead-Triceps-Extension (2)7.gif'
import ph39 from '../../assets/exercises/client/mahmoud sabra/day 2/Lever-Shrug 8.gif'
import ph40 from '../../assets/exercises/client/mahmoud sabra/day 5/Barbell-Bench-Press1.gif'
import ph41 from '../../assets/exercises/client/mahmoud sabra/day 6/Dumbbell-Shrug 5.gif'
import ph42 from '../../assets/exercises/client/mahmoud sabra/day 5/Kneeling-Cable-Crunch.gif'
import { Helmet } from 'react-helmet';
import dumbel from '../../assets/dumbbell-gym-svgrepo-com.svg';

export default function Client1() {
    const { day } = useParams(); 
    const [currentUser, setCurrentUser] = useState(null);

    
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        
        if (storedUser) {
            setCurrentUser(storedUser);
        }
    }, []);

    if (!currentUser || !currentUser.id) {
        return <div>User not found or invalid user ID</div>;
    }

    const workoutPlans = {
        1: {
            "Day 1": {
                title: "Chest Day - Coach",
                exercises: [
                    { img: a, name: "Incline Dumbbell" },
                    { img: b, name: "Barbell Bench Press" },
                    { img: c, name: "Decline Chest Press Machine" },
                    { img: d, name: "Pec Deck Fly" },
                    { img: e, name: "Chest Dips" },
                    { img: g, name: "Cable Rope Overhead Triceps Extension" },
                    { img: h, name: "Pushdown" },
                ],
            },
            "Day 2": {
                title: "Back Day - Coach",
                exercises: [
                    { img: h, name: "Pull Up" },
                    { img: b, name: "Barbell Row" },
                ],
            },
            "Day 3": {
                title: "leg Day - Admin",
                exercises: [
                    { img: h, name: "Pull Up" },
                    { img: b, name: "Barbell Row" },
                ],
            },
            "Day 4": {
                title: "Backed Day - Admin",
                exercises: [
                    { img: h, name: "Pull Up" },
                    { img: b, name: "Barbell Row" },
                ],
            },
            "Day 5": {
                title: "Backs Day - Admin",
                exercises: [
                    { img: h, name: "Pull Up" },
                    { img: b, name: "Barbell Row" },
                ],
            },
            "Day 6": {
                title: "Backa Day - Admin",
                exercises: [
                    { img: h, name: "Pull Up" },
                    { img: b, name: "Barbell Row" },
                ],
            },
        },
        2: {
            "Day 1": {
                title: "Chest Day - Zeyad",
                exercises: [
                    { img: a, name: "Dumbbell-Press [3x12]" },
                    { img: b, name: "Lever-Incline [2x10]" },
                    { img: e, name: "Dips [3x12]" },
                    { img: g, name: "Cable-Crossover [3x12] " },
                    { img: c, name: "Seated-Dumbbell-Lateral [2x8-12]" },
                    { img: h, name: "Barbell-Triceps [3x12]" },
                    { img: d, name: "Two-Arm-Cable-Front-Raise [2x12]" },
                ],
            },
            "Day 2": {
                title: "Back Day - Zeyad",
                exercises: [
                    { img: h, name: "Pull Up" },
                    { img: b, name: "Barbell Row" },
                ],
            },
            "Day 3": {
                title: "leg Day - Zeyad",
                exercises: [
                    { img: h, name: "Pull Up" },
                    { img: b, name: "Barbell Row" },
                ],
            },
            "Day 4": {
                title: "Back Day - Zeyad",
                exercises: [
                    { img: h, name: "Pull Up" },
                    { img: b, name: "Barbell Row" },
                ],
            },
            "Day 5": {
                title: "Back Day - Zeyad",
                exercises: [
                    { img: h, name: "Pull Up" },
                    { img: b, name: "Barbell Row" },
                ],
            },
        },
        3: {
            "Day 1": {
                title: "Chest Day - Yossef",
                exercises: [
                    { img: a, name: "Incline Dumbbell" },
                    { img: c, name: "Decline Chest Press Machine" },
                ],
            },
            "Day 2": {
                title: "back Day - Yossef",
                exercises: [
                    { img: a, name: "Incline Dumbbell" },
                    { img: c, name: "Decline Chest Press Machine" },
                ],
            },
        },
        4: {
            "Day 1": {
                title: "Chest Day - Yossef",
                exercises: [
                    { img: a, name: "Incline Dumbbell" },
                    { img: c, name: "Decline Chest Press Machine" },
                ],
            },
            "Day 2": {
                title: "back Day - Yossef",
                exercises: [
                    { img: a, name: "Incline Dumbbell" },
                    { img: c, name: "Decline Chest Press Machine" },
                ],
            },
        },
        5: {
            "Day 1": {
                title: "Chest Day - Yossef",
                exercises: [
                    { img: a, name: "Incline Dumbbell" },
                    { img: c, name: "Decline Chest Press Machine" },
                ],
            },
            "Day 2": {
                title: "back Day - Yossef",
                exercises: [
                    { img: a, name: "Incline Dumbbell" },
                    { img: c, name: "Decline Chest Press Machine" },
                ],
            },
        },
        6: {
            "Day 1": {
                title: "Chest Day - Yossef",
                exercises: [
                    { img: a, name: "Incline Dumbbell" },
                    { img: c, name: "Decline Chest Press Machine" },
                ],
            },
            "Day 2": {
                title: "back Day - Yossef",
                exercises: [
                    { img: a, name: "Incline Dumbbell" },
                    { img: c, name: "Decline Chest Press Machine" },
                ],
            },
        },
        7: {
            "Day 1": {
                title: "Chest Day - Mohamed",
                exercises: [
                    { img: ph1, name: "Incline Dumbbell [3x12] " },
                    { img: ph2, name: "Dumbbell-Press [2x8-10]" },
                    { img: ph3, name: "Seated-Dumbbell-Lateral-Raise [3x12]" },
                    { img: ph4, name: "Chest-Dips [2x8]" },
                    { img: ph5, name: "Lever-Chest-Press [2x10]" },
                    { img: ph6, name: "Two-Arm-Cable-Front-Raise [2x10]" },
                    { img: ph7, name: "Cable-Crossover [3x8-12]" },
                    { img: ph8, name: "Barbell-Triceps-Extension [3x12]" },
                ],
            },
            "Day 2": {
                title: "Back Day - Mohamed",
                exercises: [
                    { img: ph9, name: "Seated-Cable-Row [3x12]" },
                    { img: ph10, name: "Lat-Pulldown [3x12]" },
                    { img: ph11, name: "Incline-Reverse-Grip-Dumbbell-Row [2x8-10]" },
                    { img: ph12, name: "V-bar-Lat-Pulldown [2x10]" },
                    { img: ph13, name: "Full-Range-Of-Motion-Lat-Pulldown [3x12]" },
                    { img: ph14, name: "Rear-Delt-Machine-Flys [2x8]" },
                    { img: ph15, name: "Seated-Incline-Dumbbell-Curl [2x8]" },
                    { img: ph16, name: "Lever-Preacher-Curl [3x10]" },
                ],
            },
            "Day 3":{
                title: "Leg Day - Mohamed",
                exercises: [
                    { img: ph17, name: "smith-machine-squat [3x12]" },
                    { img: ph18, name: "Lever-Single-Leg-Curl [2x10]" },
                    { img: ph19, name: "Leg-Pres [3x8]" },
                    { img: ph20, name: "Barbell-Romanian-Deadlift [2x10]" },
                    { img: ph21, name: "LEG-EXTENSION [2x10] " },
                    { img: ph22, name: "Leg-Press-Calf-Raise [3x12]" },
                    { img: ph23, name: "Cross-Crunch [4x20]" },
                    { img: ph24, name: "Seated-Bench-Leg-Pull [3x20]" },
                ]
            },
            "Day 4":{
                title: "Shoulder Day - Mohamed",
                exercises: [
                    { img: ph25, name: "Dumbbell-Shoulder-Press [3x12]" },
                    { img: ph26, name: "Seated-Dumbbell-Lateral-Raise [2x10]" },
                    { img: ph27, name: "Two-Arm-Cable-Front-Raise [3x8]" },
                    { img: ph28, name: "Rear-Delt-Machine-Flys [3x10]" },
                    { img: ph29, name: "Seated-Incline-Dumbbell-Curl [3x12]" },
                    { img: ph30, name: "Pushdown [2x10]" },
                    { img: ph31, name: "Barbell-Triceps-Extension [2x10]" },
                   
                    
                ]
            },
            "Day 5": {
                title: "Chest Day - Mohamed",
                exercises: [
                    { img: ph32, name: "Lying-Chest-Press-Machine [3x12] " },
                    { img: ph33, name: "Dumbbell-Shoulder-Press [2x12]" },
                    { img: ph5, name: "Lever-Chest-Press [3x12]" },
                    { img: ph7, name: "Cable-Crossover [2x10]" },
                    { img: ph4, name: "Dips [2x12]" },
                    { img: ph26, name: "Seated-Dumbbell-Lateral-Raise [2x8]" },
                    { img: ph38, name: "Cable-Rope-Overhead-Triceps-Extension [3x12]" },
           
               
                ],
            },
            "Day 6": {
                title: "Back Day - Mohamed",
                exercises: [
                    { img: ph10, name: "Lat-Pulldown [3x12]" },
                    { img: ph34, name: "Lever-Reverse-T-Bar-Row [2x8-10]" },
                    { img: ph35, name: "close-grip-cable-row [2x12]" },
                    { img: ph36, name: "Rope-Straight-Arm-Pulldown [3x10]" },
                    { img: ph37, name: "Full-Range-Of-Motion-Lat-Pulldown [2x10]" },
                    { img: ph15, name: "Seated-Incline-Dumbbell-Curl [2x10]" },
                    { img: ph16, name: "Lever-Preacher-Curl [2x12]" },
                    { img: ph39, name: "Lever-Shrug [3x12]" },
                ],
            },
        },
        8: {
            "Day 1": {
                title: "Chest Day - Mahmoud",
                exercises: [
                    { img: ph1, name: "Incline-Dumbbell-Press [3x12] " },
                    { img: ph2, name: "Dumbbell-Press [2x12]" },
                    { img: ph26, name: "Seated-Dumbbell-Lateral-Raise [3x12]" },
                    { img: e, name: "Dips [2x10]" },
                    { img: ph5, name: "Lever-Chest-Press [2x8-10]" },
                    { img: ph6, name: "Two-Arm-Cable-Front-Raise [2x12]" },
                    { img: ph7, name: "Cable-Crossover [3x10]" },
                    { img: ph8, name: "Barbell-Triceps-Extension [3x12]" },

                ],
            },
            "Day 2": {
                title: "Back Day - Mahmoud",
                exercises: [
                    { img: ph10, name: "Lat-Pulldown [3x12]" },
                    { img: ph35, name: "close-grip-cable-row [2x10]" },
                    { img: ph9, name: "Seated-Cable-Row [3x12]" },
                    { img: ph12, name: "V-bar-Lat-Pulldown [2x10]" },
                    { img: ph37, name: "Full-Range-Of-Motion-Lat-Pulldown [3x10]" },
                    { img: ph16, name: "Lever-Preacher-Curl [2x10]" },
                    { img: ph15, name: "Seated-Incline-Dumbbell-Curl [2x10]" },
                    { img: ph39, name: "Lever-Shrug [3x12]" },
                    ],
            },
            "Day 3":{
                title: "Leg Day - Mahmoud",
                exercises: [
                    { img: ph17, name: "smith-machine-squat [3x12]" },
                    { img: ph18, name: "Lever-Single-Leg-Curl [2x10]" },
                    { img: ph19, name: "Leg-Pres [3x8]" },
                    { img: ph20, name: "Barbell-Romanian-Deadlift [2x10]" },
                    { img: ph21, name: "LEG-EXTENSION [2x10] " },
                    { img: ph22, name: "Leg-Press-Calf-Raise [3x12]" },
                    { img: ph23, name: "Cross-Crunch [4x20]" },
                    { img: ph24, name: "Seated-Bench-Leg-Pull [3x20]" },
                ]
               
            },
            "Day 4":{
                title: "Shoulder Day - Mahmoud",
                exercises: [
                    { img: ph25, name: "Dumbbell-Shoulder-Press [3x12]" },
                    { img: ph26, name: "Seated-Dumbbell-Lateral-Raise [2x10]" },
                    { img: ph27, name: "Two-Arm-Cable-Front-Raise [2x10]" },
                    { img: ph28, name: "Rear-Delt-Machine-Flys [3x10]" },
                    { img: ph29, name: "Seated-Incline-Dumbbell-Curl [2x10]" },
                    { img: ph30, name: "Pushdown [2x12]" },
                    { img: ph31, name: "Barbell-Triceps-Extension [2x12]" },
                   
                    
                ]
            },
            "Day 5": {
                title: "Chest Day - Mahmoud",
                exercises: [
                    { img: ph40, name: "Barbell-Bench-Press [3x12] " },
                    { img: ph1, name: "Incline-Dumbbell-Press [3x12]" },
                    { img: ph7, name: "Cable-Crossover [2x12]" },
                    { img: ph4, name: "Dips [2x10]" },
                    { img: ph26, name: "Seated-Dumbbell-Lateral-Raise [2x12] " },
                    { img: ph31, name: "Barbell-Triceps-Extension [2x8]" },
                    { img: ph38, name: "Cable-Rope-Overhead-Triceps-Extension [2x12]" },
                    { img: ph42, name: "Kneeling-Cable-Crunch" },
                    { img: ph24, name: "Seated-Bench-Leg-Pull-in" },
                    
                   
                   
                 
               
                ],
            },
            "Day 6": {
                title: "Back Day - Mahmoud",
                exercises: [
                    { img: ph9, name: "Seated-Cable-Row [3x12]" },
                    { img: ph35, name: "close-grip-cable-row [2x12]" },
                    { img: ph10, name: "Lat-Pulldown [3x10]" },
                    { img: ph36, name: "Rope-Straight-Arm-Pulldown [3x10]" },
                    { img: ph41, name: "Dumbbell-Shrug [3x10]" },
                  
                    { img: ph15, name: "Seated-Incline-Dumbbell-Curl [2x15]" },
                    
                  
                    { img: ph16, name: "Lever-Preacher-Curl [2x6-8]" },
                ],
            },
        },
    };

    const currentWorkout = workoutPlans[currentUser.id]?.[day] || workoutPlans[currentUser.id]?.["Day 1"];

    if (!currentWorkout) {
        console.error("Workout not found for:", {
            userId: currentUser.id,
            day,
            availableWorkouts: workoutPlans[currentUser.id],
        });
        return <div>Workout not found. Please check your selection.</div>;
    }

    return <>
      <Helmet>
                <title>Exercise</title>
                <link rel="shortcut icon" href={dumbel} type="image/x-icon" />
            </Helmet>

        <div className="p-4 font-light container mx-auto">
            <h1 className="text-4xl md:text-5xl text-white font-bold text-center mb-8 animate-pulse-glow">
                {currentWorkout.title || "No Title Available"}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {currentWorkout.exercises?.map((exercise, index) => (
                    <div key={index} className="flex flex-col items-center rounded-lg p-4 transition-all">
                        <div className="w-full aspect-square overflow-hidden rounded-lg">
                            <img
                                src={exercise.img}
                                alt={exercise.name}
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <h2 className="text-white text-lg font-medium text-center mt-4">
                            {exercise.name}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
   </>
}








