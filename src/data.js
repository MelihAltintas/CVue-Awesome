const introInfo = {
    name: 'Melih ALTINTAŞ',
    title: 'Full Stack Developer',
    location: 'Ankara, Turkey',
    description: '',
    image: 'me.jpg',
}

const introExtras = [{
    icon: 'fas fa-flag',
    value:'Republic Of Turkey',
},
{
    icon: 'fas fa-birthday-cake',
    value:'22.10.1992',
},{
    icon: 'fa fa-drivers-license',
    value:'B category, automobile (since 2010)',
}
]
//dynamic icon
const socialMediaInfo = [{
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/melihaltintas92/',
        username: 'melihaltintas92',
        displayName: 'linkedin/melihaltintas92'
    },

    {
        name: 'github',
        link: 'https://github.com/MelihAltintas',
        username: 'MelihAltintas',
        displayName: 'github/MelihAltintas'
    },
    {
        name: 'stack-overflow',
        link: 'https://stackoverflow.com/users/2740071/melih-alt%c4%b1nta%c5%9f',
        username: 'MelihAltintas',
        displayName:'stackoverflow/MelihAltintas'
    },
]


const contactInfo = [
    {
        name: 'envelope',
        context: 'melihaltintas@hotmail.com',
        size: '20px',
        style: "font-size:20px;margin-right: 10px;",
        link: 'mailto:melihaltintas@hotmail.com'
    },
    {
        name: 'phone-square',
        context: '+905398528421',
        size: '23px',
        style: "font-size:23px;margin-right: 10px;",
        link: 'tel:+905398528421'
    },
]

const summaryInfo = 
    "I'm a senior full-stack software developer with 6 years of experience." +
    "Have interest in designing and crafting efficient modern softwares and learning new technologies and tools"


//desc v-html 
const experinceInfo = [
    {
        workAt: 'aselsan.png',
        position: 'Senior Software Engineer',
        duration: '07 2015 – *',
        description: 'Work as a full stack software engineer.',
        techs: [".NET Core", "Vue.JS", "Docker", "Kubernetes", "RestAPIs", "SOAP","RabbitMQ","Kafka","Elasticsearch","Oracle","PostgreSQL","Microsoft SQL Server"]
    },
    
]

const educationInfo = [
    {
        school: 'Hacettepe University',
        logo:'hacettepe.png',
        location: 'Ankara,Turkey',
        title: 'MSc in Computer Science',
        duration: '2016 – 2018',
        description: '',
    },
    {
        school: 'Hacettepe University',
        logo:'hacettepe.png',
        location: 'Ankara,Turkey',
        title: 'BSc in Computer Science',
        duration: '2010 – 2015',
        description: '<b>GPA: 3.82/4.00 <br> ranked as the 1st in the department and faculty of engineering with a 3.82 GPA.</b>',
    },
    
];


const skillInfo = [
    {
        name: '.NET Core',
        rate: 100,
    },    {
        name: 'VueJS',
        rate: 100,
    },  {
        name: 'Svelte JS',
        rate: 80,
    },  {
        name: 'React',
        rate: 75,
    }, {
        name: 'Node JS',
        rate: 80,
    },
    {
        name: 'HTML/CSS/LESS/SASS',
        rate: 95,
    },
    {
        name: 'Flutter',
        rate: 70,
    },
    
]

const otherSkillInfo = ['RabbitMQ',"Kafka","Elasticsearch","Docker/Kubernetes",'Jira','Git','TFS',"Oracle","PostgreSQL","Microsoft SQL Server"]

const proSkillInfo = ['Leadership','Effective communication','Team player','Strong problem solver']

// 0,1,2,3,4,5
const languageInfo = [{
        name: 'Turkish',
        rate: 5,
        level: 'Native',
    },
    {
        name: 'English',
        rate: 4,
        level: 'Int',
    },
    {
        name: 'German',
        rate: 1,
        level: 'Ele',
    }
]

const portfolioInfo = [{
    logo: 'vue3-openlayers.jpg',
    description: "vue3-openlayers is components library that brings the powerful OpenLayers API to the Vue3 reactive world. It can display maps with tiled, raster or vector layers loaded from different sources.",
    github:"https://github.com/MelihAltintas/vue3-openlayers",
},
{
    logo: 'slim.jpg',
    description: "svelte-slimscroll is a action for Svelte.js, which can transforms any div into a scrollable area with a nice scrollbar.",
    github:"https://github.com/MelihAltintas/svelte-slimscroll",
},
{
    logo: 'svelteknob.png',
    description: "Knob control for Svelte.js",
    github:"https://github.com/MelihAltintas/svelte-knob",
},
]




export default {
    introInfo: introInfo,
    socialMediaInfo: socialMediaInfo,
    experinceInfo: experinceInfo,
    educationInfo: educationInfo,

    skillInfo: skillInfo,
    languageInfo: languageInfo,
    contactInfo: contactInfo,
    summaryInfo: summaryInfo,
    otherSkillInfo: otherSkillInfo,
    proSkillInfo: proSkillInfo,
    portfolioInfo:portfolioInfo,
    introExtras:introExtras
}