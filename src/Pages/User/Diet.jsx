import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import dumbel from '../../assets/dumbbell-gym-svgrepo-com.svg';

export default function Diet() {
   
    
    const { month } = useParams();
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
    const dietPlans = {
        1: {
            "December": {
                title: "Balanced Diet - January",
                meals: [
                    { name: "Breakfast", description: "Oatmeal with fruits" },
                    { name: "Lunch", description: "Grilled chicken with vegetables" },
                    { name: "Dinner", description: "Salmon with quinoa" },
                ],
            },
           
        },
        2: {
            "December": {
                title: "Balanced Diet - December",
                meals: [
                    { name: "الفطار ", description:`بطاطس مسلوقة
gram 100+جبنه قريشgram 200
+بيضة كاملة مسلوقه2
معلقه زبده فول سوداني او مكسرات (اختياري)`},
{ name:"بعد الفطار بساعتين", description: `رز مسلوق مطبوخ100g+طبق سلطه(100g)` },

                                            { name: "الغداء", description: `اي بروتين (150g) +رز250جرام` },
                                            { name: "قبل التمرين ب ساعه ونص", description: `رز150g` },
                                            { name: "العشاء", description: `بطاطس مسلوقة
gram 100+جبنه قريشgram 200
+بيضة كاملة مسلوقه2
معلقه زبده فول سوداني او مكسرات (اختياري)` },
                ],
            },
         
        },
        
        5: {
            "December": {
                title: "Balanced Diet - December",
                meals: [
                    { name: "الفطار ", description: `3بيض+بطاطس مسلوقه ٢٠٠`},
{ name:"  بعد الفطار بساعتين ونص", description: `١٥٠بانيه ٢٠٠رزمسلوق` },

                                            { name: "الغداء", description: `١٥٠جرام بروتين+١٥٠رز مسلوق` },
                                            { name: "قبل التمرين ب ساعه ونص", description: `رز100g` },
                                            { name: "العشاء", description: `3بيض +بطاطس٢٠٠جرام ١٥٠جرام جبنه قريش` },
                ],
            },
         
        },
        
        6: {
            "December": {
                title: "Balanced Diet - December",
                meals: [
                    { name: "الفطار ", description:`بطاطس مسلوقة
gram 100+جبنه قريشgram 200
+بيضة كاملة مسلوقه2
معلقه زبده فول سوداني او مكسرات (اختياري)`},
{ name:"بعد الفطار بساعتين", description: `رز مسلوق مطبوخ100g+طبق سلطه(100g)` },

                                            { name: "الغداء", description: `اي بروتين (150g) +رز250جرام` },
                                            { name: "قبل التمرين ب ساعه ونص", description: `رز150g` },
                                            { name: "العشاء", description: `بطاطس مسلوقة
gram 100+جبنه قريشgram 200
+بيضة كاملة مسلوقه2
معلقه زبده فول سوداني او مكسرات (اختياري)` },
                ],
            },
         
        },
        
        
        7: {
            "December": {
                title: "Balanced Diet - December",
                meals: [
                    { name: "الفطار ", description:`بطاطس مسلوقة
gram 100+جبنه قريشgram 200+بيضة كاملة مسلوقه2
معلقه زبده فول سوداني (اختياري)`},
                    { name:"بعد الفطار ب3ساعات", description: `رز مسلوق مطبوخ200g+ يفضل بطاطا بدل الرز+سلطه(100g)` },
                    { name: "الغداء", description: `اي بروتين (150g) +رز200g` },
                    { name: "قبل التمرين ب ساعه ونص", description: `رز150g` },
                    { name: "العشاء", description: `جبنه قريشgram 200
+بيضة كاملة مسلوقه2
معلقه زبده فول سوداني او مكسرات (اختياري)` },
                   
                ],
            },
            
        },
        8: {
            "December": {
                title: "Balanced Diet - December",
                meals: [
                    { name: "الفطار ", description:`بطاطس مسلوقة
gram 100+جبنه قريشgram 200
+بيضة كاملة مسلوقه2
معلقه زبده فول سوداني او مكسرات (اختياري)`},
                    { name:"بعد الفطار بساعتين", description: `رز مسلوق مطبوخ100g+طبق سلطه(100g)` },
                    { name: "الغداء", description: `اي بروتين (150g) +رز150g` },
                    { name: "قبل التمرين ب ساعه ونص", description: `رز150g` },
                    { name: "العشاء", description: `جبنه قريشgram 200
+بيضة كاملة مسلوقه2
معلقه زبده فول سوداني او مكسرات (اختياري)` },
                   
                ],
            },
            
        },
        9: {
            "December": {
                title: "Balanced Diet - December",
                meals: [
                    { name: "الفطار ", description:`بطاطس مسلوقة
gram 100+جبنه قريشgram 200+بيضة كاملة مسلوقه2
معلقه زبده فول سوداني (اختياري)`},
                    { name:"بعد الفطار ب3ساعات", description: `رز مسلوق مطبوخ200g+ يفضل بطاطا بدل الرز+سلطه(100g)` },
                    { name: "الغداء", description: `اي بروتين (150g) +رز200g` },
                    { name: "قبل التمرين ب ساعه ونص", description: `رز150g` },
                    { name: "العشاء", description: `جبنه قريشgram 200
+بيضة كاملة مسلوقه2
معلقه زبده فول سوداني او مكسرات (اختياري)` },
                   
                ],
            },
            
        },
        
    };

    const currentDietPlan = dietPlans[currentUser.id]?.[month] || dietPlans[currentUser.id]?.["January"];

    if (!currentDietPlan) {
        console.error("Diet plan not found for:", {
            userId: currentUser.id,
            month,
            availableDiets: dietPlans[currentUser.id],
        });
        return <div className='text-white'>Diet plan not found. Please check your selection.</div>;
    }

    return <>
        <Helmet>
        <title>Diet</title>
        <link rel="shortcut icon" href={dumbel} type="image/x-icon" />
    </Helmet>

        <div   className="p-4 font-light container mx-auto">
            <h1 className="text-4xl md:text-5xl text-white font-bold text-center mb-8 animate-pulse-glow">
                {currentDietPlan.title || "No Title Available"}
            </h1>
            <div dir='rtl' className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {currentDietPlan.meals?.map((meal, index) => (
                    <div key={index} className="flex flex-col items-center rounded-lg p-4 transition-all">
                        <h2 className="text-white text-lg  font-medium text-center mt-4">
                            {meal.name}
                        </h2>
                        <p className="text-white  text-center">{meal.description}</p>
                       
                    </div>
                   
                ))}
               
            </div>
           
                            <div className="flex flex-col items-center justify-center mt-20 text-white text-center">
  
  <span className="relative font-bold text-4xl animate-pulse-glow mb-4">
    تعليمات
  </span>
  
  
  <p className="max-w-md text-lg leading-7">
    مصادر الكارب المتاحه انك تأكل منها 
    (بطاطا +بطاطس+ توست اسمر +رز +عدس +مكرونه) <br />
    مصادر البروتين 
    (سمك +فراخ +لحمه) <br />
    شبه نباتي
    (بيض +فول+حمص+ترمس+عدس+زبادي يوناني ) <br />
    مصادر الدهون الصاحيه
    (مكسرات +بذور الشيا+زبده الفول السوداني صفار البيض +شكولاته غامقه+زيت زيتون )
  </p>
  <hr className="w-12 border-t-2 border-white my-4" />
  <p className="max-w-md text-lg leading-7">
  لو في اي اكل مش حابب تاكلو بدلو ب اللي مكتوب بس نفس الكمية مع مراعات السعرات الحرارية لي كل وجبه
  </p>
</div>
        </div>
    
    </>
}