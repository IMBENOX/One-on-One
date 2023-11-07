"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedServices = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect('mongodb://127.0.0.1:27017/OneOnOneDb')
    .then(() => {
    console.log("Database Connected");
})
    .catch(err => {
    console.log("Conection error");
    console.log(err);
});
exports.seedServices = [
    {
        name: 'Bodybuilding',
        category: 'fitness',
        id: 'bodybuilding',
        description: 'Bodybuilding is a strength training and fitness discipline focused on developing and sculpting the muscles of the body. It involves rigorous resistance training, typically using free weights, weight machines, or bodyweight exercises, to build muscle mass and increase strength.',
        providers: [],
        imageLocation: '../images/bodybuilding.jpg',
    },
    {
        name: 'Crossfit',
        category: 'fitness',
        id: 'crossfit',
        description: 'CrossFit is a high-intensity fitness program that combines elements of weightlifting, cardiovascular conditioning, and functional movements. It focuses on building strength, endurance, and overall fitness.',
        providers: [],
        imageLocation: '../images/crossfit.jpg',
    },
    {
        name: 'Track',
        category: 'fitness',
        id: 'track',
        description: 'Track and field is an athletic sport that encompasses a wide range of individual and team events, such as sprints, distance running, jumping, throwing, and hurdling. Competitions take place in an outdoor stadium, featuring a track that circles the field. Athletes participate in events like the 100-meter dash, long jump, high jump, shot put, and more, each requiring specific skills and techniques.',
        providers: [],
        imageLocation: '../images/track.jpg',
    },
    {
        name: 'Yoga',
        category: 'fitness',
        id: 'yoga',
        description: 'Yoga is a mindful practice that harmonizes the body and mind through a combination of physical postures, controlled breathing techniques, and meditation. It aims to improve flexibility, strength, and balance while also reducing stress and promoting relaxation. Yoga offers a holistic approach to well-being, focusing on both the physical and mental aspects of health.',
        providers: [],
        imageLocation: '../images/yoga.jpg',
    },
    {
        name: 'Pilates',
        category: 'fitness',
        id: 'pilates',
        description: 'Pilates is a fitness method that emphasizes core strength, flexibility, and body awareness. It involves a series of controlled movements and exercises designed to improve posture, stability, and overall body function. Pilates is known for its low-impact nature, making it suitable for individuals of all fitness levels. ',
        providers: [],
        imageLocation: '../images/pilates.jpg',
    },
    {
        name: 'Boxing',
        category: 'fitness',
        id: 'boxing',
        description: 'Boxing is a combat sport that focuses on controlled striking with the fists. Its not only a competitive sport but also a popular form of physical fitness training. Boxers train to develop speed, strength, agility, and endurance, using a combination of punches, footwork, and defensive techniques.',
        providers: [],
        imageLocation: '../images/boxing.jpg',
    },
    {
        name: 'Hairdressing',
        category: 'cosmetology',
        id: 'hairdressing',
        description: 'Hairdressing is a skilled profession that involves cutting, styling, coloring, and treating hair to enhance its appearance and health. Hairdressers use their expertise to create trendy and customized looks for clients, taking into account face shape, hair type, and personal preferences.',
        providers: [],
        imageLocation: '../images/hairdressing.jpg',
    },
    {
        name: 'Nails',
        category: 'cosmetology',
        id: 'nails',
        description: 'Nail care, or manicuring, involves the art and practice of enhancing the appearance and health of the nails and hands. It encompasses various services, such as nail shaping, filing, polishing, and the application of nail art and treatments. Nail care professionals, known as nail technicians or manicurists, use their skills to create aesthetically pleasing and well-maintained nails.',
        providers: [],
        imageLocation: '../images/nails.jpg',
    },
    {
        name: 'Massage',
        id: 'massage',
        category: 'cosmetology',
        description: 'Massage is a therapeutic technique that involves the manipulation of the bodys muscles and soft tissues using various hand and body movements. The primary goal of massage is to promote relaxation, reduce stress, alleviate muscle tension, and enhance physical and mental well-being. Its a practice that has been used for centuries to provide comfort and relief, offering a sense of rejuvenation and relaxation.',
        providers: [],
        imageLocation: '../images/massage.jpg',
    },
    {
        name: 'Skin-care',
        category: 'cosmetology',
        id: 'skin-care',
        description: 'Skin care is a comprehensive approach to maintaining the health, appearance, and vitality of the skin. It encompasses a range of practices, from cleansing and moisturizing to protecting the skin from environmental factors. Skin care involves using various products and techniques designed to address specific skin concerns and conditions, such as acne, aging, or dryness.',
        providers: [],
        imageLocation: '../images/skin-care.jpg',
    },
    {
        name: 'Make Up Artist',
        category: 'cosmetology',
        id: 'make-up-artist',
        description: 'A makeup artist is a skilled professional with expertise in using cosmetics to transform and enhance a persons appearance. They have a deep understanding of color, contouring, and various makeup techniques to create stunning and customized looks. Makeup artists work with clients for a variety of purposes, including weddings, photoshoots, film, and fashion events, to help them achieve the desired style and mood. ',
        providers: [],
        imageLocation: '../images/make-up-artist.jpg',
    },
    {
        name: 'House-Painting',
        category: 'home-repairs',
        id: 'house-painting',
        description: 'House painting is the practice of applying paint to the surfaces of a building, both interior and exterior, to protect them from weather, wear, and tear while enhancing their visual appeal. It involves selecting appropriate paint types and colors, preparing the surfaces, and applying coats of paint with precision. House painters are skilled professionals who play a crucial role in maintaining and transforming the aesthetics of homes and buildings.',
        providers: [],
        imageLocation: '../images/house-painting.jpg',
    },
    {
        name: 'Appliance Service Technician',
        category: 'home-repairs',
        id: 'appliance-service-technician',
        description: 'An Appliance Service Technician is a skilled technician who specializes in diagnosing, repairing, maintaining, and installing household appliances. These professionals have expertise in a wide range of appliances, including refrigerators, ovens, washing machines, and more. They are knowledgeable about electrical systems, mechanical components, and the latest appliance technologies.',
        providers: [],
        imageLocation: '../images/appliance-service-technician.jpg',
    },
    {
        name: 'Plumber',
        category: 'home-repairs',
        id: 'plumber',
        description: 'A plumber is a skilled professional who works with plumbing systems, ensuring the proper installation, maintenance, and repair of pipes, fixtures, and appliances that handle water and sewage. Plumbers play a vital role in both residential and commercial settings, ensuring the safe and efficient distribution of water and the disposal of waste. They are experts in diagnosing and solving plumbing issues, from fixing leaks and clogs to installing new plumbing systems.',
        providers: [],
        imageLocation: '../images/plumber.jpg',
    },
    {
        name: 'Electrician',
        category: 'home-repairs',
        id: 'electrician',
        description: 'An electrician is a highly-trained professional who specializes in working with electrical systems. Their expertise encompasses the installation, maintenance, and repair of electrical wiring, fixtures, and equipment in various settings, including homes, businesses, and industrial facilities. Electricians ensure that electrical systems function safely and efficiently. ',
        providers: [],
        imageLocation: '../images/electrician.jpg',
    },
    {
        name: 'Physics Teacher',
        category: 'teaching',
        id: 'physics-teacher',
        description: 'Physics teaching is the art of sharing knowledge and insights into the fundamental principles that govern the physical universe. Physics educators instruct students in the laws of motion, energy, electromagnetism, and more, fostering an understanding of how the world functions at the most fundamental level. Through lectures, experiments, and problem-solving, physics teachers inspire curiosity and critical thinking while equipping students with the tools to comprehend and explain the behavior of matter and energy.',
        providers: [],
        imageLocation: '../images/physics-teacher.jpg',
    },
    {
        name: 'Math Teacher',
        category: 'teaching',
        id: 'math-teacher',
        description: 'Math teaching is the practice of imparting knowledge and fostering an appreciation for the world of numbers, patterns, and problem-solving. Math educators guide students through a diverse range of mathematical concepts, from arithmetic to advanced calculus. Their aim is to nurture logical thinking, analytical skills, and the ability to tackle real-world challenges. ',
        providers: [],
        imageLocation: '../images/math-teaching.jpg',
    },
    {
        name: 'Quitar Teacher',
        category: 'teaching',
        id: 'quitar-teacher',
        description: 'Guitar teaching is the practice of sharing the joy and skill of playing the guitar. Guitar educators guide students in learning how to strum, pluck, and fret, enabling them to produce beautiful melodies and harmonies. Whether its acoustic, electric, classical, or another type of guitar, these teachers help students master various techniques and styles. ',
        providers: [],
        imageLocation: '../images/quitar-teaching.jpg',
    },
    {
        name: 'Piano Teacher',
        category: 'teaching',
        id: 'piano-teacher',
        description: 'Piano teaching is the art of imparting the skills and passion for playing the piano. Piano educators guide students in learning to read sheet music, play scales, and create beautiful melodies. The piano, with its rich history and versatility, is a cornerstone of music education. Through lessons and practice, piano teachers nurture musicality, hand-eye coordination, and a deep appreciation for classical and contemporary music.',
        providers: [],
        imageLocation: '../images/piano-teaching.jpg',
    },
    {
        name: 'Pathologist',
        category: 'health',
        id: 'pathologist',
        description: 'A pathologist is a highly specialized medical practitioner who plays a crucial role in diagnosing diseases and conditions. Pathologists are experts in examining tissues, cells, and bodily fluids to identify the underlying causes of health issues. They use laboratory techniques, including microscopy and molecular diagnostics, to analyze samples and provide accurate diagnoses to guide patient treatment. Pathologists work in various medical settings, including hospitals, laboratories, and research institutions, contributing to medical research and the advancement of healthcare. ',
        providers: [],
        imageLocation: '../images/pathologist.jpg',
    },
    {
        name: 'Chiropractor',
        category: 'health',
        id: 'chiropractor',
        description: 'A chiropractor is a healthcare practitioner who focuses on diagnosing and providing non-invasive treatment for musculoskeletal disorders, particularly issues related to the spine, muscles, and joints. Chiropractors use their hands to perform manual adjustments and manipulations to alleviate pain, improve mobility, and enhance overall well-being.',
        providers: [],
        imageLocation: '../images/chiropractor.jpg',
    },
    {
        name: 'Dentist',
        category: 'health',
        id: 'dentist',
        description: 'A dentist is a healthcare provider dedicated to maintaining and improving oral health. Dentists are experts in diagnosing and treating a wide range of dental conditions, from routine check-ups and cleanings to complex oral surgeries. They focus on preventing dental issues and educating patients about proper oral hygiene. Dentists play a vital role in ensuring overall health, as oral health is closely connected to systemic well-being.',
        providers: [],
        imageLocation: '../images/dentist.jpg',
    },
];
