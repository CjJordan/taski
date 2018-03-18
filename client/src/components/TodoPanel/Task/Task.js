import React from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import "./Task.css";


const Task = props => (
    <Col xs={12}>
        <span className={props.task.complete ? "strike": ""}> 
       {props.task.title} 
       </span>
    </Col>
);

export default Task;