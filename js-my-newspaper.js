console.log("Test")


//given a number, return the Factorial of the number
function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }
  

  //given a string return if the string is Palindrome
  function palindrome(str) 
  {
      var palin = str.split("").reverse().join("");
  
      if (palin === str){
          return true;
      } else {
          return false;
      }
  } 


 //given a string, return true if, for every unique character, there is an even number of occurrences, false otherwise.

function isCharsUniqueString(s){ 
    for(i = 0; i<s.length-1; i++){ 
    	for(j = i+1; j<s.length; j++){ 
        	if (s[i] == s[j]) return false; 
        } 
    } 
    return true; 
} 

//
 