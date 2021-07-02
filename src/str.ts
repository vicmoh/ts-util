/**
 * Shorter version of initializing
 * the String utility.
 */
export function str(val: string) {
  return new StringUtil(val);
}

/**
 * String utility class.
 */
export class StringUtil {
  /**
   * The string to be modified.
   */
  private value: string = "";

  /**
   * Construct the string utility.
   * @param value to be modified.
   */
  constructor(value: string) {
    let toBeAssign = value;
    if (value === null || value === undefined) toBeAssign = "";
    this.value = toBeAssign;
  }

  /**
   * Convert all words in sentences of the first char
   * to upper case.
   */
  toAllWordsFirstCharUpper() {
    return this.value
      .split(" ")
      .map((each) => new StringUtil(each).toFirstCharUpper())
      .reduce((sentence, word) => sentence + " " + word)
      .trim();
  }

  /**
   * Modified the string so that the string first char
   * will be upper case.
   */
  toFirstCharUpper(): string {
    const firstChar = this.value.charAt(0).toUpperCase();
    return firstChar + this.value.substring(1, this.value.length);
  }
}
