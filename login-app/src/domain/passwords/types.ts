export enum AcceptanceCriteriaType {
    EIGHT_PLUS_CHARS = 'eightPlusCharacters',
    CONTAINS_LOWERCASE = 'containsLowerCase',
    CONTAINS_UPPERCASE = 'containsUpperCase',
    CONTAINS_NUMBER = 'containsNumber',
    CONTAINS_SPECIAL_CHARACTER = 'containsSpecialCharacter'
};

export type AcceptanceCriteriaState = {
    criteriaType: AcceptanceCriteriaType,
    isSatisfied: boolean,
}