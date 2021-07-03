/**
 * Global setter of weather print should be shown.
 */
export let DISABLE_PRINT = false;

export class Log {
  private disable: boolean = false;
  constructor(options?: { disable: boolean }) {
    this.disable = options?.disable ?? false;
  }

  /**
   * Log message based on the debug.
   * @param object or functions name.
   * @param message of the debug.
   */
  print(object: any, message: string) {
    let className;
    if (typeof object === "string") {
      className = object?.toString();
    } else {
      className =
        object?.constructor?.name ?? object?.toString() ?? "[UNDEFINED]";
    }

    className = className.replace(/[^\w]+/g, "");
    const res = className.toString() + "(): " + message?.toString();

    if (!DISABLE_PRINT && !this.disable) console.log(res);
    return res;
  }
}
