from Device_Class import Device


filename = 'test_device.json'

d2 = Device()

output_check_did = 1
output_check_dt = "Thermometer"
output_check_soft = 4.0
output_check_unit = 'F'
output_check_dop = "28-04-1999"
output_check_mac = "00-14-13-24-25-12"
output_check_uid = 12
output_check_frame = 2.34


def test_device():
    output = d2.get_device(filename)

    assert output["Device_Type"] == output_check_dt
    assert output["Software_v"] == output_check_soft
    assert output["Device_id"]== output_check_did
    assert output["Unit"] == output_check_unit
    assert output["DOP"] == output_check_dop
    assert output["MAC_Address"] == output_check_mac
    assert output["User_id"] == output_check_uid
    assert output["Framework_v"] == output_check_frame
