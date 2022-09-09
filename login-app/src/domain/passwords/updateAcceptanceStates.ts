import { makePasswordCriteriaValidator } from "./makePasswordCritirieaValidator";
import { AcceptanceCriteriaState } from "./types";

export const updateAcceptanceCriteriaStates = (
  states: AcceptanceCriteriaState[],
  password: string
): AcceptanceCriteriaState[] => {
  return states.map((state) => {
    const validator = makePasswordCriteriaValidator(state.criteriaType);
    const isSatisfied = validator(password);
    return {
      ...state,
      isSatisfied,
    };
  });
};
