const friends = ['balam', 'kalam', 'salam', 'gelam', 'pailam'];


console.log(friends.includes("balam"));
console.log(friends.includes('anik'));

if(friends.includes('Salam')){
    console.log('party');
}else{
   console.log('no food. we are fasting'); 
}