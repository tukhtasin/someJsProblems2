               // =============================================  1  ==================================================

// match("hello", "hELLo") ➞ true
// match("motive", "emotive") ➞ false
   function match(s1, s2) {
         	return s1.toLowerCase() === s2.toLowerCase();
         }
   console.log( match("hello", "hELLo"));
   console.log( match("motive", "emotive"));

               // =============================================  2  ==================================================

// parseArray([1, 2, "a", "b"]) ➞ ["1", "2", "a", "b"]
// parseArray(["abc", 123, "def", 456]) ➞ ["abc", "123", "def", "456"]

    function parseArray(arr) {
   	return arr.map(String);
   }
   console.log(parseArray([1, 2, "a", "b"]));
   console.log(parseArray(["abc", 123, "def", 456]));

               // =============================================  3  ==================================================

// removeVowels("I have never seen a thin person drinking Diet Coke.")
// ➞ " hv nvr sn  thn prsn drnkng Dt Ck."

        function removeV(str) {
             console.log(str.replace(/[aeiou]/gi, ''));
        }
        removeV("I have never seen a thin person drinking Diet Coke.");

               // =============================================  4  ==================================================
//checkTitle("A Simple Java Script Program!") ➞ true
//checkTitle("Water is transparent") ➞ false
     function checkTitle(title) {
        return title.split(' ').every(v => v.charAt(0) === v.charAt(0).toUpperCase());
      }
      console.log(checkTitle("A Simple Java Script Program!"));
      console.log(checkTitle("Water is transparent"));

               // =============================================  5  ==================================================

// uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Sept") ➞ 2
// uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Oct") ➞ 1

          function uploadCount(dates, month) {
               let count = 0
               for(let i = 0 ; i < dates.length ; i++ ){
                    if(dates[i].includes(month)){
                    count = count + 1
                    }
               }
               return count
          }
          console.log(uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Sept"));
          console.log(uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Oct"));