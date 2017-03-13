var wd = require('macaca-wd');
var conf = {
  host : 'localhost',
  port : 3456
};
var driver = wd.promiseChainRemote(conf);

describe('第一个测试',function(){
  this.timeout(5 * 60 * 1000);
  before(function() {
    return driver.init({
      platformName: 'desktop',
      browserName: 'chrome'
    })
    .maximize()
  });

  it('open',function(){
    return driver
    .get("http://www.baidu.com/")
  })

  it('click',function(){
    return driver
    .elementById('kw')
    .sendKeys('来啊~搜索啊~')
    .elementById('su')
    .click()
  })




  after(function() {
    return driver
      .sleep(1000)
      .quit();
  });



})
