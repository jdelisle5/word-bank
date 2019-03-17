export interface WordBank {
    name: string;
    words: Array<Word>;
}

export interface Word {
    name: string;
    synonyms: Array<string>;
}


export const testWordBanks: Array<WordBank> = [
    {
        name: "happy blog",
        words: [
            {
                name: "happy",
                synonyms: [ "joyful", "delighted" ]
            },
            {
                name: "sad",
                synonyms: ["glib", "unhappy"]
            }
        ]
    },
    {
        name: "work writtings",
        words: [
            {
                name: "job",
                synonyms: ["employement", "duty"]
            },
            {
                name: "work",
                synonyms: ["effort", "exertion"]
            }
        ]
    }
];
