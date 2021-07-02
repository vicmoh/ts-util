/**
 * Sleep and await the function
 * certain amount of time in milliseconds
 * @param ms milliseconds.
 */
 export function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}