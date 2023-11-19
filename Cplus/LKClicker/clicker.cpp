#include <iostream>
#include <windows.h>

using namespace std;

int main() {
    int delay = 100; // Delay in milliseconds between each click
    bool autoclickeron = false;
    bool mouse1pressed = false;

    // Header and initial message
    cout << "Autoclick by Lkzinxyz" << endl;
    cout << "Use F2 to toggle on/off" << endl;

    while (true) {
        if (GetAsyncKeyState(VK_F2) & 0x8000) { // Check if the F2 key is pressed
            autoclickeron = !autoclickeron;
            Sleep(100); // Add a delay to avoid rapid F2 key presses
            
            Beep(autoclickeron ? 500 : 1000, 500); // Beep when autoclicker is turned on/off
            cout << "Autoclicker " << (autoclickeron ? "on" : "off") << endl; // Print when autoclicker is turned on/off
        }

        if (autoclickeron && (GetAsyncKeyState(VK_LBUTTON) & 0x8000)) { // Check if the left mouse button is pressed
            if (!mouse1pressed) {
                mouse1pressed = true;
                mouse_event(MOUSEEVENTF_LEFTDOWN, 0, 0, 0, 0);
            }
            Sleep(10); // Wait for 10 milliseconds
        }

        if (!autoclickeron && mouse1pressed) {
            mouse1pressed = false;
            mouse_event(MOUSEEVENTF_LEFTUP, 0, 0, 0, 0);
        }
    }

    return 0;
}
