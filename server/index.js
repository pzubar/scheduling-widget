const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const API_URL = 'https://johnny-appleseed.clientsecure.me';
const app = express();

const customRouter = function (req) {
  return req.headers['base-url'];
};

app.use(
  '/api',
  createProxyMiddleware({
    target: API_URL,
    router: customRouter,
    changeOrigin: true,
    pathRewrite: (path) => path.replace('/api', '/client-portal-api'),
  })
);
app.listen(3000);

module.exports = app;

// const express = require('express');
// const app = express();
// const request = require('request');
//

//
// app.get('/api/services', async (req, res) => {
//   request(
//     `${API_URL}/cpt-codes?filter[clinicianId]=${req.query.clinicianId}`
//   ).pipe(res);
//   // const response = await fetch(
//   //   `${API_URL}/cpt-codes?filter[clinicianId]=${req.query.clinicianId}`,
//   //   {
//   //     headers: DEFAULT_HEADERS,
//   //   }
//   // );
//   //
//   // response.body.pipe(res);
//   // res.send(
//   //   JSON.stringify({
//   //     data: [
//   //       {
//   //         id: '3866',
//   //         type: 'cptCodes',
//   //         links: {
//   //           self: 'https://johnny-appleseed.clientsecure.me/client-portal-api/cpt-codes/3866',
//   //         },
//   //         attributes: {
//   //           description: 'Psychiatric Diagnostic Evaluation',
//   //           duration: 50,
//   //           rate: '100.0',
//   //           callToBook: 'false',
//   //         },
//   //       },
//   //       {
//   //         id: '31822614',
//   //         type: 'cptCodes',
//   //         links: {
//   //           self: 'https://johnny-appleseed.clientsecure.me/client-portal-api/cpt-codes/31822614',
//   //         },
//   //         attributes: {
//   //           description: 'Intro Call',
//   //           duration: 15,
//   //           rate: '0.0',
//   //           callToBook: 'false',
//   //         },
//   //       },
//   //     ],
//   //     links: {
//   //       first:
//   //         'https://johnny-appleseed.clientsecure.me/client-portal-api/cpt-codes?page%5Bnumber%5D=1&page%5Bsize%5D=10',
//   //       last: 'https://johnny-appleseed.clientsecure.me/client-portal-api/cpt-codes?page%5Bnumber%5D=1&page%5Bsize%5D=10',
//   //     },
//   //   })
//   // );
// });
//
// app.listen(3000);
//
// module.exports = app;
