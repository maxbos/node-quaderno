class QuadernoError extends Error {
  constructor(obj) {
    const message = obj.errors ? JSON.stringify(obj.errors) :
      obj.error;
    super(message);
    this.obj = obj;
  }
}

module.exports = QuadernoError;
