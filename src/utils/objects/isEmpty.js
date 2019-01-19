/**
 * Return true if target object is empty, and vice versa
 *
 * @param  {Object} as - the target object
 *
 * @return {bool} true if target object is empty.
 */
export default function isEmpty(as) {
  let objectIsEmpty = true;

  if (!as) {
    return true;
  }

  Object.keys(as).forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(as, key)) {
      objectIsEmpty = false;
    }
  });

  return objectIsEmpty;
}
