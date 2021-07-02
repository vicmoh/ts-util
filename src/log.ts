/**
 * Log message based on the debug.
 * @param object or functions name.
 * @param message of the debug.
 */
export function log(object: any, ...message: any) {
  let className;
  if (typeof object === "string") {
    className = object?.toString();
  } else {
    className =
      object?.constructor?.name ?? object?.toString() ?? "[UNDEFINED]";
  }

  className = className.replace(/[^\w]+/g, "");
  const res = className.toString() + "(): " + message.toString();
  console.log(res);
  return res;
}
