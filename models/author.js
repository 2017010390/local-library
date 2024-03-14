const mongoose = require("mongoose");
const { DateTime } = require("luxon");
const Schema = mongoose.Schema;

// set the author data's struct
const AuthorSchema = new Schema({
  first_name: {type: String, required: true, maxLength: 100},
  family_name: { type: String, required: true, maxLength: 100},
  date_of_birth: {type: Date},
  date_of_death: {type: Date},
});

// virtual for author's fullname
AuthorSchema.virtual('name').get(function (){
  let fullname = "";
  fullname = `${this.family_name ? this.family_name : ''}, ${this.first_name ? this.first_name : ''}`;
  return fullname;
});
// virtual for author's URL
AuthorSchema.virtual('url').get(function (){
  return `/catalog/author/${this._id}`;
});

AuthorSchema.virtual("date_of_birth_formatted").get(function () {
  return this.date_of_birth ? DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATE_MED) : '';
});

AuthorSchema.virtual("date_of_death_formatted").get(function () {
  return this.date_of_death ? DateTime.fromJSDate(this.date_of_death).toLocaleString(DateTime.DATE_MED) : '';
})

// export model
module.exports = mongoose.model("Author", AuthorSchema);

