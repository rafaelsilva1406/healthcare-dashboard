import { Col, ListGroup, Row } from "react-bootstrap";
import { Patient } from "../model/Patient";
import Search from "../assets/Search.svg?react";
import PatientProps from "./PatientProps";

const PatientSeach = ({patients}: PatientProps) => {
    return(
        <>
            <Row>
                <Col>
                <h1>Patient Search</h1>
                </Col>
                <Col>
                    <Search />
                </Col>
            </Row>
            <ListGroup>
            {patients.map((p, i) => (
                <ListGroup.Item key={i} action href={"#"+i}>
                    {p.name}
                </ListGroup.Item>
            ))}
        </ListGroup>
        </>
    );
};

export default PatientSeach;