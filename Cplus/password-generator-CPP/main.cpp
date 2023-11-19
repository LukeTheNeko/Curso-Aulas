#include <iostream>
#include <string>
#include <cstdlib>
#include <ctime>

std::string generatePassword() {
    const std::string allowedCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]|:;<>,.?/~";
    const int minLength = 5;
    const int maxLength = 16;

    srand(static_cast<unsigned int>(time(nullptr)));

    int passwordLength = minLength + rand() % (maxLength - minLength + 1);
    std::string password;

    for (int i = 0; i < passwordLength; ++i) {
        int randomIndex = rand() % allowedCharacters.length();
        password += allowedCharacters[randomIndex];
    }

    return password;
}

int main() {
    std::string password = generatePassword();
    std::cout << "Generated Password: " << password << std::endl;

    return 0;
}
