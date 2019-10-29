const express = require("express");
const router = express.Router();

const jobs = [
  {
    title: "Time Traveller",
    company: "Not Yet Invented",
    link: "www.nowisthefuture.com"
  }
];

router.route("/").get((req, res) => {
  // 1. Respond with the array of jobs
  res.status(200).send({
    data: jobs
  });
});

router.route("/add").post((req, res) => {
  // 1. Grab the new job infomration from the request body
  const { title, company, link } = req.body;

  // 2. Push the job to our job array
  jobs.push({
    title: title,
    company: company,
    link: link
  });

  // 3. Respond with the updated jobs array
  res.status(200).send({
    data: jobs
  });
});
