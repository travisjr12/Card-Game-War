var expect = chai.expect;

describe ('warCard', function() {
  describe('#isSpadeOf10s', function() {
    it('should be a spade of ten', function(){
      var x = isSpadeOf10s('spadeOf', 10);
      expect(x).to.equal('spadeOf10');
    });
    it('should throw an error if the parameter is not a spade of tens', function() {
      expect(function(){
        doSomething(spade, 'nine');
      }).to.throw(Error);
    });
  });
 });
 
 