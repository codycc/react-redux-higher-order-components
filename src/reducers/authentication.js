import {CHANGE_AUTH} from '../actions/types';

export default function(state = false, action) {
  switch(switch.type) {
  case CHANGE_AUTH:
    return action.payload;
  }

  return state;
}
