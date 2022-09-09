import { makePasswordCriteriaValidator } from "./makePasswordCritirieaValidator"
import { AcceptanceCriteriaType } from "./types"


describe("makePasswordCriteriaValidator", () => {
    it('makes a validator for over 8 chars that returns true when password >= 8 chars and false when not', () => {
        const eightCharPlusValidator = makePasswordCriteriaValidator(AcceptanceCriteriaType.EIGHT_PLUS_CHARS);
        const passingString = 'longer than eight';
        const failingString = 'seven';
        expect(eightCharPlusValidator(passingString)).toBe(true);
        expect(eightCharPlusValidator(failingString)).toBe(false);
    });

    it('makes a validator for contains lowercase that returns true when password contains lowercase and false when not', () => {
        const containsLowercaseValidator = makePasswordCriteriaValidator(AcceptanceCriteriaType.CONTAINS_LOWERCASE);
        const passingString = 'small text';
        const failingString = 'BIG TEXT';
        expect(containsLowercaseValidator(passingString)).toBe(true);
        expect(containsLowercaseValidator(failingString)).toBe(false);
    });

    it('makes a validator for contains uppercase that returns true when password contains uppercase and false when not', () => {
        const containsUppercaseValidator = makePasswordCriteriaValidator(AcceptanceCriteriaType.CONTAINS_UPPERCASE);
        const failingString = 'small text';
        const passingString = 'BIG TEXT';
        expect(containsUppercaseValidator(passingString)).toBe(true);
        expect(containsUppercaseValidator(failingString)).toBe(false);
    });

    it('makes a validator for contains number that returns true when password contains number and false when not', () => {
        const containsNumberValidator = makePasswordCriteriaValidator(AcceptanceCriteriaType.CONTAINS_NUMBER);
        const failingString = 'this is the number seven';
        const passingString = 'oh look a 12';
        expect(containsNumberValidator(passingString)).toBe(true);
        expect(containsNumberValidator(failingString)).toBe(false);
    });

    it('makes a validator for contains special character that returns true when password contains special character and false when not', () => {
        const containsSpecialCharacterValidator = makePasswordCriteriaValidator(AcceptanceCriteriaType.CONTAINS_SPECIAL_CHARACTER);
        const failingString = 'boring normal characters';
        const passingString = 'spec!al_ch&rechter$';
        expect(containsSpecialCharacterValidator(passingString)).toBe(true);
        expect(containsSpecialCharacterValidator(failingString)).toBe(false);
    });
})