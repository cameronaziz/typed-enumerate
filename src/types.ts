export type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export type Keys<T> = (keyof T)[];

export type Values<T> = (T[keyof T])[];