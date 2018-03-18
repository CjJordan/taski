import React from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import Task from './Task';
import "./TodoPanel.css";


const TodoPanel = props => (
    <Col xs={9} className="todo-panel">
        <Row>
            {props.tasks.map(e => <Task task={e}/>)}
        </Row>
    </Col>
);

export default TodoPanel;