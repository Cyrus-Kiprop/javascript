function vowelsAndConsonants(s) {
  let array = ['a','e','i','o','u'];
  for (var i = 0; i < s.length; i++) {
    if (s.charAt(i)=== s.charAt(i).toLowerCase()){
      for (var x = 0; x < array.length; x++) {
        if (s.charAt(i) === array[x]) {
          console.log(s.charAt(i));
        }
        }
      }else if (s.charAt(i) !== array[x] && s.charAt(i) == s.charAt(i).toLowerCase()  ) {
        console.log(s.charAt(i));
      }
    }
}
vowelsAndConsonants("killWEERniDHD");
