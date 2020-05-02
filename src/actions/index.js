import { AGE_UP_ASYNC } from "../constants";
import { AGE_UP } from "../constants";
import { AGE_DOWN } from "../constants";

export function ageUpAsync(age) {
  return {
    type: AGE_UP_ASYNC,
    state: age,
  };
}

export function ageUp(age) {
  return {
    type: AGE_UP,
    state: age,
  };
}

export function ageDown(age) {
  return { 
    type: AGE_DOWN, 
    state: age 
  };
}
