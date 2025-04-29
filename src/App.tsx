import WebFont from 'webfontloader';
import './style/bootstrap.min.css';
import './style/App.css';
import { useEffect, React, useState, useContext, useRef } from 'react';
import HeaderNav from './components/headerNav';
import { Col, Container, Row } from 'react-bootstrap';
import PatientSeach from './components/patientSearch';
import { usePatientService } from "./services/PatientService";
import { Patient } from "./model/Patient";

const App: React.FC = () => {
  const patientService = usePatientService();
  const patientsRef = useRef<Patient[]>([]);
  const [patients, setPatient] = useState(patientsRef.current);

  useEffect(() => {
    WebFont.load({
      google: {
        families:['Manrope']
      }
    });

    if(patientService !== undefined){
      patientService.getPatients().then((d) => {
        setPatient(d.data);
      }); 
     }
  },[]);

  return (
    <div className="wrapper">
      <HeaderNav />
      <div className='content'>
        <Container fluid>
          <Row>
            <Col>
             <PatientSeach patients={patients}/>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default App;

