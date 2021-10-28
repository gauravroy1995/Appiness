import { types } from '../Types/ActionTypes';

export const savePass = (text) => ({
  type: types.SAVE_PASS,
  payload: text,
});

export const saveUser = (text) => ({
  type: types.SAVE_USERNAME,
  payload: text,
});

export const resetLogin = () => ({
    type: types.RESET,
  });
