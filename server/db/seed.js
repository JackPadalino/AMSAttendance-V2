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
        // create 10 HS teachers here
        {
            firstName: 'Jack',
            lastName: 'Padalino',
            email: 'J.Padalino@hotmail.com',
            phoneNumber: '+15858804798'
        },
        {
            firstName: 'Teah',
            lastName: "Watson",
            email: 'T.Watson@gmail.com',
            phoneNumber: '+15248333600'
        },
        {
            firstName: 'James',
            lastName: 'Quinn',
            email: 'j.Quinn@hotmail.com',
            phoneNumber: '+15248333601'
        },
        {
            firstName: 'Bismarck',
            lastName: 'Oppong',
            email: 'B.Oppong@hotmail.com',
            phoneNumber: '+15248333603'
        },
        {
            firstName: 'Ross',
            lastName: 'Chodan',
            email: 'R.Romain@yahoo.com',
            phoneNumber: '+15248333604'
        },
        {
            firstName: 'Jasmine',
            lastName: 'Carksy',
            email: 'J.Carsky@yahoo.com',
            phoneNumber: '+15248333605'
        },
        {
            firstName: 'Kelly',
            lastName: 'Mobley',
            email: 'K.Mobley@hotmail.com',
            phoneNumber: '+15248333606'
        },
        {
            firstName: 'Lisa',
            lastName: 'Lyons',
            email: 'Alicia_West75@yahoo.com',
            phoneNumber: '+15248333607'
        },
        {
            firstName: 'Michelle',
            lastName: 'Stover',
            email: 'M.Stover@gmail.com',
            phoneNumber: '+15248333608'
        },
        {
            firstName: 'Asatou',
            lastName: 'Sohna',
            email: 'A.Sohna@yahoo.com',
            phoneNumber: '+15248333609'
        },
        // create 10 MS teachers here
        {
            firstName: 'Chaka',
            lastName: 'Baker',
            email: 'C.Baker@gmail.com',
            phoneNumber: '+15248333610'
        },
        {
            firstName: 'Joe',
            lastName: 'Suppo',
            email: 'J.Suppo@gmail.com',
            phoneNumber: '+15248333611'
        },
        {
            firstName: 'Matt',
            lastName: 'Schoonmaker',
            email: 'M.Suppo@gmail.com',
            phoneNumber: '+15248333612'
        },
        {
            firstName: 'Melvin',
            lastName: 'Rosado',
            email: 'M.Rosado@gmail.com',
            phoneNumber: '+15248333613'
        },
        {
            firstName: 'Chikudi',
            lastName: 'Richardson',
            email: 'C.Richardson@gmail.com',
            phoneNumber: '+15248333614'
        },
        {
            firstName: 'Shira',
            lastName: 'Collada',
            email: 'S.Collado@gmail.com',
            phoneNumber: '+15248333615'
        },
        {
            firstName: 'Virginia',
            lastName: 'Ford',
            email: 'V.Ford@gmail.com',
            phoneNumber: '+15248333616'
        },
        {
            firstName: 'Rita',
            lastName: 'Reinoso',
            email: 'R.Reinoso@gmail.com',
            phoneNumber: '+15248333617'
        },
        {
            firstName: 'Lena',
            lastName: 'Pagoulatos',
            email: 'L.Pagoulatos@gmail.com',
            phoneNumber: '+15248333618'
        },
        {
            firstName: 'Melissa',
            lastName: 'Alvarez',
            email: 'M.Alvarez@gmail.com',
            phoneNumber: '+15248333619'
        },
        // create Admin users here
        {
            firstName: 'Reggie',
            lastName: 'Scott',
            email: 'R.Scott@amsbronx.org',
            phoneNumber: '+15248333620',
            username:'RScott',
            password:'1595Bathgate',
            role:'admin'
        },
        {
            firstName: 'Ingrid',
            lastName: 'Chung',
            email: 'I.Chung@amsbronx.org',
            phoneNumber: '+15248333621',
            username:'IChung',
            password:'1595Bathgate',
            role:'admin'
        },
    ];

    const [
        // HS teachers
        JackPadalino,
        TeahWatson,
        JamesQuinn,
        BismarckOppong,
        RossChodan,
        JasmineCarsky,
        KellyMobley,
        LisaLyons,
        MichelleStover,
        AsatouSohna,
        // MS teachers
        ChakaBaker,
        JoeSuppo,
        MattSchoonmaker,
        MelvinRosado,
        ChikudiRichardson,
        ShiraCollado,
        VirginiaFord,
        RitaReinoso,
        LenaPagoulatos,
        MelissaAlvarez,
        // Admin
        ReggieScott,
        IngridChung
    ] = await Promise.all(userList.map((user) => User.create(user)));

    // //-------------create all classes here-------------//
    const classesList = [
        //~~~~~HS classes~~~~~//
        // 9th grade classes
        {name:'Global History',school:'HS',period:1,letterDays:['A','B','C','D','E','F']},
        {name:'ELA',school:'HS',period:3,letterDays:['A','B','C','D','E','F']},
        {name:'Oppong Advisory',school:'HS',period:4,letterDays:['B','E']},
        {name:'Art Fundamentals',school:'HS',period:4,letterDays:['A','C','D','F']},
        {name:'Rosado Advisory',school:'HS',period:4,letterDays:['B','E']},
        {name:'ELA',school:'HS',period:6,letterDays:['A','B','C','D','E','F']},
        {name:'Global History',school:'HS',period:7,letterDays:['A','B','C','D','E','F']},
        {name:'Physics',school:'HS',period:7,letterDays:['A','B','C','D','E','F']},
        // 10th grade classes
        {name:'Living Environment',school:'HS',period:1,letterDays:['A','B','C','D','E','F']},
        {name:'ELA',school:'HS',period:2,letterDays:['A','B','C','D','E','F']},
        {name:'Sohna Advisory',school:'HS',period:3,letterDays:['A','D']},
        {name:'Intro. to CS1',school:'HS',period:3,letterDays:['B','C','E','F']},
        {name:'Intro. to CS2',school:'HS',period:3,letterDays:['B','C','E','F']},
        {name:'Painting',school:'HS',period:4,letterDays:['A','C','E',]},
        {name:'Living Environment',school:'HS',period:6,letterDays:['A','B','C','D','E','F']},
        {name:'Living Environment',school:'HS',period:7,letterDays:['A','B','C','D','E','F']},
        // 11th grade classes
        {name:'AP Computer Science Principles',school:'HS',period:1,letterDays:['A','B','C','D','E','F']},
        {name:'ELA',school:'HS',period:1,letterDays:['A','B','C','D','E','F']},
        {name:'US History',school:'HS',period:1,letterDays:['A','B','C','D','E','F']},
        {name:'Tech Careers',school:'HS',period:2,letterDays:['A','B',,'D','E']},
        {name:'Lyons Advisory',school:'HS',period:2,letterDays:['A','D']},
        {name:'Photography',school:'HS',period:2,letterDays:['C','F']},
        {name:'US History',school:'HS',period:3,letterDays:['A','B','C','D','E','F']},
        {name:'ELA',school:'HS',period:3,letterDays:['A','B','C','D','E','F']},
        {name:'Painting',school:'HS',period:4,letterDays:['B','D','F']},
        {name:'US History',school:'HS',period:7,letterDays:['A','B','C','D','E','F']},
        {name:'ELA',school:'HS',period:7,letterDays:['A','B','C','D','E','F']},
        // 12th grade classes
        {name:'Econ. & Gov.',school:'HS',period:1,letterDays:['A','B','C','D','E','F']},
        {name:'Photography',school:'HS',period:2,letterDays:['B','E']},
        {name:'Padalino advisory',school:'HS',period:2,letterDays:['C','F']},
        {name:'Carsky advisory',school:'HS',period:2,letterDays:['C','F']},
        {name:'Watson advisory',school:'HS',period:2,letterDays:['C','F']},
        {name:'Econ. & Gov.',school:'HS',period:4,letterDays:['A','B','C','D','E','F']},
        {name:'AP Computer Science Principles',school:'HS',period:6,letterDays:['A','B','C','D','E','F']},
        {name:'Econ. & Gov.',school:'HS',period:7,letterDays:['A','B','C','D','E','F']},
        
        //~~~~~MS classes~~~~~//
        // 6th grade classes
        {name:'Math 6.3',school:'MS',period:1,letterDays:['A','B','C','D','E','F']},
        {name:'Humanities 6.5',school:'MS',period:1,letterDays:['A','B','C','D','E','F']},
        {name:'Humanities 6.3',school:'MS',period:1,letterDays:['A','B','C','D','E','F']},
        {name:'Ford Advisory',school:'MS',period:2,letterDays:['A','C','E']},
        {name:'Richardson Advisory',school:'MS',period:2,letterDays:['A','C','E']},
        {name:'Collado Advisory',school:'MS',period:2,letterDays:['A','C','E']},
        {name:'AIR 6.4',school:'MS',period:2,letterDays:['B','D','F']},
        {name:'AIR 6.3',school:'MS',period:2,letterDays:['B','D','F']},
        {name:'AIR 6.2',school:'MS',period:2,letterDays:['B','D','F']},
        {name:'Math Skills 6.1',school:'MS',period:3,letterDays:['B','D','F']},
        {name:'Math 6.5',school:'MS',period:3,letterDays:['B','D','F']},
        {name:'Math 6.5',school:'MS',period:4,letterDays:['A','B','C','D','E','F']},
        {name:'Humanities 6.3',school:'MS',period:4,letterDays:['A','B','C','D','E','F']},
        {name:'Humanities 6.4',school:'MS',period:4,letterDays:['A','B','C','D','E','F']},
        {name:'Math 6.2',school:'MS',period:6,letterDays:['A','B','C','D','E','F']},
        // 7th grade classes
        {name:'Humanities 7.2',school:'MS',period:1,letterDays:['B','D','F']},
        {name:'Humanities 7.3',school:'MS',period:1,letterDays:['A','B','C','D','E','F']},
        {name:'Reinoso advisory',school:'MS',period:2,letterDays:['B','D','F']},
        {name:'Alvarez advisory',school:'MS',period:2,letterDays:['B','D','F']},
        {name:'Math 7.4',school:'MS',period:1,letterDays:['A','B','C','D','E','F']},
        {name:'Math 7.3',school:'MS',period:1,letterDays:['A','B','C','D','E','F']},
        {name:'Math 7.3',school:'MS',period:3,letterDays:['B','D','F']},
        {name:'Math skills',school:'MS',period:3,letterDays:['A','C','E']},
        {name:'Math 7.1',school:'MS',period:4,letterDays:['A','B','C','D','E','F']},
        {name:'Math 7.2',school:'MS',period:4,letterDays:['A','B','C','D','E','F']},
        {name:'Humanities 7.4',school:'MS',period:4,letterDays:['A','B','C','D','E','F']},
        // 8th grade classes
        {name:'Humanities 8.1',school:'MS',period:1,letterDays:['A','B','C','D','E','F']},
        {name:'Suppo Advisory',school:'MS',period:2,letterDays:['A','C','E']},
        {name:'Baker Advisory',school:'MS',period:2,letterDays:['A','C','E']},
        {name:'Schoonmaker Advisory',school:'MS',period:2,letterDays:['A','C','E']},
        {name:'Pagoulatos Advisory',school:'MS',period:2,letterDays:['A','C','E']},
        {name:'Mindfullness',school:'MS',period:2,letterDays:['B','D','F']},
        {name:'Science 8.1',school:'MS',period:4,letterDays:['A','B','C','D','E','F']},
        {name:'Science 8.2',school:'MS',period:4,letterDays:['A','B','C','D','E','F']},
        {name:'Humanities 8.3',school:'MS',period:4,letterDays:['A','B','C','D','E','F']},
        {name:'Spanish 1',school:'MS',period:6,letterDays:['C','F']},
        {name:'Spanish 2',school:'MS',period:6,letterDays:['C','F']},
    ];

    const [
        // 9th grade classes
        GlobalHistory_G9P1,
        ELA_G9P3,
        OppongAdvisory_G9P4,
        ArtFundamentals_G9P4,
        RosadoAdvisory_G9P4,
        ELA_G9P6,
        GlobalHistory_G9P7,
        Physics_G9P7,
        // 10th grade classes
        LivingEnvironment_G10P1,
        ELA_G10P2,
        SohnaAdvisory_G10P3,
        IntroCS1_G10P3,
        IntroCS2_G10P3,
        Painting_G10P4,
        LivingEnvironment_G10P6,
        LivingEnvironment_G10P7,
        // 11th grade classes
        APCSP_G11P1,
        ELA_G11P1,
        USHistory_G11P1,
        TechCareers_G11P2,
        LyonsAdvisory_G11P2,
        Photograph_G11P2,
        USHistory_G11P3,
        ELA_G11P3,
        Painting_G11P4,
        USHistory_G11P7,
        ELA_G11P7,
        // 12th grade classes
        EconGov_G12P1,
        Photograph_G12P2,
        PadalinoAdvisory_G12P2,
        CarskyAdvisory_G12P2,
        WatsonAdvisory_G12P2,
        EconGov_G12P4,
        APCSP_G12P6,
        EconGov_G12P7,

        // 6th grade classes
        Math63_G6P1,
        Humanities65_G6P1,
        Humanities63_G6P1,
        FordAdvisory_G6P2,
        RichardsonAdvisory_G6P2,
        ColladoAdvisory_G6P2,
        AIR64_G6P2,
        AIR63_G6P2,
        AIR62_G6P2,
        MathSkills61_G6P3,
        Math65_G6P3,
        Math65_G6P4,
        Humanities63_G6P4,
        Humanities64_G6P4,
        Math62_G6P6,
        // 7th grade classes
        Humanities72_G7P1,
        Humanities73_G7P1,
        ReinosoAdvisory_G7P2,
        AlvarezAdvisory_G7P2,
        Math74_G7P1,
        Math73_G7P1,
        Math73_G7P3,
        MathSkills_G7P3,
        Math71_G7P4,
        Math72_G7P4,
        Humanities74_G7P4,
        // 8th grade classes
        Humanities81_G8P1,
        SuppoAdvisory_G8P2,
        BakerAdvisory_G8P2,
        SchoonmakerAdvisory_G8P2,
        PagoulatosAdvisory_G8P2,
        Mindfullness_G8P2,
        Science81_G8P4,
        Science82_G8p4,
        Humanities83_G8P4,
        Spanish1_G8P6,
        Spanish2_G8P6
    ] = await Promise.all(classesList.map((eachClass) => Class.create(eachClass)));

    //-------------create all userClass relationships here-------------//


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
        {userId:JackPadalino.id,dayId:December162022.id},
        {userId:ShiraCollado.id,dayId:December162022.id},
        // December 19 2022 absences
        {userId:ChakaBaker.id,dayId:December192022.id},
        {userId:LisaLyons.id,dayId:December192022.id},
        // December 20 2022 absences
        {userId:TeahWatson.id,dayId:December202022.id},
        {userId:RitaReinoso.id,dayId:December202022.id},
        // December 21 2022 absences
        {userId:ChikudiRichardson.id,dayId:December212022.id},
        {userId:VirginiaFord.id,dayId:December212022.id},
    ];

    await Promise.all(absenceList.map((absence) => Absence.create(absence)));

    console.log("DB SEED COMPLETE.");

};
  
seed();