import { AcceptanceCriteriaType } from "./types";

//note if I had more time I would try and avoid regex because none can read it
//after a quick search through npm packages everything seemed too opinionated for 
//this use case and in somewhat poor style, at least there are unit tests


export const makePasswordCriteriaValidator = (criteriaType : AcceptanceCriteriaType) : (password: string) => boolean => {
    switch(criteriaType){
        case AcceptanceCriteriaType.EIGHT_PLUS_CHARS:
            return (password: string) => password.length >= 8;
        case AcceptanceCriteriaType.CONTAINS_LOWERCASE:
            return (password: string) => !!password.match('(?=.*[a-z])');
        case AcceptanceCriteriaType.CONTAINS_UPPERCASE:
            return (password: string) => !!password.match('(?=.*[A-Z])');
        case AcceptanceCriteriaType.CONTAINS_NUMBER:
            return (password: string) => !!password.match('(?=.*[0-9])');
        case AcceptanceCriteriaType.CONTAINS_SPECIAL_CHARACTER:
            return (password: string) => !!password.match('(?=.*[-+_!@#$%^&*.,?])')
        default:
            throw new Error('Password Criteria Type Not Implemented')
    }
}