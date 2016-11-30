var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  cover: {
    type: String
  },
  body: {
    type: String,
    required: true
  },
  author: {
    type: String, //this type will change to user object
    required: true
  },
  postDate: {
    type: Date,
    required: true
  },
  summary: {
    type: String,
    required: true
  }
});

postSchema.pre('findOneAndUpdate', function(){
  this.update({},{ $set: { postDate: new Date() } });
});

postSchema.pre('findOneAndUpdate', function(post){
  this.update({},{ $set: { summary: this.body.slice(0, 100) + '...'} });
});

var Post = mongoose.model('Post', postSchema);
module.exports = Post;
