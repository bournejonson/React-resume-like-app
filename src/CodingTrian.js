import React, { Component } from 'react';
import { GoOctoface } from "react-icons/go";
import {CodeTrainRow} from './CodeTrainRow';
import PropTypes from 'prop-types';
import {Link} from 'react-router'

export const CodingTrian = ({codedIn, filter})=> {
    const filterEnvs = (!filter || !filter.match(/node|react|angular/)) ? codedIn : codedIn.filter(env=>env[filter]);
    return(

    <div  className = "p-5 mb-0 container-fluid react justify-content-center">
        <h1 className="mt-1 text-white">Working Envs</h1>
            <table  className = "table table-dark table-bordered">
                <thead>
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">project</th>
                    <th scope="col">node</th>
                    <th scope="col">react</th>
                    <th scope="col">angular</th>
                    </tr>
                    <tr>
                        <td className="text-center justify-content-centre" colSpan={5}>
                            <Link to="/list-project">
                                All Project environments
                            </Link>
                            <Link to="/list-project/node">
                                node Project environments
                            </Link>
                            <Link to="/list-project/react">
                                React Project environments
                            </Link>
                            <Link to="/list-project/angular">
                                Angular Project environments
                            </Link>
                        </td>
                    </tr>
                </thead>

                <tbody>
                    {filterEnvs.map((env, i )=>
                        <CodeTrainRow key = {i}
                                      {...env}
                        />
                    )}
                </tbody>
            </table>
    </div>
    )
};
CodingTrian.protoTypes = {
    codedIn : function(props){
        if(!Array.isArray(props.codedIn)){
            return new Error(
                "this should be an array"
            )
        }else if(!props.codedIn.length){
            return new Error(
                "must not be empty"
            )
        }else {
            return null
        }
    }
}
