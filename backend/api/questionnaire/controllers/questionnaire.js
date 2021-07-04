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
      `http://localhost:8000/valuation?valuationonly=${"true"}&valuationId=${valuationId}&documentDate=${documentDate}&name=${name}`,
      {
        waitUntil: "networkidle2",
      }
    );

    var buff;
    await page
      .pdf({
        format: "A4",
        printBackground: true,
        margin: {
          top: "64px",
          bottom: "64px",
        },
        // headerTemplate:
        //   '<div id="header-template" style="font-size:10px !important; color:#808080; padding-left:10px"><span class="date"></span><span class="title"></span><span class="url"></span><span class="pageNumber"></span><span class="totalPages"></span></div>',
        // footerTemplate:
        //   '<div id="footer-template" style="font-size:10px !important; color:#808080; padding-left:10px"><span class="date"></span><span class="title"></span><span class="url"></span><span class="pageNumber"></span><span class="totalPages"></span></div>',
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

    return ctx.body;
  },

  sendMail: async (ctx) => {
    var url = new URL(`http://${ctx.request.header.host}${ctx.request.url}`);
    var params = new URLSearchParams(url.search);
    var valuationId = params.get("valuationId");
    var documentDate = params.get("documentDate");
    var name = params.get("name");
    var email = params.get("email");

    console.log("A TERAZ JESTEM TU ");

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "eldiareq@gmail.com",
        pass: "CholeRA123",
      },
    });
    var mailOptions = {
      from: "refit@gmail.com",
      to: email,
      subject: `refit - wycena z dnia ${documentDate}`,
      text: `Cześć!

Dziękujemy za skorzystanie z naszego kalkulatora wycen.
Pod tym linkiem znajdziesz wygenerowaną wycenę:
  http://localhost:8000/valuation?emailmode=${"true"}&valuationId=${valuationId}&documentDate=${documentDate}&name=${name}

Jeżeli masz jakiekolwiek pytania, bądź jesteś zainteresowany współpracą - czekamy na kontakt!

Pozdrawiamy
refit
889 000 302
889 000 602
kontakt@refit.pl`,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    return "Wiadomośc wysłana!";
  },
};
