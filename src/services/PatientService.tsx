import { createContext, FC, useContext } from "react"
import { IPatientService } from "./IPatientService"
import { Patient } from "../model/Patient";
import axios from "axios";

export const PatientServiceContext = createContext<IPatientService | undefined>(undefined);

export const usePatientService = () => {
    const context = useContext<IPatientService | undefined>(PatientServiceContext);

    return context;
};

const PatientService: FC = ({children}: any) => {
    const patientsService = {
        async getPatients(): Promise<Patient[]>{
            //Call Api here
            return await axios.get('https://fedskillstest.coalitiontechnologies.workers.dev',{
                auth:{
                   username: 'coalition',
                   password: 'skills-test' 
                }
            });
        }
    }

    return (
        <>
            <PatientServiceContext.Provider value={patientsService}>
                {children}
            </PatientServiceContext.Provider>
        </>
    )
}

export default PatientService