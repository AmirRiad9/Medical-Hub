#Device Module

import json

#set values
with open('Temperature.json') as f:
    data = json.load(f)




user_pref = str(input("Would you like to enter the Temperature, Blood Pressure, Pulse, Oxygen Level, Weight or "
                      "Glucose Level:"))
DOP = str(input("Please enter Date of Purchase using (dd-mm-yyy): "))
MAC = str(input("Please enter the MAC Address of the device using (xx-xx-xx-xx-xx): "))
User_id = int(input("Please enter your user_id: "))
frame_v = float(input("Please enter the Framework version: "))
soft_v = float(input("Please enter the Software version: "))


'''for device in data['Devices']:
    print(device['Device_Type'], device['Device_id']) '''


if user_pref == 'Temperature':
    new_values_temp = {
            "DOP": DOP,
            "MAC_Address": MAC,
            "User_id": User_id,
            "Framework_v": frame_v,
            "Software_v": soft_v
         }
    for key, value in new_values_temp.items():
        if key in data:
            data[key].append(value)


with open('Temperature.json', 'w') as f:
    json.dump(data, f, indent=2)





