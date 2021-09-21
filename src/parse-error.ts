/**
 * Parse the error object and get the error message.
 * @return string of the error message.
 */
export function parseError(err: any): string {
  if (typeof err?.message === "string" || err?.message instanceof String)
    return err?.message ?? err?.toString();
  else return err?.toString();
}
