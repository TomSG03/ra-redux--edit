import { 
  ADD_ITEM, 
  CHANGE_FIELD, 
  UPDATE_ITEM,
  CLEAR_FIELD,
  CHANGE_FIND_FIELD,
  CLEAR_FIND_FIELD,
  EDIT_ITEM,
  REMOVE_ITEM,
} from './actionTypes';

  export function addItem(name, price) {
    return {type: ADD_ITEM, payload: {name, price}};
  }
  
  export function changeField(name, price) {
    return {type: CHANGE_FIELD, payload: {name, price}};
  }

  export function updateItem(name, price) {
    return {type: UPDATE_ITEM, payload: {name, price}};
  }

  export function clearField() {
    return {type: CLEAR_FIELD, payload: ''};
  }

  export function changeFindField(name, value) {
    return {type: CHANGE_FIND_FIELD, payload: {name, value}};
  }

  export function clearFindField() {
    return {type: CLEAR_FIND_FIELD, payload: ''};
  }

  export function editItem(item) {
    return {type: EDIT_ITEM, payload: {item}};
  }

  export function removeItem(item) {
    return {type: REMOVE_ITEM, payload: item};
  }
  

