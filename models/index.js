const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// May/ may not be neccessaey
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
// may change to userId
Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
  foreignKey: 'post.id',
  onDelete: 'CASCADE'
})

Comment.belongsTo(User, {
  foreignKey: 'user.id',
  onDelete: 'CASCADE'
})

module.exports = { User, Post, Comment };
