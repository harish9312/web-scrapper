const axios = require("axios");
const cheerio = require("cheerio");
var fs = require("fs");


axios
  .get(url)
  .then(res => {
    const skills = [];
    const $ = cheerio.load(res.data);
    $("li").each((i, elem) => {
      skills.push({
        title: $(elem)
          .find("a")
          .attr("title"),
        skillCode: $(elem)
          .find("a")
          .attr("title")
      });
    });
    fs.writeFile("./sk.json", JSON.stringify(skills), function(err) {
      if (err) {
        console.log(">> err", err);
      }
      console.log(">> File Written");
    });
  })
  .catch(err => {
    console.log(">> err", err);
  });
