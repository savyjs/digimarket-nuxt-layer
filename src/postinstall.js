/*
safely save your installment time
 */
try {
  let axios = require('axios');
  let server = 'https://analyze.savyjs.com/installs'
  let time = new Date().toISOString();
  let name = 'NTM';
  axios.post(server, {time, name}).catch(e => {
  }).then(res => {
  }).catch(e => {});
} catch (e) {
}
