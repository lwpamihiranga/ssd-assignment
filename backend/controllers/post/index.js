const Post = require('../../models/post');

/**
 * Retrieve all posts
 * @param {object} req
 * @param {object} res
 * @returns response
 */
exports.getAllPostContoller = (req, res) => {
    Post.find({}).exec((err, posts) => {
        if (err) return res.status(404).json({ message: 'No post found!' });
        if (posts) return res.status(200).json({ data: posts });
    });
};
