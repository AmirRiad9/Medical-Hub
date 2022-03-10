import inventory_d as inv

output_check = {
    "Devices": [
        {
            "Device_id": 21,
            "Device_Type": "Thermometer",
            "Unit": "F",
            "DOP": "28-01-2022",
            "User_id": 123,
            "Framework_v": 3.0,
            "Software_v": 3.0
        }
    ]
}

def test_input():
    output = inv.add_device(21, "Thermometer", "F", "28-01-2022", 123, 3.0, 3.0)
    assert output == output_check