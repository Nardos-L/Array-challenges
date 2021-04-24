/**
Evens or Odds - Given an array, determine if the values that are odd 
when added together are larger than the even values added together. 
If they are equal say that they are "tied". 
 */

function evensOfOdds(arr) {
    var totalOdds = 0;
    var totalEvens = 0;
    // your code here
    for ( var i =0; i < arr.length; i++){
        if (arr[i]%2==1){
            totalOdds+=arr[i];
        }
        else  {
            totalEvens+=arr[i];
        }
    }
    if ( totalOdds > totalEvens){
        return "odd are large";
    }else if (totalEvens > totalOdds){
        return "evens are large";
    } else  {
        return "tied";
    }
}
   
var result = evensOfOdds([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back "evens are larger"