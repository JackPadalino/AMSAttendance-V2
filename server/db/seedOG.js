const {
    db,
    User,
    Class,
    HSSchedule,
    MSSchedule,
    Day,
    Absence,
    Coverage,
    Message
} = require('.');

const seed = async () => {
    console.log("STARTING DB SEED...");
    await db.sync({ force: true });

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
            firstName: 'Mr',
            lastName: 'Padalino',
            email: 'jpadalino@amsbronx.org',
            phoneNumber: '+15858804745',
            username:'jpadalino',
            password:'1595Bathgate',
            role:'admin'
        }
    ];

    //-------------create all teachers here-------------//
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
        MrPadalino
    ] = await Promise.all(userList.map((user) => User.create(user)));

    //-------------create all HS Schedules here-------------//
    const hsScheduleList = [
        {
            firstPeriod: null,
            secondPeriod: 'fugit',
            thirdPeriod: 'praesentium',
            fourthPeriod: null,
            fifthPeriod: 'Lunch',
            sixthPeriod: 'magnam',
            seventhPeriod: null,
            userId:CortezWiza.id
        },
        {
            firstPeriod: 'repudiandae',
            secondPeriod: null,
            thirdPeriod: null,
            fourthPeriod: null,
            fifthPeriod: 'Lunch',
            sixthPeriod: null,
            seventhPeriod: 'ex',
            userId:AlexzanderOConnell.id
        },
        {
            firstPeriod: null,
            secondPeriod: null,
            thirdPeriod: 'fugiat',
            fourthPeriod: 'temporibus',
            fifthPeriod: 'Lunch',
            sixthPeriod: null,
            seventhPeriod: null,
            userId:DixieHuel.id
        },
        {
            firstPeriod: null,
            secondPeriod: 'dolore',
            thirdPeriod: 'alias',
            fourthPeriod: 'a',
            fifthPeriod: 'Lunch',
            sixthPeriod: null,
            seventhPeriod: 'voluptatum',
            userId:BiankaRobel.id
        },
        {
            firstPeriod: 'voluptates',
            secondPeriod: null,
            thirdPeriod: null,
            fourthPeriod: null,
            fifthPeriod: 'Lunch',
            sixthPeriod: 'possimus',
            seventhPeriod: null,
            userId:DarenZieme.id
        },
        {
            firstPeriod: null,
            secondPeriod: 'adipisci',
            thirdPeriod: 'velit',
            fourthPeriod: 'autem',
            fifthPeriod: 'Lunch',
            sixthPeriod: null,
            seventhPeriod: null,
            userId:JamieRyan.id
        },
        {
            firstPeriod: null,
            secondPeriod: 'accusantium',
            thirdPeriod: 'itaque',
            fourthPeriod: 'maxime',
            fifthPeriod: 'Lunch',
            sixthPeriod: 'dolore',
            seventhPeriod: null,
            userId:RudyMoore.id
        },
        {
            firstPeriod: 'ut',
            secondPeriod: null,
            thirdPeriod: null,
            fourthPeriod: null,
            fifthPeriod: 'Lunch',
            sixthPeriod: 'sit',
            seventhPeriod: 'beatae',
            userId:AliciaWest.id
        },
        {
            firstPeriod: 'iusto',
            secondPeriod: null,
            thirdPeriod: null,
            fourthPeriod: null,
            fifthPeriod: 'Lunch',
            sixthPeriod: null,
            seventhPeriod: null,
            userId:PasqualeKris.id
        },
        {
            firstPeriod: 'iure',
            secondPeriod: 'ex',
            thirdPeriod: null,
            fourthPeriod: null,
            fifthPeriod: 'Lunch',
            sixthPeriod: null,
            seventhPeriod: null,
            userId:DeborahHodkiewicz.id
        },
        {
            firstPeriod: 'recusandae',
            secondPeriod: 'occaecati',
            thirdPeriod: null,
            fourthPeriod: 'eveniet',
            fifthPeriod: 'Lunch',
            sixthPeriod: null,
            seventhPeriod: null,
            userId:JackPadalino.id
        }
    ];

    await Promise.all(hsScheduleList.map((schedule) => HSSchedule.create(schedule)));
    
    //-------------create all MS Schedules here-------------//
    const msScheduleList = [
        {
            firstPeriod: null,
            secondPeriod: null,
            thirdPeriod: null,
            fourthPeriod: null,
            fifthPeriod: null,
            sixthPeriod: null,
            userId:CortezWiza.id
        },
        {
            firstPeriod: null,
            secondPeriod: null,
            thirdPeriod: null,
            fourthPeriod: null,
            fifthPeriod: null,
            sixthPeriod: null,
            userId:AlexzanderOConnell.id
        },
        {
            firstPeriod: null,
            secondPeriod: null,
            thirdPeriod: null,
            fourthPeriod: null,
            fifthPeriod: null,
            sixthPeriod: null,
            userId:DixieHuel.id
        },
        {
            firstPeriod: null,
            secondPeriod: null,
            thirdPeriod: null,
            fourthPeriod: null,
            fifthPeriod: null,
            sixthPeriod: null,
            userId:BiankaRobel.id
        },
        {
            firstPeriod: null,
            secondPeriod: null,
            thirdPeriod: null,
            fourthPeriod: null,
            fifthPeriod: null,
            sixthPeriod: null,
            userId:DarenZieme.id
        },
        {
            firstPeriod: null,
            secondPeriod: null,
            thirdPeriod: null,
            fourthPeriod: null,
            fifthPeriod: null,
            sixthPeriod: null,
            userId:JamieRyan.id
        },
        {
            firstPeriod: null,
            secondPeriod: null,
            thirdPeriod: null,
            fourthPeriod: null,
            fifthPeriod: null,
            sixthPeriod: null,
            userId:RudyMoore.id
        },
        {
            firstPeriod: null,
            secondPeriod: null,
            thirdPeriod: null,
            fourthPeriod: null,
            fifthPeriod: null,
            sixthPeriod: null,
            userId:AliciaWest.id
        },
        {
            firstPeriod: null,
            secondPeriod: null,
            thirdPeriod: null,
            fourthPeriod: null,
            fifthPeriod: null,
            sixthPeriod: null,
            userId:PasqualeKris.id
        },
        {
            firstPeriod: null,
            secondPeriod: null,
            thirdPeriod: null,
            fourthPeriod: null,
            fifthPeriod: null,
            sixthPeriod: null,
            userId:DeborahHodkiewicz.id
        },
        {
            firstPeriod: null,
            secondPeriod: null,
            thirdPeriod: null,
            fourthPeriod: null,
            fifthPeriod: null,
            sixthPeriod: null,
            userId:JackPadalino.id
        }
    ];

    await Promise.all(msScheduleList.map((schedule) => MSSchedule.create(schedule)));

    //-------------create all days here-------------//
    const dayList = [
        {date:'2022-01-01'},
        {date:'2022-01-02'},
        {date:'2022-01-03'},
        {date:'2022-02-01'},
        {date:'2022-02-02'},
        {date:'2022-02-03'}
    ];

    const [
        January012022,
        January022022,
        January032022,
        February012022,
        February022022,
        February032022,
    ] = await Promise.all(dayList.map((day) => Day.create(day)));

    //-------------create all asbences here-------------//
    const absenceList = [
        // January 01 2022 absences
        {userId:CortezWiza.id,dayId:January012022.id},
        {userId:AlexzanderOConnell.id,dayId:January012022.id},
        // January 02 2022 absences
        {userId:DixieHuel.id,dayId:January022022.id},
        // January 03 2022 absences
        {userId:BiankaRobel.id,dayId:January032022.id},
        {userId:DarenZieme.id,dayId:January032022.id},
        // February 01 2022 absences
        {userId:JamieRyan.id,dayId:February012022.id},
    ];

    await Promise.all(absenceList.map((absence) => Absence.create(absence)));

    console.log("DB SEED COMPLETE.");
  };
  
  seed();