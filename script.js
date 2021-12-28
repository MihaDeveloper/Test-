const text = document.getElementById('text');
console.log(text);

let input = document.getElementById('text2');
console.log(input);
const rachet=document.getElementById('rachet');
const form = function(){
console.log(event.target.value);
input.value=text.value*70;
};
const logger = function(){
    input =text.value*70;
       console.log(input);
    
     };
text.addEventListener('change', form);
rachet.addEventListener('click', logger);

