import React, {Component} from 'react';
import PropTypes from 'prop-types';

const ProjectsArr = [
    "TO do list",
    "React ChatKit App",
    "News Content Predictor",
    "Tetris Game"
]

class AutoComplete extends Component {

    get value(){
        return this.refs.inputProject.value;
    }

    set value(inputValue){
        this.refs.inputProject.value = inputValue;
    }

    render(){
        return (
            <div>
                <input type="text"
                            list="projects"
                            ref="inputProject"
                            className="form-control" />
                <datalist id = "projects">
                    {this.props.options.map(
                        (opt,i)=> <option key ={i} value = {opt}/>
                    )}
                </datalist>
            </div>
        )
    }
}

export const  AddProject = ({project, date, node, react, angular, onNewProject}) => {


    let _project, _date, _node, _react, _angular;

    const submit = (e)=> {
        e.preventDefault();
        onNewProject({
            project: _project.value,
            date: _date.value,
            node: _node.checked,
            react: _react.checked,
            angular:  _angular.checked
        });

        _project.value  = ''
        _date.value  = ''
        _node.checked  = false
        _react.checked  = false
        _angular.checked  = false
    }

        return(
            <div  className="form-container">
                <form onSubmit={submit} className = "container">
                    <div className="form-group">
                        <label htmlFor="date">Date</label>
                        <input type="text"
                                className="form-control"
                                id="date"
                                placeholder="Date"
                                defaultValue = {date}
                                    ref={input=> _date = input}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="project">Project Title</label>
                        <AutoComplete options={ProjectsArr}
                                ref={input=> _project = input}
                                />
                    </div>
                    <div className="form-check">
                        <input type="checkbox"
                                className="form-check-input"
                                id="node"
                                defaultChecked = {node}
                                ref={input=> _node = input}
                                />
                        <label className="form-check-label" htmlFor="node">node</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox"
                                className="form-check-input"
                                id="react"
                                defaultChecked={react}
                                ref={input=> _react = input}
                                />
                        <label className="form-check-label" htmlFor="react">React</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox"
                                className="form-check-input"
                                id="angular"
                                defaultChecked ={angular}
                                ref={input=> _angular = input}
                                />
                        <label className="form-check-label" htmlFor="angular">Angular</label>
                    </div>
                  <button type="submit" className="btn btn-primary">Add Project</button>
                </form>
            </div>
        )
}

AddProject.defaultProps={
    project : 'react-resume',
    date :"02/20/2019",
    node: true,
    react: false,
    angular : false
}
