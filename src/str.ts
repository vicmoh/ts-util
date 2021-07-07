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
   * Replace the character of a string
   * with another character.
   * @param str string of a certain
   * character to be replaced.
   * @param index of the string where the
   * character will be replaced.
   * @param rep is the new character string
   * the is placed based on the index.
   * @return string where character has been changed.
   */
  repCharAt(index: number, rep: string) {
    return (
      this.value.substr(0, index) + rep + this.value.substr(index + rep.length)
    );
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
