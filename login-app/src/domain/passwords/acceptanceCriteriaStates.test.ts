import { AcceptanceCriteriaType } from "./types";
import { allStatesSatisfied, getIsSatisfied, updateAcceptanceCriteriaStates } from "./acceptanceStates";

describe("updateAcceptanceCriteriaStates", () => {
  it("changes isSatisified to true for pieces of criteria state that are satisfied by the password", () => {
    const priorCriteriaState = [
      {
        criteriaType: AcceptanceCriteriaType.EIGHT_PLUS_CHARS,
        isSatisfied: false,
      },
      {
        criteriaType: AcceptanceCriteriaType.CONTAINS_LOWERCASE,
        isSatisfied: false,
      },
      {
        criteriaType: AcceptanceCriteriaType.CONTAINS_UPPERCASE,
        isSatisfied: false,
      },
      {
        criteriaType: AcceptanceCriteriaType.CONTAINS_SPECIAL_CHARACTER,
        isSatisfied: false,
      },
      {
        criteriaType: AcceptanceCriteriaType.CONTAINS_NUMBER,
        isSatisfied: false,
      },
    ];

    const password = "I AM not AFRAID of the RATTLESNAKE";

    const newCriteriaState = [
      {
        criteriaType: AcceptanceCriteriaType.EIGHT_PLUS_CHARS,
        isSatisfied: true,
      },
      {
        criteriaType: AcceptanceCriteriaType.CONTAINS_LOWERCASE,
        isSatisfied: true,
      },
      {
        criteriaType: AcceptanceCriteriaType.CONTAINS_UPPERCASE,
        isSatisfied: true,
      },
      {
        criteriaType: AcceptanceCriteriaType.CONTAINS_SPECIAL_CHARACTER,
        isSatisfied: false,
      },
      {
        criteriaType: AcceptanceCriteriaType.CONTAINS_NUMBER,
        isSatisfied: false,
      },
    ];

    const result = updateAcceptanceCriteriaStates(priorCriteriaState, password);

    expect(result).toEqual(newCriteriaState);
  });

  it("changes isSatisified to false for pieces of criteria state that are not satisfied byt the password", () => {
    const priorCriteriaState = [
      {
        criteriaType: AcceptanceCriteriaType.EIGHT_PLUS_CHARS,
        isSatisfied: true,
      },
      {
        criteriaType: AcceptanceCriteriaType.CONTAINS_LOWERCASE,
        isSatisfied: true,
      },
      {
        criteriaType: AcceptanceCriteriaType.CONTAINS_UPPERCASE,
        isSatisfied: true,
      },
      {
        criteriaType: AcceptanceCriteriaType.CONTAINS_SPECIAL_CHARACTER,
        isSatisfied: true,
      },
      {
        criteriaType: AcceptanceCriteriaType.CONTAINS_NUMBER,
        isSatisfied: true,
      },
    ];

    const password = "Ahhh!";

    const newCriteriaState = [
      {
        criteriaType: AcceptanceCriteriaType.EIGHT_PLUS_CHARS,
        isSatisfied: false,
      },
      {
        criteriaType: AcceptanceCriteriaType.CONTAINS_LOWERCASE,
        isSatisfied: true,
      },
      {
        criteriaType: AcceptanceCriteriaType.CONTAINS_UPPERCASE,
        isSatisfied: true,
      },
      {
        criteriaType: AcceptanceCriteriaType.CONTAINS_SPECIAL_CHARACTER,
        isSatisfied: true,
      },
      {
        criteriaType: AcceptanceCriteriaType.CONTAINS_NUMBER,
        isSatisfied: false,
      },
    ];

    const result = updateAcceptanceCriteriaStates(priorCriteriaState, password);

    expect(result).toEqual(newCriteriaState);
  });
});

describe("getIsSatisfied", () => {
    const criteriaState = [
        {
          criteriaType: AcceptanceCriteriaType.EIGHT_PLUS_CHARS,
          isSatisfied: true,
        },
        {
          criteriaType: AcceptanceCriteriaType.CONTAINS_LOWERCASE,
          isSatisfied: false,
        },
        {
          criteriaType: AcceptanceCriteriaType.CONTAINS_UPPERCASE,
          isSatisfied: true,
        },
        {
          criteriaType: AcceptanceCriteriaType.CONTAINS_SPECIAL_CHARACTER,
          isSatisfied: false,
        },
      ];
    it('returns true when criteria type is satisfied', () => {
        const result = getIsSatisfied(criteriaState, AcceptanceCriteriaType.CONTAINS_UPPERCASE);
        expect(result).toBe(true);
    })

    it('returns false when criteria type is not satisfied', () => {
        const result = getIsSatisfied(criteriaState, AcceptanceCriteriaType.CONTAINS_SPECIAL_CHARACTER);
        expect(result).toBe(false);
    })
    it('returns false when criteria type is not in state', () => {
        const result = getIsSatisfied(criteriaState, AcceptanceCriteriaType.CONTAINS_NUMBER);
        expect(result).toBe(false);
    })
    
});

describe("allStatesSatisfied", () => {
    
    it("returns true when all states are satisfied", () => {
        const criteriaStateAllPassed = [
            {
              criteriaType: AcceptanceCriteriaType.EIGHT_PLUS_CHARS,
              isSatisfied: true,
            },
            {
              criteriaType: AcceptanceCriteriaType.CONTAINS_LOWERCASE,
              isSatisfied: true,
            },
            {
              criteriaType: AcceptanceCriteriaType.CONTAINS_UPPERCASE,
              isSatisfied: true,
            },
            {
              criteriaType: AcceptanceCriteriaType.CONTAINS_SPECIAL_CHARACTER,
              isSatisfied: true,
            },
          ];
        expect(allStatesSatisfied(criteriaStateAllPassed)).toBe(true);
    });

    it("returns fasle when one or more states are unsatisfied", () => {
        const criteriaStateNotAllPassed = [
            {
              criteriaType: AcceptanceCriteriaType.EIGHT_PLUS_CHARS,
              isSatisfied: true,
            },
            {
              criteriaType: AcceptanceCriteriaType.CONTAINS_LOWERCASE,
              isSatisfied: true,
            },
            {
              criteriaType: AcceptanceCriteriaType.CONTAINS_UPPERCASE,
              isSatisfied: true,
            },
            {
              criteriaType: AcceptanceCriteriaType.CONTAINS_SPECIAL_CHARACTER,
              isSatisfied: false,
            },
          ];
        expect(allStatesSatisfied(criteriaStateNotAllPassed)).toBe(false);

    })
})