import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiRedis,
  SiTailwindcss,
  SiNetlify,
  SiSolidity,
  SiNextdotjs,
  SiIpfs,
  SiCplusplus,
  SiC,
  SiSqlite,
  SiMysql
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript, SiHeroku } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap, BsWordpress } from "react-icons/bs";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          
       
          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          <div>
            <FaNodeJs />
            <h5>Nodejs</h5>
          </div>
          <div>
            <DiMongodb />
            <h5>MongoDb</h5>
          </div>
          <div>
            <SiSolidity></SiSolidity>
            <h5>solidity</h5>
          </div>
          <div>
            <SiNextdotjs></SiNextdotjs>
            <h5>Next.js</h5>
          </div>
          <div>
            <SiIpfs></SiIpfs>
            <h5>Ipfs</h5>
          </div>
          <div>
            <SiCplusplus></SiCplusplus>
            <h5>C++</h5>
          </div>
          <div>
            <SiC></SiC>
            <h5>c</h5>
          </div>
          <div>
            <SiMysql></SiMysql>
            <h5>Mysql</h5>
          </div>
          <div>
            <SiRedux></SiRedux>
            <h5>Redux ToolKit</h5>
          </div>

          <div>
            <SiExpress />
            <h5>Express</h5>
          </div>


         
          
          
          
          
        </div>
      </div>
    </>
  );
};
