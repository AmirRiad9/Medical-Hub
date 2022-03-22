
class Device():
    def __init__(self, dev_id=None, dev_type=None, unit=None, dop=None, user_id=None, frame_v=None,
                 soft_v=None):
        self.d_id = dev_id
        self.d_t = dev_type
        self.u = unit
        self.dop = dop
        self.u_id = user_id
        self.frame = frame_v
        self.soft = soft_v

    def __str__(self):
        return "Device Id: " + str(self.d_id) + "\n" \
                "Device Type: " + self.d_t + "\n" \
                "Device Unit: " + self.u + "\n" \
                "Device Date of Purchase: " + self.dop + "\n" \
                "User Assigned Device: " + str(self.u_id) + "\n" + "Device Framework Version: " + str(self.frame)+"\n" \
                "Device Software Version: " + str(self.soft)









