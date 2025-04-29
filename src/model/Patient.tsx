import { DiagnosisHistory } from "./DiagnosisHistory";
import { DiagnosticList } from "./DiagnosticList";

export interface Patient {
    name: string,
    gender: string,
    age: number,
    profile_picture: string,
    date_of_birth: string,
    phone_number: string,
    emergency_contact: string,
    insurance_type: string,
    diagnosis_history: DiagnosisHistory[],
    diagnostic_list: DiagnosticList[],
    lab_results: []
}