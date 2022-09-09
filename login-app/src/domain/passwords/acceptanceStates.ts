import { makePasswordCriteriaValidator } from "./makePasswordCritirieaValidator";
import { AcceptanceCriteriaState, AcceptanceCriteriaType } from "./types";

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

export const getIsSatisfied = (
  states: AcceptanceCriteriaState[],
  criteriaType: AcceptanceCriteriaType
) => {
  const matchingState = states.find(
    (state) => state.criteriaType === criteriaType
  );
  if (!matchingState) return false;
  return matchingState.isSatisfied;
};
