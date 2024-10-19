import { createSelector } from "@reduxjs/toolkit";

const getCounterValue = (state) => state.counter;

export const counterSelector = createSelector(getCounterValue, (state) => state.value);