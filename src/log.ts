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
  print(object: any, message: any) {
    let className;
    if (typeof object === "string") {
      className = object?.toString();
    } else {
      className =
        object?.constructor?.name ?? object?.toString() ?? "[UNDEFINED]";
    }

    className = className.replace(/[^\w]+/g, "");
    let mess: string = message?.toString();
    try {
      if (typeof message === "object") mess = JSON.stringify(message ?? "{}");
    } catch (err) {
      mess = message?.toString();
    }
    const res = className.toString() + "(): " + mess;

    if (!DISABLE_PRINT && !this.disable) console.log(res);
    return res;
  }
}
