export interface WordBank {
    name: string;
    words: Array<Word>;
}

export interface Word {
    name: string;
    synonyms: Array<string>;
}

/**
 * @property saved true if the word has already been saved into the bank.
 * @property saving transient state when user clicks to save word and word is being saved.
 */
export interface RowState {
    saved: boolean;
    saving: boolean;
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
