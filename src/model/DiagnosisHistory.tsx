export interface DiagnosisHistory {
    month: string,
    year: number,
    blood_pressure: {
        systolic: {
            value: number,
            levels: string
        },
        diastolic: {
            value: number,
            levels: string
        }
    },
    heart_rate: {
        value: number,
        levels: string
    },
    respiratory_rates: {
        value: number,
        levels: string
    },
    temperature: {
        value: number,
        levels: string
    }
}
