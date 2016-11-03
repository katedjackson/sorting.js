describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles a single item', function(){
  	var arr = ['a'];
    expect( bubbleSort(arr) ).toEqual( ['a'] );
    var arr = [3];
    expect( bubbleSort(arr) ).toEqual( [3] );
  });
  
  it('handles multiple items', function(){
  	var arr = ['b', 'd', 'a', 'c'];
    expect( bubbleSort(arr) ).toEqual( ['a', 'b', 'c', 'd'] );
    var arr = [3, 2, 4, 1];
    expect( bubbleSort(arr) ).toEqual( [1, 2, 3, 4] );
  });

});

describe('A spy', function() {

	

	
it("tracks the number of times swap was called", function() {
    expect(swap.calls.count()).toEqual(0);

    var arr = [4, 6, 7, 2, 1];
   	bubbleSort(arr);

    expect(swap.calls.count()).toEqual();
  });

  it("tracks the number of times comparison was called", function() {
    expect(comparison.calls.count()).toEqual(0);

    var arr = [4, 6, 7, 2, 1];
    bubbleSort(arr);

    expect(comparison.calls.count()).toEqual(2);
  });
});