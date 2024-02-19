#include <iostream>
using namespace std;
// In cpp we can return function but lexical enviroment can't be returned;
// Function that returns another function
int add(int x, int y, int a)
{
    cout<<"This is the a of add function: "<<a<<endl;
    return x + y;
}

// Function that takes another function as an argument
int operate(int x, int y, int z, int (*operation)(int, int, int))
{
    return operation(x, y,z);
}

int main()
{
    // Define a function pointer to hold the returned function
    int (*funcPtr)(int, int, int) = add;

    // Call the returned function through the function pointer
    std::cout << "Result: " << operate(5, 3, 4, funcPtr) << std::endl;

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
