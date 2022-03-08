from Device_Class import Device
import json


def add_device(device_id, device_type, unit, dop, mac, u_id, frame, soft):
    d1 = Device()

    # set values
    d1.d_id = device_id
    d1.d_t = device_type
    d1.u = unit
    d1.dop = dop
    d1.mac = mac
    d1.u_id = u_id
    d1.frame = frame
    d1.soft = soft

    device_added = {
        "Device_id": d1.d_id,
        "Device_Type": d1.d_t,
        "Unit": d1.u,
        "DOP": d1.dop,
        "MAC_Address": d1.mac,
        "User_id": d1.u_id,
        "Framework_v": d1.frame,
        "Software_v": d1.soft

    }

    flag = True

    with open('Device.json', 'r+') as f:
        file_data = json.load(f)
        for d, d_info in file_data.items():
            for dev in d_info:
                if dev["Device_id"] == d1.d_id:
                    flag = False
                    break


        if flag:
            file_data["Devices"].append(device_added)
            f.seek(0)
            json.dump(file_data, f, indent=4)
        else:
            print("Device ID being used")

    return file_data


def get_device(device_id):
    flag = False
    with open('Device.json', 'r') as f:
        file_data = json.load(f)
        for d, d_info in file_data.items():
            for dev in d_info:
                if dev["Device_id"] == device_id:
                    flag = True
                    break

    if not flag:
        print("There is no Device associated with this ID")


def delete_device(device_id):
    with open('Device.json', 'r+') as f:
        file_data = json.load(f)
        count = 0

        for d, d_info in file_data.items():
            for dev in d_info:
                if file_data["Devices"][count]["Device_id"] == device_id:
                    del [file_data["Devices"][count]]
                    break
                else:
                    count += 1

        new_data = file_data
        f.seek(0)
        json.dump(new_data, f, indent=4)
        f.truncate()
