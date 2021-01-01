import React from "react"
import { FaCode, FaDatabase, FaAndroid , FaClone, FaBrain, FaLinux} from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: `My favorite method to build websites is with React & TypeScript. I typically use extensions of React like next.js & Gatsby.
          I also love using Vue, usually for smaller projects. My favorite Vue framework is nuxt.js, since it handles a lot of under-the-hood configuration.
          I've worked on the micro to macro scale when it comes to websites. I've built entire architectures from scratch and optimized aspects of massive preexisting systems.`,
  },
  {
    id: 2,
    icon: <FaDatabase className="service-icon" />,
    title: "backend & databases",
    text: `I've had exposure to a wide variety of backends, differing in all shapes and sizes.
           As I've uncovered the breadth of data structures over the years, recognizing the semantics of most backend structures has become progressively easier for me. 
           I'm experienced in developing with SQL (& pSQL), PostgreSQL, MongoDB, OracleDB, Firebase, lightweight JS backends, various cloud services (Heroku, AWS, Azure), and more various backend and DB systems.`,
  },
  {
    id: 3,
    icon: <FaClone className="service-icon" />,
    title: "blockchain & crypto",
    text: `I've had an interest in the cryptocurrency space for years, my focus has matured into the world of Blockchain.
           On top of taking blockchain concepts & applications course at Lehigh, I've taken a discrete blockchain algorithms course as well. 
           Now, I'm working with the Scalable Systems Software Research Group [sss.cse.lehigh.edu] in order to theorize and develop innovative blockchain software.`,
  },
  {
    id: 4,
    icon: <FaBrain className="service-icon" />,
    title: "machine learning",
    text: `My intention for 2021 is to begin a research pursuit into the field of machine learning and the evolution of neural networks.
           Currently learning to make my own neural networks with large datasets in Python with sci-kit, pytorch, and tensorflow.
           Ultimately, I think ML will propel us to a sort of computational transcendence, given that our hardware (biological or synthetic) allows for it.`,
  },
  {
    id: 5,
    icon: <FaLinux className="service-icon" />,
    title: "Linux",
    text: `Being an extreme advocate of open-source, messing around with Linux distros has been a favorite past-time of mine for the better part of my young adult life.
           I'm now diving into the depths of Arch Linux but I also have experience with Kali and Debian through my work as a systems administrator at LU.`,
  },
  {
    id: 6,
    icon: <FaAndroid className="service-icon" />,
    title: "app development",
    text: `I've developed in Android Studio to create mock mobile apps, Flutter to make cross-compatible applications, and Xcode & Swift to publish iOS applications.
           I have also developed with React Native, which I find as fun to code as normal React.`,
  },
]
