var express = require("express");
var router = express.Router();
var request = require("request-promise");
var cheerio = require("cheerio");



// A GET request to scrape 

module.exports = {
    getNews: (req, res) => {
        console.log("Hit news controller!");
        // First, we grab the body of the html with request
        var scrapedArticles = [];
        request("https://www.coindesk.com/", (error, response, html) => {

            // Then, we load that into cheerio and save it to $ for a shorthand selector
            var $ = cheerio.load(html);

            // Make emptry array for temporarily saving and showing scraped Articles.
            // Now, we grab every article tag, and do the following:
            $(".stream-article").each(function (i, element) {
                // Save an empty result object
                var result = {};

                // News story title
                result.title = $(this).find(".meta").find("h3").text()
                console.log($(this).find(".meta").find("h3").text());

                // Picture for news story
                result.link = $(this).find(".image").find("img").attr("src");
                console.log($(this).find(".image").find("img").attr("src"));

                // Date and Time in string format of news story
                result.datetime = $(this).find(".time").find("time").attr("datetime");
                console.log($(this).find(".time").find("time").attr("datetime"));

                // Synopsis of news story
                result.synop = $(this).find(".meta").find("p").text()
                console.log($(this).find(".meta").find("p").text());

                // Href Link to news article
                result.href = $(this).attr("href");
                console.log($(this).attr("href"));

                scrapedArticles.push(result);
                console.log(scrapedArticles);
            });

        }).then((data) => {
            return res.json(scrapedArticles);
        });
    }
}


