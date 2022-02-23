from Device_Module import get_device

filename = 'test_device.json'

output_check = "Device Id: 1 " \
               "Device Type: Thermometer" \
               "Device Unit: F" \
               "Device Date of Purchase: 28-04-1999" \
               "Device MAC Address: 00-14-13-24-25-12" \
               "User Assigned Device: 12" \
               "Device Framework Version: 2.34" \
               "Device Software Version: 4.0"


def test_device():
    output = get_device(filename)

    assert output == output_check
