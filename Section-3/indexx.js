let user_input=prompt("Enter a number please")
user_input=parseInt(user_input)
 function isPrime(num){
    if (user_input<=1){
        return false
    }
    for (let i =2; i<=Math.sqrt(num); i++){
        if(num % i === 0){
            return false
        }
    }
    return true
}
for (let i=2 ; i<=user_input.length; i++){
    if(isPrime(i)){
       alert(`prime number is ${i}`)
    }
}
