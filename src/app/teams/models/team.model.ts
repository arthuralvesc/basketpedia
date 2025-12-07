export interface Team {
    id: number;
    abbreviation: string;
    name: {
        city: string;
        name: string;
    },
    conference: string;
    division: string;
    championships: number;
}