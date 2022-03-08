import inventory_d as inv

inv.add_device(1, "Thermometer", "F", "28-04", "00x00", "123", "3.0", "3.0")
inv.add_device(2, "Thermometer", "F", "28-05", "00x00", "123", "3.0", "3.0")
inv.add_device(3, "Thermometer", "F", "28-05", "00x00", "123", "3.0", "3.0")
inv.add_device(4, "Scale", "F", "28-05", "00x00", "123", "3.0", "3.0")
inv.delete_device(3)
