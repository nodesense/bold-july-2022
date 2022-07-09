OOP

class Calc {
    int sum = 0;
    int add(int value) {
        sum += value; // business logic
        return sum
    }
}

calc = new Calc()
calc.add(10)  // 10
calc.add(5)  // 15

calc.add(10)  // 25
calc.add(5)  // 30



calc.add(10)   
calc.add(5)  
calc.add(10)   
calc.add(5)  calc.add(10)   
calc.add(5)  calc.add(10)   
calc.add(5)  calc.add(10)   
calc.add(5)  calc.add(10)   
calc.add(5)  calc.add(10)   
calc.add(5)  calc.add(10)   
calc.add(5)  calc.add(10)   
calc.add(5)  calc.add(10)   
calc.add(5)  calc.add(10)   
calc.add(5)  calc.add(10)   
calc.add(5)  calc.add(10)   
calc.add(5)  calc.add(10)   
calc.add(5)  calc.add(10)   
calc.add(5)  calc.add(10)   
calc.add(5)  calc.add(10)   
calc.add(5)  unpredicatable output

----------------------
Functional

// pure function
// no hidden state, given same input, you get always same output
function add(sum, value) {
    return sum + value; // business logic
}

add(0, 10) // 10

add(0, 10) // 10 predictable



















