let raddom = Math.trunc(100 * Math.random(10))
alert( "Random son " + raddom)

if (raddom % 3 === 0 && raddom % 5 === 0) {
    alert( raddom + "Bu FizzBuzz son")
} else if ( raddom % 3 === 0) {
    alert( raddom + "Bu Fizz son")
} else if ( raddom % 5 === 0) {
    alert( raddom + "Bu Buzz son")
} else if ( raddom % 3 && raddom % 5) {
    alert( raddom + "Bu FizzBuzz, Fizz va Buzz ham emas")
}

