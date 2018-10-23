import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { GoOctoface } from "react-icons/go"

const getPersent = (goal,now)=> (now/goal)*100+"%";


export const Projects = ({one, two=2, three=3, four=4, githubgoal=5})=> (
        <div id="all-projects"  className = "p-5 mb-0 container-fluid react justify-content-center">
            <div className = " projects row">
            <GoOctoface />
                <div className = "project-1 col-2">
                    <p> Total</p>
                    <span className = "h3 text-white ">{one}</span>
                </div>
                <GoOctoface />
                <div className = "project-1 col-2">
                <p> node</p>
                    <span className = "h3 text-white ">{two} </span>
                </div>
                <GoOctoface />
                <div className = "project-1 col-2">
                <p> angular</p>
                    <span className = "h3 text-white ">{three}</span>
                </div>
                <GoOctoface />
                <div className = "project-1 col-2">
                <p> React</p>
                    <span className = "h3 text-white ">{four}</span>
                </div>
            </div>
            <div className = "pt-3 git-goal">
                <span className = "h3 text-white">Git hub goal{"  "+getPersent(githubgoal,4)}</span>
            </div>
        </div>
    );

Projects.protoTypes ={
    one: PropTypes.string.isRequired,
    two: PropTypes.string,
    three: PropTypes.string,
    four:  PropTypes.string,
    githubgoal: PropTypes.number
}
