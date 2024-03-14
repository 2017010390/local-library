const mongoose = require("mongoose");
const { DateTime } = require("luxon");

const Schema = mongoose.Schema;

// create Book brows info schema
const BookInstanceSchema = new Schema({
  book: {type: Schema.Types.ObjectId, ref: "Book", required: true},
  imprint: {type: String, required: true},
  status: {
    type: String,
    required: true,
    enum: ["Available", "Maintenance", "Loaned", "Reserved"],
    default: "Maintenance",
  },
  due_book: {type: Date, default: Date.now},
});

// virtual for bookinstance's url
BookInstanceSchema.virtual("url").get(function () {
  return `/catalog/bookinstance/${this._id}`;
});

// virtual for format the date
BookInstanceSchema.virtual("due_back_formatted").get(function (){
  return DateTime.fromJSDate(this.due_book).toLocaleString(DateTime.DATE_MED);
});

// Virtual for due_back's format
BookInstanceSchema.virtual("due_back-yyyy_mm_dd").get(function () {
  return DateTime.fromJSDate(this.due_book).toISODate();
});

// export module
module.exports = mongoose.model("BookInstance", BookInstanceSchema);