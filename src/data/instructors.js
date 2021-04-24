import instructor1 from '../img/instructor1.jpg'
import instructor2 from '../img/instructor2.jpg'
import instructor3 from '../img/instructor3.jpg'

let id = function () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
};



export const InstructorsData = () => (
    [
        {
            id: "_ree4334",
            name: "Tom Holland",
            position: "Front-end Instructor",
            former_job: "Ex Senior Engineer, Google",
            email: "tomholland@gmail.com",
            image: instructor1,
            biography: "Thanks for clickiing my card!. My name is Tom Holland, i am an instructor at \
                        Hackerbase and a career expert. I was an engineer at spotify and also was a senior\
                        engineer at Google. Teaching is a passion of mine and i hope to impact you by sharing\
                        my knowledge and skills i have amassed through years of coding. Hope to see you soon"
        },

        {
            id: "_tyrrte3",
            name: "Steven Barracks",
            position: "Back-end Instructor",
            former_job: "Ex Engineer, AirBnB",
            email: "stevenbarracks@gmail.com",
            image: instructor2,
            biography: "Thanks for clickiing my card!. My name is Steven Barracks, i am an instructor at \
                        Hackerbase and a lover of dogs. I'm an ex AirBnB senior engineer \
                        . Hopefully i get to see you soon. Cheeers!!"
        },

        {
            id: '_ytr4457',
            name: "Chioma Brussells",
            position: "Front-end Instructor",
            former_job: "Ex Senior Engineer, Uber",
            email: "chiomabrussells@gmail.com",
            image: instructor3,
            biography: "Thanks for clickiing my card!. My name is Chioma Brussells, i am an instructor at \
                        Hackerbase. I'm an ex senior engineer at AirBnB and also was a senior. Teaching is\
                        Hope to see you soon"
        },
    ]
)

