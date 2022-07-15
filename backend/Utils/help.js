module.exports = {
  /**
   * from String template to URI
   * @author Nguyen Tien Tai
   *
   * @param {string} template
   * @param {object} data
   *
   * @returns {string}
   */
  //check image =>tre
  checkUR(url) {
    return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
  },
  downloadImageFromURL: (item) => {
    let file = "./backend/Assets/" + `${item}`;
    return file;
  },
};
