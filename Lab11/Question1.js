const dns = require('dns');
const miu = 'www.miu.edu';

dns.lookup(miu, (err, adress, family) => {
    console.log("%s %j %s", miu, adress, family);
});

