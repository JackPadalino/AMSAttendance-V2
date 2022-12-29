const {
    db,
    User,
    Class,
    UserClass,
    Day,
    Absence,
    Coverage,
    Message
} = require('./');

const seed = async () => {
    console.log("STARTING DB SEED...");
    await db.sync({ force: true });

    //-------------create all users here-------------//
    const userList = [
        {
            firstName: 'Cortez',
            lastName: 'Wiza',
            email: 'Cortez.Wiza@hotmail.com',
            phoneNumber: '+14137616415'
        },
        {
            firstName: 'Alexzander',
            lastName: "O'Connell",
            email: 'Alexzander2@gmail.com',
            phoneNumber: '+15248333600'
        },
        {
            firstName: 'Dixie',
            lastName: 'Huel',
            email: 'Dixie_Huel@hotmail.com',
            phoneNumber: '+10793376154'
        },
        {
            firstName: 'Bianka',
            lastName: 'Robel',
            email: 'Bianka_Robel55@hotmail.com',
            phoneNumber: '+11264889993'
        },
        {
            firstName: 'Daren',
            lastName: 'Zieme',
            email: 'Daren80@yahoo.com',
            phoneNumber: '+11931469600'
        },
        {
            firstName: 'Jamie',
            lastName: 'Ryan',
            email: 'Jamie_Ryan@yahoo.com',
            phoneNumber: '+12771304402'
        },
        {
            firstName: 'Rudy',
            lastName: 'Moore',
            email: 'Rudy17@hotmail.com',
            phoneNumber: '+15336512135'
        },
        {
            firstName: 'Alicia',
            lastName: 'West',
            email: 'Alicia_West75@yahoo.com',
            phoneNumber: '+19168271342'
        },
        {
            firstName: 'Pasquale',
            lastName: 'Kris',
            email: 'Pasquale_Kris@gmail.com',
            phoneNumber: '+13715797956'
        },
        {
            firstName: 'Deborah',
            lastName: 'Hodkiewicz',
            email: 'Deborah97@yahoo.com',
            phoneNumber: '+12659173106'
        },
        {
            firstName: 'Jack',
            lastName: 'Padalino',
            email: 'pada0867@gmail.com',
            phoneNumber: '+15858804798'
        },
        {
            firstName: 'Madelyn',
            lastName: 'Padalino',
            email: 'mpadalino@gmail.com',
            phoneNumber: '+15854025949'
        },
        {
            firstName: 'Reggie',
            lastName: 'Scott',
            email: 'RScott@amsbronx.org',
            phoneNumber: '+15858804745',
            username:'rscott',
            password:'1595Bathgate',
            role:'admin'
        }
    ];

    const [
        CortezWiza,
        AlexzanderOConnell,
        DixieHuel,
        BiankaRobel,
        DarenZieme,
        JamieRyan,
        RudyMoore,
        AliciaWest,
        PasqualeKris,
        DeborahHodkiewicz,
        JackPadalino,
        MadelynPadalino,
        ReggieScott
    ] = await Promise.all(userList.map((user) => User.create(user)));

    //-------------create all classes here-------------//
    const classesList = [
        // All 9th grade classes
        {name:"Global  9",isFreePeriod:false,period:1},
        {name:"Algebra II  9",isFreePeriod:false,period:3},
        {name:"Physics  9",isFreePeriod:false,period:6},
        {name:"Algebra II  9",isFreePeriod:false,period:6},
        {name:"Global  9",isFreePeriod:false,period:7},
        // All 10th grade classes
        {name:"Global  10",isFreePeriod:false,period:1},
        {name:"Living Environment  10",isFreePeriod:false,period:1},
        {name:"Global  10",isFreePeriod:false,period:2},
        {name:"Health 10",isFreePeriod:false,period:4},
        {name:"Painting 10",isFreePeriod:false,period:4},
        {name:"Global 10",isFreePeriod:false,period:6},
        {name:"ELA 10",isFreePeriod:false,period:6},
        {name:"Global 10",isFreePeriod:false,period:7},
        {name:"ELA 10",isFreePeriod:false,period:7},
        // All 11th grade classes
        {name:"ELA 11",isFreePeriod:false,period:1},
        {name:"AP CSP 11",isFreePeriod:false,period:1},
        {name:"ELA 11",isFreePeriod:false,period:3},
        {name:"Earth Science 11",isFreePeriod:false,period:3},
        {name:"US History 11",isFreePeriod:false,period:3},
        {name:"ELA 11",isFreePeriod:false,period:6},
        {name:"Pre Calculus 11",isFreePeriod:false,period:6},
        {name:"AP CSP 11",isFreePeriod:false,period:6},
        {name:"US History 11",isFreePeriod:false,period:7},
        {name:"Earth Science 11",isFreePeriod:false,period:7},
        // All 12th grade classes
        {name:"Mythology 12",isFreePeriod:false,period:1},
        {name:"Econ & Gov 12",isFreePeriod:false,period:1},
        {name:"Tech Careers 12",isFreePeriod:false,period:2},
        {name:"Econ & Gov 12",isFreePeriod:false,period:4},
        {name:"AP Calculus 12",isFreePeriod:false,period:4},
        {name:"Econ & Gov 12",isFreePeriod:false,period:7},
        {name:"AP Statistics 12",isFreePeriod:false,period:7},
        // All prep periods
        {name:"Prep",isFreePeriod:true,period:1},
        {name:"Prep",isFreePeriod:true,period:2},
        {name:"Prep",isFreePeriod:true,period:3},
        {name:"Prep",isFreePeriod:true,period:4},
        {name:"Prep",isFreePeriod:true,period:6},
        {name:"Prep",isFreePeriod:true,period:7},
        // Lunch period
        {name:"Lunch",isFreePeriod:true,period:5},
    ];

    const [
        // All 9th grade classes
        Global_9_P1,
        Algebra_9_P3,
        Physics_9_P6,
        Algebra_9_P6,
        Global_9_P7,
        // All 10th grade classes
        Global_10_P1,
        LivingEnv_10_P1,
        Global_10_P2,
        Health_10_P4,
        Painting_10_P4,
        Global_10_P6,
        ELA_10_P6,
        Global_10_P7,
        ELA_10_P7,
        // All 11th grade classes
        ELA_11_P1,
        APCSP_11_P1,
        ELA_11_P3,
        EarthSci_11_P3,
        USHist_11_P3,
        ELA_11_P6,
        PreCalc_11_P6,
        APCSP_11_P6,
        USHist_11_P7,
        EarthSci_11_P7,
        // All 12th grade classes
        Mythology_12_P1,
        EconGov_12_P1,
        TechCareers_12_P2,
        EconGov_12_P4,
        APCalc_12_P4,
        EconGov_12_P7,
        APStats_12_P7,
        // All prep periods
        Prep_P1,
        Prep_P2,
        Prep_P3,
        Prep_P4,
        Prep_P6,
        Prep_P7,
        // Lunch
        Lunch
    ] = await Promise.all(classesList.map((eachClass) => Class.create(eachClass)));
    
    //-------------create all schedules here-------------//
    const schedulesList = [
        // CortezWiza
        {userId:CortezWiza.id,classId:ELA_11_P1.id},
        {userId:CortezWiza.id,classId:Prep_P2.id},
        {userId:CortezWiza.id,classId:Prep_P3.id},
        {userId:CortezWiza.id,classId:Prep_P4.id},
        {userId:CortezWiza.id,classId:Lunch.id},
        {userId:CortezWiza.id,classId:ELA_11_P6.id},
        {userId:CortezWiza.id,classId:USHist_11_P7.id},

        // AlexzanderOConnell
        {userId:AlexzanderOConnell.id,classId:Prep_P1.id},
        {userId:AlexzanderOConnell.id,classId:Global_10_P2.id},
        {userId:AlexzanderOConnell.id,classId:Prep_P3.id},
        {userId:AlexzanderOConnell.id,classId:Health_10_P4.id},
        {userId:AlexzanderOConnell.id,classId:Lunch.id},
        {userId:AlexzanderOConnell.id,classId:Global_10_P6.id},
        {userId:AlexzanderOConnell.id,classId:Global_10_P7.id},

        // DixieHuel
        {userId:DixieHuel.id,classId:Global_10_P1.id},
        {userId:DixieHuel.id,classId:Prep_P2.id},
        {userId:DixieHuel.id,classId:USHist_11_P3.id},
        {userId:DixieHuel.id,classId:Prep_P4.id},
        {userId:DixieHuel.id,classId:Lunch.id},
        {userId:DixieHuel.id,classId:Prep_P6.id},
        {userId:DixieHuel.id,classId:USHist_11_P7.id},

        // BiankaRobel
        {userId:BiankaRobel.id,classId:Prep_P1.id},
        {userId:BiankaRobel.id,classId:Prep_P2.id},
        {userId:BiankaRobel.id,classId:Prep_P3.id},
        {userId:BiankaRobel.id,classId:APCalc_12_P4.id},
        {userId:BiankaRobel.id,classId:Lunch.id},
        {userId:BiankaRobel.id,classId:PreCalc_11_P6.id},
        {userId:BiankaRobel.id,classId:Prep_P7.id},

        // DarenZieme
        {userId:DarenZieme.id,classId:EconGov_12_P1.id},
        {userId:DarenZieme.id,classId:Prep_P2.id},
        {userId:DarenZieme.id,classId:Prep_P3.id},
        {userId:DarenZieme.id,classId:EconGov_12_P4.id},
        {userId:DarenZieme.id,classId:Lunch.id},
        {userId:DarenZieme.id,classId:Prep_P6.id},
        {userId:DarenZieme.id,classId:EconGov_12_P7.id},

        // JamieRyan
        {userId:JamieRyan.id,classId:Mythology_12_P1.id},
        {userId:JamieRyan.id,classId:Prep_P2.id},
        {userId:JamieRyan.id,classId:Prep_P3.id},
        {userId:JamieRyan.id,classId:Prep_P4.id},
        {userId:JamieRyan.id,classId:Lunch.id},
        {userId:JamieRyan.id,classId:ELA_10_P6.id},
        {userId:JamieRyan.id,classId:ELA_10_P7.id},

        // RudyMoore
        {userId:RudyMoore.id,classId:ELA_11_P1.id},
        {userId:RudyMoore.id,classId:Prep_P2.id},
        {userId:RudyMoore.id,classId:ELA_11_P3.id},
        {userId:RudyMoore.id,classId:Prep_P4.id},
        {userId:RudyMoore.id,classId:Lunch.id},
        {userId:RudyMoore.id,classId:ELA_10_P6.id},
        {userId:RudyMoore.id,classId:Prep_P7.id},

        // AliciaWest
        {userId:AliciaWest.id,classId:APCSP_11_P1.id},
        {userId:AliciaWest.id,classId:TechCareers_12_P2.id},
        {userId:AliciaWest.id,classId:Prep_P3.id},
        {userId:AliciaWest.id,classId:Prep_P4.id},
        {userId:AliciaWest.id,classId:Lunch.id},
        {userId:AliciaWest.id,classId:Prep_P6.id},
        {userId:AliciaWest.id,classId:Prep_P7.id},

        // PasqualeKris
        {userId:PasqualeKris.id,classId:APCSP_11_P1.id},
        {userId:PasqualeKris.id,classId:Prep_P2.id},
        {userId:PasqualeKris.id,classId:Prep_P3.id},
        {userId:PasqualeKris.id,classId:Prep_P4.id},
        {userId:PasqualeKris.id,classId:Lunch.id},
        {userId:PasqualeKris.id,classId:APCSP_11_P6.id},
        {userId:PasqualeKris.id,classId:Physics_9_P6.id},

        // DeborahHodkiewicz
        {userId:DeborahHodkiewicz.id,classId:Global_9_P1.id},
        {userId:DeborahHodkiewicz.id,classId:Prep_P2.id},
        {userId:DeborahHodkiewicz.id,classId:Prep_P3.id},
        {userId:DeborahHodkiewicz.id,classId:Painting_10_P4.id},
        {userId:DeborahHodkiewicz.id,classId:Lunch.id},
        {userId:DeborahHodkiewicz.id,classId:Prep_P6.id},
        {userId:DeborahHodkiewicz.id,classId:Global_9_P7.id},

        // JackPadalino
        {userId:JackPadalino.id,classId:Prep_P1.id},
        {userId:JackPadalino.id,classId:Prep_P2.id},
        {userId:JackPadalino.id,classId:Algebra_9_P3.id},
        {userId:JackPadalino.id,classId:Prep_P4.id},
        {userId:JackPadalino.id,classId:Lunch.id},
        {userId:JackPadalino.id,classId:Algebra_9_P6.id},
        {userId:JackPadalino.id,classId:APStats_12_P7.id},

        // MadelynPadalino
        {userId:MadelynPadalino.id,classId:LivingEnv_10_P1.id},
        {userId:MadelynPadalino.id,classId:Prep_P2.id},
        {userId:MadelynPadalino.id,classId:EarthSci_11_P3.id},
        {userId:MadelynPadalino.id,classId:Prep_P4.id},
        {userId:MadelynPadalino.id,classId:Lunch.id},
        {userId:MadelynPadalino.id,classId:Prep_P6.id},
        {userId:MadelynPadalino.id,classId:EarthSci_11_P7.id},

        // ReggieScott

    ];

    await Promise.all(schedulesList.map((schedule) => UserClass.create(schedule)));

    //-------------create all days here-------------//
    const dayList = [
        {date:'2022-12-16'},
        {date:'2022-12-19'},
        {date:'2022-12-20'},
        {date:'2022-12-21'},
        {date:'2022-12-22'},
        {date:'2022-12-23'}
    ];

    const [
        December162022,
        December192022,
        December202022,
        December212022,
        December222022,
        December232022,
    ] = await Promise.all(dayList.map((day) => Day.create(day)));

    //-------------create all asbences here-------------//
    const absenceList = [
        // December 16 2022 absences
        {userId:CortezWiza.id,dayId:December162022.id},
        {userId:AlexzanderOConnell.id,dayId:December162022.id},
        // December 19 2022 absences
        {userId:DixieHuel.id,dayId:December192022.id},
        // December 20 2022 absences
        {userId:BiankaRobel.id,dayId:December202022.id},
        {userId:DarenZieme.id,dayId:December202022.id},
        // December 21 2022 absences
        {userId:JamieRyan.id,dayId:December212022.id},
    ];

    await Promise.all(absenceList.map((absence) => Absence.create(absence)));

    console.log("DB SEED COMPLETE.");

};
  
seed();