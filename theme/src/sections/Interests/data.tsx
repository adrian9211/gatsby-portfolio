import { graphql, useStaticQuery } from 'gatsby';

export interface CoreLanguage {
    name: string;
    years: string;
    note: string;
}

export interface Skill {
    label: string;
    category: string;
    years: string;
    note: string;
}

interface InterestsSectionQueryResult {
    allInterestsJson: {
        sections: {
            coreLanguages: CoreLanguage[];
            interests: Skill[];
        }[];
    };
}

export const useLocalDataSource = (): InterestsSectionQueryResult => {
    return useStaticQuery(graphql`
        query InterestsSectionQuery {
            allInterestsJson {
                sections: nodes {
                    coreLanguages {
                        name
                        years
                        note
                    }
                    interests {
                        label
                        category
                        years
                        note
                    }
                }
            }
        }
    `);
};
