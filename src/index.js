module.exports = function check(str, bracketsConfig) {
  
   const brackets = Object.fromEntries(bracketsConfig);
   
   const stack = [];

   for (let i = 0; i < str.length; i++) {
    if (stack.length === 0) {
		stack.push(str[i]);
  		} else { 
  		if (str[i] == brackets[stack[stack.length - 1]]) {
				stack.pop() 
				} else {
					stack.push(str[i])
				}
 		}
  }  
return !stack.length;
}