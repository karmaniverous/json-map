import _ from 'lodash';

/**
 * Retrieve an object from a JSON map that overrides an optional default.
 *
 * @function jsonMap
 * @param {object} input - Input object.
 * @param {string} [key] - Override key.
 * @param {string} [defaultToken] - Default token (default: 'default').
 * @param {string} [mapToken] - Map token (default: 'map').
 * @returns {object} Object at specified map key assigned over default object.
 */
export const jsonMap = (
  input = {},
  key,
  defaultToken = 'default',
  mapToken = 'map'
) => {
  // Validate inputs.
  if (!_.isPlainObject(input)) throw new Error('invalid input');
  if (
    !_.isUndefined(input[defaultToken]) &&
    !_.isPlainObject(input[defaultToken])
  )
    throw new Error('invalid input default');
  if (
    !_.isUndefined(input[mapToken]) &&
    !(
      _.isPlainObject(input[mapToken]) &&
      _.every(input[mapToken], (v) => _.isPlainObject(v) && !_.isNull(v))
    )
  )
    throw new Error('invalid input map');
  if (!_.isUndefined(key) && !_.isString(key)) throw new Error('invalid key');

  return {
    ...(input[defaultToken] ?? {}),
    ...(input[mapToken] ? input[mapToken][key] ?? {} : {}),
  };
};
