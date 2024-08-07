/**
 * Returns the names of the _typed_ enumerable string properties and methods of an object.
 *
 * Note: Limiting Object.keys to a specific type may lead to inconsistencies between type-checking and runtime behavior.
 * Use this function when you are certain of the objects keys.
 */
export const getTypedObjectKeys = Object.keys as <T extends object>(
  o: T,
  // Using `ToStringKey` because Object.keys returns all keys as strings.
) => ToStringKey<T>[]

/**
 * Returns an array of _typed_ values of the enumerable properties of an object.
 */
export const getTypedObjectValues = Object.values as <T extends object>(o: T) => T[keyof T][]

/**
 * Returns an array of _typed_ key/values of the enumerable properties of an object.
 *
 * Note: Limiting Object.entries to a specific type may lead to inconsistencies between type-checking and runtime behavior.
 * Use this function when you are certain of the objects keys.
 */
export const getTypedObjectEntries = Object.entries as <T extends object>(
  o: T,
  // Using `ToStringKey` because Object.entries returns all keys as strings.
) => [ToStringKey<T>, T[keyof T]][]

/**
 * Converts object keys to their string literal types.
 */
type ToStringKey<T> = `${Extract<keyof T, string | number>}`
