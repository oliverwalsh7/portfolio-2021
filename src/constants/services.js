import React from "react"
import { FaCode, FaDatabase, FaAndroid , FaClone, FaBrain, FaLinux} from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: `My favorite method to build websites is with React & TypeScript. I also love using extensions of React like next.js & Gatsby.\n
          I also have an affinity for using Vue, typically with smaller projects.\n
          I've worked on the micro to macro scale, having built an entire architecture from scratch or optimize minute aspects of preexisting systems.\n`,
  },
  {
    id: 2,
    icon: <FaDatabase className="service-icon" />,
    title: "backend & databases",
    text: `I've had exposure to a wide variety of backends, differing in all shapes and sizes. \n
           Having learned the wide breadth of possible data structures over the years, recognizing the inner
           workings of most backend structures has become progressively easier for me. 
           Experienced with SQL + PostgreSQL, Mongo, Firebase, JS backends, cloud services, etc.`,
  },
  {
    id: 3,
    icon: <FaClone className="service-icon" />,
    title: "blockchain & crypto",
    text: `I've had an interest in the cryptocurrency space for a number of years, my focus has shifted to the world of Blockchain and further applications of it.
           On top of taking Blockchain Concepts & Applications at Lehigh, I took Blockchain Algorithms this past fall. 
           Now, I'm working with the Scalable Systems Software Research Group in order to theorize and develop innovative blockchain technology and ideas.`,
  },
  {
    id: 4,
    icon: <FaBrain className="service-icon" />,
    title: "machine learning",
    text: `My intention for 2021 is to begin an academic research pursuit in the field of machine learning and the evolution of neural networks.
           Ultimately, I think ML will propel us to a sort of computational transcendence, given that our hardware (whether biological or synthetic) allows for it.
           Currently learning to make my own neural networks with large datasets in Python with sci-kit, pytorch, and tensorflow.`,
  },
  {
    id: 5,
    icon: <FaLinux className="service-icon" />,
    title: "Linux",
    text: `As an advocate of open-source, messing around with Linux distros has been a favorite past time of mine for the better part of my young adult life.
           I'm now diving into the depths of Arch Linux but have intiment experience with Kali and Debian through my work as a systems administrator.`,
  },
  {
    id: 6,
    icon: <FaAndroid className="service-icon" />,
    title: "app development",
    text: `I've developed in Android Studio to create mock mobile apps, Flutter to make cross-compatible applications, and Xcode & Swift to make iOS applications.
           I have also developed with React Native, which I find just as easy as normal React.`,
  },
]
