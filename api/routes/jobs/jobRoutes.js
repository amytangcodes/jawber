// Define a jobs array to hold all of our jobs
const jobs = []

const express = require('express');
const router = express.Router();

router.route('/')
    .get((req, res) => {
        // 1. Respond with array jobs.
        res.status(200).send({
            data: jobs
        });
    });

router.route('/add')
    .post((req, res) => {
        // 1. Grab the new job information from the request body.
        const { title, company, link } = req.body;

        // 2. Push the job to our job array
        jobs.push({
            title: title,
            company: company,
            link: link
        });

        // 3. Respond with the updated jobs array.
        res.status(200).send({
            data: jobs
        });
    });

// Export the router
exports.router = router;