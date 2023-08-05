const data = {
    phdcategory: [
        {
            id: 1,
            name: ' REGULAR',
            details: 'A student in this category works full-time for his/her Ph.D. degree. He/she receives assistantship from the Institute or Fellowship from CSIR/UGC or any other recognized funding agency.'
        },
        {
            id: 2,
            name: 'SPONSORED',
            details: 'Astudent in this category is sponsored by a recognized R & D organization, academic institution, government organization or industry for doing research in the Institute on a full- time basis.The Institute does not provide any assistantship/fellowship to such a student.'
        },
        {
            id: 3,
            name: 'SELF-FINANCE',
            details: 'A student in this category works full-time or part-time towards the Ph.D.Programme. The Institute does not provide any assistantship/fellowship to such a student.'
        },
        {
            id: 4,
            name: 'PROJECT-STAFF',
            details: 'This category refers to a student who is working on a sponsored project in the Institute and isadmitted to the Ph.D.Programmeto work on a full-time or part-time basis. The remaining duration of the project at the time of admission should be at least one year. If the project getscompleted before the student completes his/her Ph.D.Programme, his/her category will be converted to that of SELF- FINANCED unless he/she is granted an assistantship/fellowship from the Institute or any other agency.'
        },
        {
            id: 5,
            name: 'PART-TIME',
            details: 'A scholar in this categoryshould be a professionally employed person (including the staff of IIIT Kalyani), who pursues the Ph.D.Programme while continuing the duties of his/her service. The Institute does not provide any assistantship/fellowship to such a scholar.'
        },
        {
            id: 6,
            name: ' EXTERNAL',
            details: 'This category refers to a scholar employed in an R & D organization/academicinstitution/industry having adequate research facilities. The research work leading to the Ph.D. degree may be carried out largely in the parent organization of the candidate under a LocalSupervisor from the organization but with the overall guidance provided by a faculty member (Institute Supervisor) of the Department/Centre in which he/she is registered. The Institute does not provide any assistantship/fellowship to such a student. Such a candidate will have to complete the course work and other requirements of the Institute and will have to take official withdrawal after completion of the requirements to continue work in his/her parent Institute. The Institute does not provide any assistantship/fellowship to such a scholar.'
        },
        {
            id: 7,
            name: ' VISITING',
            details: 'A scholar in this category is a registered scholar in another university/institute in India or abroad. The Institute does not award any degree to such a student/candidate.'
        },

    ],
    phdeligibility: [
        {
            id:1,
            name:'Ph.D. in Engineering',
            forinfo:'For admission to the Ph.D. Programme in Engineering departments, a candidate must satisfy one of the following criteria:',
            details:[
                {
                    id:1,
                    label:'Master’s degree in Engineering/Technologyin a relevant area with a minimum CGPA of 6.5 or 60% of marks.'
                },
                {
                    id:2,
                    label:'Bachelor\'s degree in Engineering/Technology or Master\'s degree in Science in a relevant area with a minimum CGPA of 7.5 or 70 % of marks. The candidate should be GATE/NET qualified.'
                },
            ]
        },
        {
            id:2,
            name:'Ph.D. in Science',
            forinfo:'For admission to the Ph.D. Programme in Science departments, a candidate must satisfy one of the following criteria:',
            details:[
                {
                    id:1,
                    label:'Master\'s degree in Science in a relevant area with a minimum CGPA of 6.5 or 60% of marks. The candidate should be GATE/NET qualified.'
                },
                {
                    id:2,
                    label:'Master\'s degree in Engineering/Technology in a relevant area with a minimum CGPA of 6.5or 60% of marks.'
                },
                {
                    id:3,
                    label:'Bachelor\'s degree in Engineering/Technology or Master\'s degree in Science in a relevant area with a minimum CGPA of 7.5 or 70% of marks. The candidate should be GATE/NET qualified.'
                }
            ]
        },
        {
            id:3,
            name:'Ph.D. in Humanities and Social Sciences',
            forinfo:'For admission to the Ph.D. Programme in the department of Humanities and Social Sciences (HSS), a candidate must satisfy one of the following criteria:',
            details:[
                {
                    id:1,
                    label:'Master\'s degree in Arts/Commerce/Science in a relevant area with a minimum of 55% marks or equivalent of marks or Master\'s degree in Engineering/Technology in a relevant area with a minimum CPI of 6.5or 60% of marks.'
                },
            ]
        },
        {
            id:4,
            name:'Minimum Experience for Sponsored, Part-Time and External Categories',
            forinfo:'For Sponsored, Part-Time and External Categories, a candidate must satisfy the following criteria:',
            details:[
                {
                    id:1,
                    label:'Candidate in Sponsored, Part-time and External categories must be a regular employee of the sponsoring organization with at least one year of professional experience in the respective field.'
                }
            ]
        },

    ]
}

export default data;
