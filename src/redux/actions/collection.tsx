import store from '../store';
import {deleteItem, saveData, updateItem} from '../reducers/collection';

export const saveDataCollection = (data: any) => {
  store.dispatch(saveData(data));
};

export const updateDataCollection = (item: any) => {
  store.dispatch(updateItem(item));
};

export const deleteItemCollection = (id: any) => {
  store.dispatch(deleteItem(id));
};
