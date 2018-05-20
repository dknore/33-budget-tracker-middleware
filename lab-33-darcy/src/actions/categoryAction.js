export const CATEGORY_CREATE = 'CATEGORY_CREATE';
export const CATEGORY_UPDATE = 'CATEGORY_UPDATE';
export const CATEGORY_REMOVE = 'CATEGORY_REMOVE';

export function categoryCreate(value) {
  return {type: CATEGORY_CREATE, value: value};
}

export function categoryUpdate(category) {
  return {type: CATEGORY_UPDATE, category: category};
}

export function categoryRemove(id) {
  return {type: CATEGORY_REMOVE, id};
}