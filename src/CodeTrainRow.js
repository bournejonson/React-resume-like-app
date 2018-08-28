import React, { Component } from 'react';
import { GoOctoface } from "react-icons/go"
import PropTypes from 'prop-types';
export const CodeTrainRow = ({project, date, node, react, angular}) => (
    <tr scope="row">
        <td>
            {date}
        </td>
        <td>{project}</td>
        <td>{(node ? <GoOctoface/> : null)}</td>
        <td>{(react ? <GoOctoface/> : null)}</td>
        <td>{(angular ? <GoOctoface/> : null)}</td>
    </tr>

)

CodeTrainRow.propTypes = {
    project : PropTypes.string.isRequired,
    date : PropTypes.string.isRequired,
    node : PropTypes.bool,
    react : PropTypes.bool,
    angular : PropTypes.bool
}
