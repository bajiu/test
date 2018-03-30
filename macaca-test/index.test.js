var wd = require('macaca-wd');
var conf = {
  host: 'localhost',
  port: 3456
};
describe('第一个测试', function() {
  this.timeout(5 * 60 * 1000);
  var driver = wd.promiseChainRemote(conf);
  before(() => {
    return driver
      .init({
        platformName: 'desktop',
        browserName: 'chrome',
        userAgent: `Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0 Safari/537.36 Macaca Custom UserAgent`,
        // deviceScaleFactor: 2
      })
      .setWindowSize(1280, 800);
    // .maximize()
  });


  it('click',function(){
    return driver
    .get("http://www.baidu.com/")
    .sleep(3000)
    .elementById('kw')
    .keys('run this')
    .sleep(3000)
    .elementById('su')
    .click()
    .sleep(5000)
  })


  after(function() {
    return driver
      .sleep(10000)
      .quit();
  });



})
