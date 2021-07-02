/**
 * Parse the error object and get the error message.
 * @return string of the error message.
 */
export function parseError(err: any): string {
  try {
    return err?.message ?? err?.toString();
  } catch (err) {
    return err?.toString();
  }
}
