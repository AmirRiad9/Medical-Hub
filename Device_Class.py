class Device:
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

    def user_data(self):
        self.dop = str(input("Please enter Date of Purchase using (dd-mm-yyy): "))
        self.mac = str(input("Please enter the MAC Address of the device using (xx-xx-xx-xx-xx): "))
        self.u_id = int(input("Please enter your user_id: "))
        self.frame = float(input("Please enter the Framework version: "))
        self.soft = float(input("Please enter the Software version: "))
