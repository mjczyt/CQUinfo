var webshot = require('../lib/webshot');

webshot('http://cqyou.top:2000/class/20145074/RE1MNTQ2Nw==', './amazon.png', function(err) {
  if (err) return console.log(err);
  console.log('OK');
});
