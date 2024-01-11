// assets

import githubProfilePic from "../assets/ManuliProfilePic.png"
import babyAndUniverse from "../assets/BabyAndUniverse.png"
import bismarck from "../assets/Bismarck.png"
import mern from "../assets/Mern.png"



// components
import { 
  Reveal, 
  Card, 
  ViewTitle,
  ViewTitleSub,
  SectionWrapper0, 
  SectionWrapper1, 
  SectionWrapper2, 
  SectionWrapper3, 
  SectionWrapper4, 
  Paragraph, 
  Image, 
  Link } from "../components";

// framer-motion
import { motion } from "framer-motion";

import { transition } from "../utils/transition";

import { scale } from "../utils/variants";

const GithubProjects = () => {

  
    return (
      <SectionWrapper0 id="github-projects" background="#5c7294">
        <SectionWrapper1>

          <ViewTitle mainText="Some other" spanText="Projects"/>
  
          <SectionWrapper2>
            <SectionWrapper3>
                <div className="flex-1 max-w-[700px]">
                <Reveal>
                    <p className="text-left xl:text-start text-base sm:text-lg text-textSecondary" style={{ color: 'Black' }}>
                    As this webpage is quite new I still have not had time to create specific views for the majority of my projects. This page links to some of the projects found at my Github account.
                    </p>
                    <div className="mb-4" />
                    <div className="flex items-center">

                      <Link 
                        href="https://github.com/Catrovitch"
                        linkString="Visit my Github page by clicking this link" 
                      />
                      <div className="ml-4">
                          <Image src={githubProfilePic} className="max-w-full sm:max-w-[50px] rounded-full" />
                      </div>

                    </div>
                </Reveal>
                </div>
            </SectionWrapper3>
          </SectionWrapper2>

          <SectionWrapper2>
            <SectionWrapper3>
  
              <SectionWrapper4>
                <Reveal>
                  <ViewTitleSub header="Course-website" color="Black"/>

                  <Paragraph>
                    This web application lays the ground for an online course library where one can learn various subjects. It follows a traditional web application structure using
                    HTML and CSS in the frontend coupled with a Python-managed PostgreSQL backend. The application is built using Flask and is hosted on Fly.io. Visit the webpage {" "}

                    <Link 
                      href="https://online-course-website.fly.dev/"
                      linkString="here"
                    />
                    .
                  </Paragraph>
                
                  <motion.div
                    variants={scale()}
                    transition={transition()}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false}} 
                    className="flex gap-12 mt-12 flex-wrap justify-center">
    
                    <Card 
                      imgSrc={babyAndUniverse} 
                      title={"Online-course"} 
                      link={"https://github.com/Catrovitch/Online-course-website"}
                    />

                  </motion.div>

                </Reveal>
              </SectionWrapper4>
  

              <SectionWrapper4>
                <Reveal>
                <ViewTitleSub header="Bismarck" color="Black"/>
                  <Paragraph>
                    Bismarck is a classic card game which is played between two players each striving to defeat the other through strategy and careful planning.
                    It is a desktop appliction built using Python and Pygame. This was my first programming project using Github and the focus was on good practices
                    over fancy graphics and complex mechanics.
                  </Paragraph>
                
                  <motion.div
                    variants={scale()}
                    transition={transition()}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false}} 
                    className="flex gap-12 mt-12 flex-wrap justify-center">
    
                    <Card imgSrc={bismarck} title={"Bismarck"} link={"https://github.com/Catrovitch/Bismarck"}/>

                  </motion.div>
                </Reveal>
              </SectionWrapper4>
  
              <SectionWrapper4>
                <Reveal>
                  <ViewTitleSub header="Full-Stack Open" color="Black"/>
                  <Paragraph>
                    This repository contains various projects related to the valued course Full-Stack Open at University of Helsinki. The topics of the course
                    ranges from basic JavaScript and Node.js to full end-to-end testing, containerization and
                    continuous development. For greater detail about the visit the Full-Stack Open course webpage {" "}

                    <Link 
                      href="https://fullstackopen.com/en/#course-contents"
                      linkString="here"
                    />
                    .
                  </Paragraph>
                
                  <motion.div
                    variants={scale()}
                    transition={transition()}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false}} 
                    className="flex gap-12 mt-12 flex-wrap justify-center">
    
                    <Card imgSrc={mern} title={"Full-Stack-Open"} link={"https://github.com/Catrovitch/Full-Stack-Open-Exercises"}/>

                  </motion.div>
                </Reveal>
              </SectionWrapper4>
            </SectionWrapper3>
          </SectionWrapper2>  
        </SectionWrapper1>
      </SectionWrapper0>
    );
  };
  
  export default GithubProjects;
  