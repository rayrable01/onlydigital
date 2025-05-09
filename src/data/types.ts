export interface Event {
    year: number,
    info: string
}

export interface Data {
    id: number,
    startYear: number,
    endYear: number,
    type: string,
    events: Event[]
}
