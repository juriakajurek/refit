"use strict";
const puppeteer = require("puppeteer");
const nodemailer = require("nodemailer");

module.exports = {
  generatePDF: async (ctx) => {
    var url = new URL(`http://${ctx.request.header.host}${ctx.request.url}`);
    var params = new URLSearchParams(url.search);
    var valuationId = params.get("valuationId");
    var documentDate = params.get("documentDate");
    var name = params.get("name");

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(
      `http://www.refit.pl/valuation?valuationonly=${"true"}&valuationId=${valuationId}&documentDate=${documentDate}&name=${name}`,
      {
        waitUntil: "networkidle2",
      }
    );

    var buff;
    var contentHeight;
    var count = 0;
    var maxTries = 50;
    while (true) {
      try {
        await page
          .evaluate(() => {
            return document.documentElement.offsetHeight;
          })
          .then((e) => {
            console.log("pageHeight i 2xmargin");
            console.log(e);
            contentHeight = e;
            console.log(contentHeight);
          });
        if (contentHeight > 0) break;
      } catch (e) {
        if (++count >= maxTries) throw e;
      }
    }

    await page
      .pdf({
        height: `${contentHeight + 10}px`,
        printBackground: true,
      })
      .then((v) => {
        buff = v;
        console.log(v);
      });

    ctx.type = "application/pdf";
    ctx.set("Content-Disposition: attachment");
    ctx.attachment("./Wycena Refit.pdf");
    ctx.body = buff;

    page.close();
    browser.close();

    return ctx.body;
  },
  printPDF: async (ctx) => {
    var url = new URL(`http://${ctx.request.header.host}${ctx.request.url}`);
    var params = new URLSearchParams(url.search);
    var valuationId = params.get("valuationId");
    var documentDate = params.get("documentDate");
    var name = params.get("name");

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(
      `http://www.refit.pl/valuation?printmode=${"true"}&valuationId=${valuationId}&documentDate=${documentDate}&name=${name}`,
      {
        waitUntil: "networkidle2",
      }
    );

    var buff;
    await page
      .pdf({
        printBackground: true,
        format: "A4",
        margin: {
          top: "1.5cm",
          bottom: "1.5cm",
        },
      })
      .then((v) => {
        buff = v;
        console.log(v);
      });

    ctx.type = "application/pdf";
    ctx.set("Content-Disposition: attachment");
    ctx.attachment("./Wycena Refit.pdf");
    ctx.body = buff;

    page.close();
    browser.close();

    return ctx.body;
  },

  sendMail: async (ctx) => {
    var url = new URL(`http://${ctx.request.header.host}${ctx.request.url}`);
    var params = new URLSearchParams(url.search);
    var valuationId = params.get("valuationId");
    var documentDate = params.get("documentDate");
    var name = params.get("name");
    var email = params.get("email");

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "eldiareq@gmail.com",
        pass: "CholeRA733",
      },
    });
    var mailOptions = {
      from: "refit@gmail.com",
      to: email,
      subject: `refit - wycena z dnia ${documentDate}`,
      headers: {
        "MIME-Version": "1.0",
        "Content-type": "text/html",
        charset: "UTF-8",
      },

      html:
        "<!DOCTYPE html>" +
        "<html><head><title>Appointment</title>" +
        "</head><body><div>" +
        "<p>Cześć!</p>" +
        "<p>Dziękujemy za skorzystanie z naszego kalkulatora wycen. </p>" +
        `<p>Pod tym linkiem znajdziesz wygenerowaną wycenę: </p><a href='http://www.refit.pl/valuation?emailmode=${"true"}&valuationId=${valuationId}&documentDate=${documentDate}&name=${name}'>WYCENA Z DNIA ${documentDate}</a>` +
        "<br />" +
        "<p>Jeżeli masz jakiekolwiek pytania, bądź jesteś zainteresowany współpracą - czekamy na kontakt!</p>" +
        `<p>Pozdrawiamy</p>` +
        '<img src="http://refit.pl/logo.png" alt="" width="160">' +
        `<p>889 000 302</p>` +
        `<p>889 000 602</p>` +
        `<p>kontakt@refit.pl</p>` +
        "</div></body></html>",
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    return "Wiadomośc wysłana! Możesz zamknąć tę kartę przeglądarki. ";
  },
};
