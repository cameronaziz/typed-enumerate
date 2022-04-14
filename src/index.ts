import { Entries, Keys, Values } from './types';

const entries = <T extends object>(obj: T): Entries<Required<T>> => Object.entries(obj) as Entries<T>;

const keys = <T extends object>(obj: T): Keys<T> => Object.keys(obj) as Keys<T>;

const values = <T extends object>(obj: T): Values<T> => Object.values(obj) as Values<T>;

const object = {
  entries,
  keys,
  values,
};

export default object;
