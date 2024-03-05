import React from "react";
import "./Projects.css";
import Chat from "./../../assets/chat.jpg"
import Defi from "./../../assets/defi.jpg"
import NFt from "./../../assets/NFt.jpg"
import Ecom from "./../../assets/ecom.jpg"
import you from "./../../assets/youtube.jpg"

import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiSolidity,
  SiChainlink,
  SiChartdotjs,
  SiRedux,
  SiNextdotjs,
  SiReact,
  SiIpfs,
  SiViadeo,
  SiFirebase,
  SiGooglecloud,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
    
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={Defi}
                    alt="Rockstar Games"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>CrowdFunding Apllication</h2>
                <p>
                A organisation where we can have a contributer and stakeholder where the stakeholders can have voting based mechanism for funding to a cause which was built using Web3js,ReactJs,solidity 
                </p>
                <div>
                  <SiSolidity />
                  <SiEthereum/>
                  <SiChai/>
                  <SiChainlink/>
                  <SiChartdotjs/>
                  <SiRedux/>
                  
                  <FaReact />
                <SiTailwindcss/>
                </div>
                <div>
                
                
                  
                  <a
                    href="https://github.com/MudireddyMeghanath/DAO-organization"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={NFt}
                    alt="Sk-Weather-App"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>NFT MarketPlace</h2>
                <p>
                Created a NFT MarketPlace where people can buy and sell their NFTs and Upload thier NFTs with Solidity and NEXT.js and Mocha for Testing
                </p>
                <div>
                  <SiNextdotjs/>
                  <SiTailwindcss/>
                  <SiChai/>
                  <SiBlockchaindotcom/>
                  <SiReact/>
                  <SiIpfs/>
                  <SiSolidity/>
        
                 
                </div>
                <div>
          
                 
                  <a
                    href="https://github.com/MudireddyMeghanath/Nftmarkert"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={Defi} alt="" />
                </div>
              </div>
              <div className="project_information">
                <h2>Defi-Staking Application</h2>
                <p>
                Developed an defi staking application where user can stake tokens and receive
reward tokens which runs similar to a bank using Moralis,web3 UIkit,Solidity and
Mocha for Testing and React.js
                </p>
                <div>
                <SiTailwindcss/>
                <SiEthereum/>
                <SiSolidity/>
                <SiNextdotjs/>
                <SiReact/>
                <SiChai/>
                
                </div>
                <div>
               
                  <a
                    href="https://github.com/MudireddyMeghanath/defi-app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={you}
                    alt=""
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Youtube Clone -Frontend</h2>
                <p>
                 A frontend application which is built by using Rapid Api where users can view videos or online content which was build by React.js
                </p>
                <div>
                 <SiReact/>
                 <SiViadeo/>
                 <SiMaterialui/>

                </div>
                <div>
                
                  <a
                    href="https://github.com/MudireddyMeghanath/web"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={Ecom}
                    alt="Uniqlo-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Mern Stack- ecommerce</h2>
                <p>
                It is an Ecommerce website where we can sell products and includes with payment gateway with stripe .
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <SiRedux/>
                  <SiReact/>
                  <SiMaterialui/>
                  <SiGooglecloud/>
                </div>
                <div>
               
                  <a
                    href="https://github.com/MudireddyMeghanath/e-commerce"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={Chat}
                    alt="PulsePlus-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Mern-Stack Chat-App</h2>
                <p>
                Chat Application using socket.io and React,js with integration of Api's and with
Advanced UI/UX and MongoDb as Database
                
                </p>
                <div>
                 <SiReact/>
                 <SiMongodb/>
                 <SiMaterialui/>
                 <SiFirebase/>
                 <SiNodedotjs />
                  <SiExpress />
                </div>
                <div>
                
                  <a
                    href="https://github.com/MudireddyMeghanath/chatapp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};
