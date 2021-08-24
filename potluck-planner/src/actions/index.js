export const ADD_POTLUCK = "ADD_POTLUCK";

export const addPotluck = (potluck) => {
  return { type: ADD_POTLUCK, payload: potluck };
};
