from Device_Module import get_device
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
    output = get_device(filename)

    assert output.d_t == output_check_dt
    assert output.soft == output_check_soft
    assert output.d_id == output_check_did
    assert output.u == output_check_unit
    assert output.dop == output_check_dop
    assert output.mac == output_check_mac
    assert output.u_id == output_check_uid
    assert output.frame == output_check_frame
