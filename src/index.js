/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
	var count=0;
	var j;
	var k;
	var n;
	var i=1;
  while(i<preferences.length+1)
  {

    j=preferences[i-1];
    k=preferences[j-1];
    n=preferences[k-1];
    if(n==i&&i!=j)
    	{
		count++;
	}
    i++;
  }
  return count/3;
};
