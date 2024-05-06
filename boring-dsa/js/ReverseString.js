

function reverseString(str) {
  if(str==="") return "";
  
  let substring = str.substring(1);
  return reverseString(substring)+ str.charAt(0);
}


let reverse = reverseString("welcome");
console.log(reverse);