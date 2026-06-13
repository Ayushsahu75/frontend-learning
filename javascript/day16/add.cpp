#include <iostream>
using namespace std;

int main() {
    int num;
   
    cout << "कीमत दर्ज करें = ";
    cin>>num ;
    
    
    
    double y;
    cout << "प्रतिशत दर्ज करें = " ;
    cin>>y; 

    double z = (y / 100) * num;
    cout << " " << num << " का प्रति शत = " << z <<" Rs"<< endl;

    bool isCustomer;
    cout << "क्या आप ग्राहक हैं ? (1 for Yes, 0 for No): ";
    cin >> isCustomer;

    if (isCustomer) {
        int total = num - z;
        cout << "घटाव के बाद कुल कीमत (ग्राहक के लिए) = " << total << " rs" << endl;
    } else {
        int total = num + z;
        cout << " कुल कीमत (for SELF) = " << total <<" rs" << endl;
    }

    return 0;
}