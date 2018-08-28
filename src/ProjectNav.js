import React from 'react';
import { FaProjectDiagram } from "react-icons/fa";
import { MdPlusOne } from "react-icons/md";
import { MdLineStyle } from "react-icons/md";
import { GoMarkGithub } from "react-icons/go";
import {Link} from 'react-router'
export const ProjectNav = ()=>
    <nav className = "nav nav-pills nav-fill">
        <div className = "nav-item">
            <Link to="/" activeClassName ="nav-link active">
                <FaProjectDiagram/>
            </Link>
        </div>
        <div className = "nav-item">
            <Link to="/add-project" activeClassName ="nav-link active">
                <MdPlusOne/>
            </Link>
        </div>
        <div className = "nav-item">
            <Link to="/list-project" activeClassName ="nav-link active">
                <MdLineStyle/>
            </Link>
        </div>
        <div className = "nav-item">
            <Link to="/git-repo" activeClassName ="nav-link active">
                <GoMarkGithub/>
            </Link>
        </div>
    </nav>
