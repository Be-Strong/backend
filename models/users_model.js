//user_model.js

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt');

const saltRounds = 10;


//USER SCHEMA
var userSchema = new Schema({

    username: {type: String, unique: true, required:true},
	  email: { type: String, unique: true, required:true},
    password: {type:String,required:true},
    firstname: String,
    lastname: String,
    age: Number,
    gender: String,
    occupation: String,
    address : String,
    city: String,
    state: String,
    country: String,
    profile_pic: String,
    role : { type : String, enum : [ 'in-treatment', 'post-treatment' ] },
    status: String,
    cancertype: String,
    cancersubtype: String,
    side_effects: String,
    symptoms: String,
    radiation_therapy: String,
    chemo_therapy: String,
    immunotherapy: String,
    targeted_therapy: String,
    stem_cell_therapy: String,
    language: String,
});

// execute before each user save call
userSchema.pre('save', function(next) {
  var user=this;

  //if the password has not changed
  if (!user.isModified("password")) return next();

  // else password has changed, hash it
  bcrypt.hash(user.password, saltRounds, function(err, hash) {

    if (err) return next(err);
    // Store hash in your password DB.
    user.password = hash;
    next();
  });

});

userSchema.methods.verifyPassword = function(password, next) {

bcrypt.compare(password,this.password, function(err,isMatched)
{
  if(err) return next(err);
  next(null, isMatched);
});
}


module.exports = mongoose.model('User', userSchema);