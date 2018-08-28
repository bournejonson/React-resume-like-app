import React,{ Component  }    from 'react';
import {Projects} from './Projects';
import {CodingTrian} from './CodingTrian';
import {AddProject} from './add-project'
import {ProjectNav} from './ProjectNav'
import {GitRepo} from './GitRepo'


export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            allDayaEnv : [
                {
                    project : "React-resume",
                    date : "8/20/2018",
                    node : true,
                    react : true,
                    angular : true
                }
            ]
        }
        this.addProject = this.addProject.bind(this);
    }
    countProjects(filter){
            return this.state.allDayaEnv.filter(function(codedIn){
                if(filter){
                    return codedIn[filter];
                }else {
                    return codedIn;
                }
            }).length;
    }

    addProject(newProject){
        this.setState({
            allDayaEnv:[
                ...this.state.allDayaEnv,
                newProject
            ]
        })
    }

    render(){
            return(
            <div className="app">
            <ProjectNav/>
            {(this.props.location.pathname === "/") ?
                <Projects one ={this.countProjects()}
                     two ={this.countProjects(
                         "node"
                     )}
                     three ={this.countProjects(
                         "react"
                     )}
                     four ={this.countProjects(
                         "angular"
                     )} /> :
                (this.props.location.pathname === "/add-project") ?
                <AddProject onNewProject={this.addProject} /> :
                (this.props.location.pathname === "/git-repo") ?
                <GitRepo /> :
                <CodingTrian codedIn={this.state.allDayaEnv}
                            filter={this.props.params.filter}/>

            }

            </div>
        )
    }
}
