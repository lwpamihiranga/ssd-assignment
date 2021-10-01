const Post = require('../../models/post');
const { validationResult } = require('express-validator');
const fs = require('fs');
const PDFGenerator = require('pdfkit');

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

/**
 * Save new post
 * @param {object} req
 * @param {object} res
 * @returns response
 */
exports.savePostController = (req, res) => {
    const pdfId = Date.now().toString();
    const fileName = `${pdfId}.pdf`;
    const { title, body, url } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const firstError = errors.array().map((error) => error.msg)[0];
        return res.status(422).json({
            message: firstError,
        });
    } else {
        // initialize pdf generator
        let theOutput = new PDFGenerator();

        // pipe to a writable stream which would save the result into the same directory
        theOutput.pipe(fs.createWriteStream(`./uploads/pdfs/${pdfId}.pdf`));

        theOutput.text(`Title: ${title}`, { bold: true });

        theOutput.text(`Body: ${body}`);

        theOutput.text(`Image URL: ${url}`);

        // write out file
        theOutput.end();

        const post = new Post({ title, fileName, body, url });

        post.save((err, post) => {
            if (post) {
                res.status(201).json({
                    data: post,
                });
            } else if (err) {
                res.status(401).json({ message: 'Something went wrong' });
            }
        });
    }
};
