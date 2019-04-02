function vowelsAndConsonants(s) {
  let array1 = [];
  let array2 = [];
  let array = ['a','e','i','o','u'];
  for (var i = 0; i < s.length; i++) {
    for (var x = 0;x < array.length; x++) {
      if (s.charAt(i) === array[x]) {
        array1.push(s.charAt(i));
      }else if(s.charAt(i) !== array[x]) {
        array2.push(s.charAt(i));
      }else {
        return null
      }
    }

  }
}
function vowelsAndConsonants(s) {
    const vowels = 'aeiou';
    var consonants = '';

    for (var i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            console.log(s[i]);
        }
        else {
            consonants += s[i] + '\n';
        }
    }

    console.log(consonants.trim());
}
vowelsAndConsonants('peeteerr');
