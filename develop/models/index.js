// This imports all models
const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');

// This will CREATE associations
User.hasMany(Post, {
    foreignKey: 'user_id'
  });

User.hasMany(Comment, {
    foreignKey: 'user_id'
  });

Comment.belongsTo(User, {
    foreignKey: 'user_id',
  
  });
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
  
  });


