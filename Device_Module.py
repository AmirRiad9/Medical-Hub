# Device Module
from Device_Class import Device
import json


def get_device(file_name):
    # set values
    with open(file_name) as f:
        data = json.load(f)

    d1 = Device()

    for key, value in data.items():
        if key == "Device_id":
            d1.d_id = data[key]
        elif key == "Device_Type":
            d1.d_t = data[key]
        elif key == "Unit":
            d1.u = data[key]
        elif key == "DOP":
            d1.dop = data[key]
        elif key == "MAC_Address":
            d1.mac = data[key]
        elif key == "User_id":
            d1.u_id = data[key]
        elif key == "Framework_v":
            d1.frame = data[key]
        elif key == "Software_v":
            d1.soft = data[key]



    with open('Devices_added.txt', 'w') as f:
        f.write(str(d1))

    return d1



get_device('Device.json')
