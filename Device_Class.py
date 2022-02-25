from flask import Flask, request
from flask_restful import Api, Resource
import json

app = Flask(__name__)
api = Api(app)



class Device(Resource):
    def __init__(self, dev_id=None, dev_type=None, unit=None, dop=None, mac_a=None, user_id=None, frame_v=None,
                 soft_v=None):
        self.d_id = dev_id
        self.d_t = dev_type
        self.u = unit
        self.dop = dop
        self.mac = mac_a
        self.u_id = user_id
        self.frame = frame_v
        self.soft = soft_v

    def __str__(self):
        return "Device Id: " + str(self.d_id) + "\n" \
                "Device Type: " + self.d_t + "\n" \
                "Device Unit: " + self.u + "\n" \
                "Device Date of Purchase: " + self.dop + "\n" \
                "Device MAC Address: " + self.mac + "\n" \
                "User Assigned Device: " + str(self.u_id) + "\n" + "Device Framework Version: " + str(self.frame)+"\n" \
                "Device Software Version: " + str(self.soft)

    def get_device(self):
        # set values
        with open('Device.json') as f:
            data = json.load(f)



        for key, value in data.items():
            if key == "Device_id":
                self.d_id = data[key]
            elif key == "Device_Type":
                self.d_t = data[key]
            elif key == "Unit":
                self.u = data[key]
            elif key == "DOP":
                self.dop = data[key]
            elif key == "MAC_Address":
                self.mac = data[key]
            elif key == "User_id":
                self.u_id = data[key]
            elif key == "Framework_v":
                self.frame = data[key]
            elif key == "Software_v":
                self.soft = data[key]

        device_added = {
            "Device_id": self.d_id,
            "Device_Type": self.d_t,
            "Unit": self.u,
            "DOP": self.dop,
            "MAC_Address": self.mac,
            "User_id": self.u_id,
            "Framework_v": self.frame,
            "Software_v": self.soft
        }

        return device_added

    def get(self, Device_Type):
        new = d1.get_device()
        return new[Device_Type]


'''
        with open('Devices_added.txt', 'w') as f:
            f.write(str(d1))
'''

api.add_resource(Device, "/Device/<string:Device_Type>")

if __name__== "__main__":
    d1 = Device()
    d1.get_device()
    app.run(debug=True)