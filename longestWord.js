function mostVowels(str){
  
    strArray = str.split(' ');
    var vowels = 'aeiou';
    var vowelsCount = 0;
    var leadWord = '';
  
    for(var i=0; i<strArray.length; i++){
      var word = strArray[i];
      var count = 0;
          for(var j=0; j<word.length; j++){
            if(vowels.indexOf(word[j]) !== -1){
              count++;
            }
          }
          if(count > vowelsCount){
              vowelsCount = count;
              leadWord = word;
            }
          
      }
          return console.log(leadWord, vowelsCount);
    }
       
  
  mostVowels("Smart people learn from everything and everyone, average people from their experience , stupid people already, have all the answers");