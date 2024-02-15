#include <iostream>

// Function that returns another function
int add(int x, int y)
{
    return x + y;
}

// Function that takes another function as an argument
int operate(int x, int y, int (*operation)(int, int))
{
    return operation(x, y);
}

int main()
{
    // Define a function pointer to hold the returned function
    int (*funcPtr)(int, int) = add;

    // Call the returned function through the function pointer
    std::cout << "Result: " << operate(5, 3, funcPtr) << std::endl;

    return 0;
}

// #include <iostream>
// using namespace std;
// // Function that returns a lambda function
// std::function<int()> createClosure(int x) {
//     // Capture 'x' by value in the lambda function
//     return [x]() {
//         return x * 2;
//     };
// }

// int main() {
//     // Call createClosure to create a closure-like lambda function
//     auto closure = createClosure(5);

//     // Call the lambda function
//     std::cout << "Result: " << closure() << std::endl;

//     return 0;
// }
