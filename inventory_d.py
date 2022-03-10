from Device_Class import Device
import json
from datetime import datetime


def add_device(device_id=None, device_type=None, unit=None, dop=None, u_id=None, frame=None, soft=None):
    if device_id is None or device_type is None or unit is None or dop is None or u_id is None or frame is None or soft\
            is None:
        print("add_device() takes 7 positional arguments: device id, device type, unit, date of purchase, user id, "
              "framework version, software version.")
        return

    d1 = Device()
    # set values
    if isinstance(device_id, int):
        d1.d_id = device_id
    else:
        print("Device ID has to be of type int.")
        return
    if isinstance(device_type, str):
        d1.d_t = device_type
    else:
        print("Device Type has to be of type str.")
        return
    if isinstance(unit, str):
        d1.u = unit
    else:
        print("Device Unit has to be of type str.")
        return

    format = "%d-%m-%Y"

    try:
        bool(datetime.strptime(str(dop), format))
        d1.dop = dop
    except ValueError:
        print("Device Date of Purchase must match the format: dd-mm-yyyy")
        return

    if isinstance(u_id, int):
        d1.u_id = u_id
    else:
        print("User ID has to be of type int")
        return

    if isinstance(frame, float):
        d1.frame = frame
    else:
        print("Device Framework Version has to be of type Float")
        return
    if isinstance(soft, float):
        d1.soft = soft
    else:
        print("Device Software Version has to be of type Float")
        return

    device_added = {
        "Device_id": d1.d_id,
        "Device_Type": d1.d_t,
        "Unit": d1.u,
        "DOP": d1.dop,
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

    return file_data


def get_device(device_id):
    flag = False
    with open('Device.json', 'r') as f:
        file_data = json.load(f)
        for d, d_info in file_data.items():
            for dev in d_info:
                if dev["Device_id"] == device_id:
                    print(dev)
                    flag = True
                    return dev

    if not flag:
        print("There is no Device associated with this ID")
        return


def delete_device(device_id):
    with open('Device.json', 'r+') as f:
        file_data = json.load(f)
        count = 0
        flag = True

        for d, d_info in file_data.items():
            for dev in d_info:
                if file_data["Devices"][count]["Device_id"] == device_id:
                    del [file_data["Devices"][count]]
                    flag = True
                    break
                else:
                    flag = False
                    count += 1
        if flag:
            new_data = file_data
            f.seek(0)
            json.dump(new_data, f, indent=4)
            f.truncate()
        else:
            print("Device not found, invalid ID")
            return

        return new_data
