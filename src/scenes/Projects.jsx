import React from 'react'
import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';
import PROJECT1IMAGE from "../assets/project-1.jpeg"
import PROJECT2IMAGE from "../assets/project-2.jpeg"
import PROJECT3IMAGE from "../assets/project-3.jpeg"
import PROJECT4IMAGE from "../assets/project-4.jpeg"
import PROJECT5IMAGE from "../assets/project-5.jpeg"
const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
};

const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
};

const Project = ({ title,imgPath,subtitle,resourcePath }) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
      bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
    const projectTitle = title.split(" ").join("-").toLowerCase();
  
    return (
      <motion.div variants={projectVariant} className="relative">
        <a href={resourcePath} target="_blank" rel="noreferrer">
        <div className={overlayStyles}>
          <p className="text-2xl font-playfair">{title}</p>
          <p className="mt-7">
            {subtitle}
          </p>
        </div>
        <img src={imgPath} alt={projectTitle} />
        </a>
      </motion.div>
    );
  };

const Projects = () => {
    
  return (
    <section id='projects' className="pt-48 pb-48">
        <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        {/* <p className="mt-10 mb-10">
          Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
          fames odio in at. At magna ornare dictum lectus. Purus massa morbi
          purus nec eget eleifend ut elit.
        </p> */}
      </motion.div>
      {/* projects */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
            <div
                className="flex justify-center text-center items-center p-10 bg-red
                max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
            >
            BEAUTIFUL USER INTERFACES
            </div>
            <Project title="Project 1" subtitle="Build a Complete Fullstack Responsive Ecommerce App using React, Strapi, and Stripe" imgPath = {PROJECT1IMAGE} resourcePath="https://github.com/zpppQAQ/eCommWeb"/>
            <Project title="Project 2" subtitle="Build a Chat App with ChatGPT API and Chat Engine" imgPath = {PROJECT2IMAGE} resourcePath="https://github.com/zpppQAQ/chatApp"/>
            {/* row 2 */}
            <Project title="Project 3" subtitle="Build a single-page application for food delivery using React 18" imgPath = {PROJECT3IMAGE} resourcePath = "https://zpppqaq.github.io/react_ubereats_pra/"/>
            <Project title="Project 4" subtitle="Build customer asset risk models and integrate map and table presentation data" imgPath = {PROJECT4IMAGE} resourcePath="https://zpppqaq.github.io/riskViz/"/>
            <Project title="Project 5" subtitle="Using data to analyze the tuition fees of international students at Canada in the past 15 years" imgPath = {PROJECT5IMAGE} resourcePath="https://github.com/zpppQAQ/VDAproject/blob/main/zhan8960_cp321project.ipynb"/>
            <div
                className="flex justify-center text-center items-center p-10 bg-blue
                max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
                >
                SMOOTH USER EXPERIENCE
            </div>

        </motion.div>
      </div>
    </section>
  )
}

export default Projects
