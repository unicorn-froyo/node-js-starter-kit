/**
 * Simple HelloWorld Object used to write a message to log
 */
export default class HelloWorld {
  /**
   *
   *  Constructor Method
   *
   * @param {object} options An options object
   * @param {string} options.message The message for the HelloWorld object
   * @param {console} options.logger Logger object (default: console)
   */
  constructor(options) {
    this.message = options.message;
    this.logger = options.logger || console;
  }

  /**
   * Write the message to log
   *
   * @returns {void}
   */
  writeToLog() {
    this.logger.info(this.message);
  }
}
