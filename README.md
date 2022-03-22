# Medical-Hub


The Device_Module uses the device.json file as a "Database" to test if the functions in the api are working correctly. The first thing users need to do is open the Device_Interface.py file and import the inventory file as inv using this code import inventory_d as inv. This api has 3 main functions that are being used add, get, and delete. The add_device function takes 7 input arguments, add_device(device_id, device_type, unit, date of purchase, user_id (that used the device), framework version and software version), after calling this function in the device_interface as inv.add_device(2, "Thermometer", "F", "28-05-2022", 123, 3.0, 3.0), first the function checks that all fields are satisifed and are of the correct type then adds it to the "database". The function will also check if the device id has been used before in the databse if it is, then it will return a meesage that the device id is being used and the data will not be added into the database. After calling the functinon and passing all the requirements the Device.json file will look as follows:

{
    "Devices": [
        {
            "Device_id": 2,
            "Device_Type": "Thermometer",
            "Unit": "F",
            "DOP": "28-05-2022",
            "User_id": 123,
            "Framework_v": 3.0,
            "Software_v": 3.0
        }
    ]
}

if we add another device using the same function, it will add onto the database for example if we call inv.add_device(4, "Scale", "F", "29-05-2022", 123, 3.0, 3.0)
the Device.json file will change accordingly:

{
    "Devices": [
        {
            "Device_id": 2,
            "Device_Type": "Thermometer",
            "Unit": "F",
            "DOP": "28-05-2022",
            "User_id": 123,
            "Framework_v": 3.0,
            "Software_v": 3.0
        },
        {
            "Device_id": 4,
            "Device_Type": "Scale",
            "Unit": "F",
            "DOP": "29-05-2022",
            "User_id": 123,
            "Framework_v": 3.0,
            "Software_v": 3.0
        }
    ]
}

Users can also get device information by using the device_id it has to be a valid ID that is in the "databse" or else a message will tell the user that the device id that has been entered is invalid. for example if I want to get the information associated with device id 2, users could do that by calling inv.get_device(2) and the output will be as follows:

{'Device_id': 2, 'Device_Type': 'Thermometer', 'Unit': 'F', 'DOP': '28-05-2022', 'User_id': 123, 'Framework_v': 3.0, 'Software_v': 3.0}

Also, if users want to delete a device, the function to do so is delete_device, so if a user wants to delete device 2 the sytanx should be inv.delete_device(2) and the new Device.json file will look as follows:

{
    "Devices": [
        {
            "Device_id": 4,
            "Device_Type": "Scale",
            "Unit": "F",
            "DOP": "29-05-2022",
            "User_id": 123,
            "Framework_v": 3.0,
            "Software_v": 3.0
        }
    ]
}



Django was used to create a restful api system, and the database being used is sql. The project is hosted on aws using an ubuntu server. the public ip address is http://44.203.151.18:8000, in order to view the devices in the database use http://44.203.151.18:8000/Device this will show all the devices. To get the device using the device id users can use the exact link but add the device id after /Device for example if I wanted to see the details of the device using device id 1 then it would be as follows --> http://44.203.151.18:8000/Device/1. If the user wants to delete device then first get the device using the device id and click on the top left red button called delete. If users want to patch anything they will use the same url to get the device they want to patch and change the information at the bottom in the text box the hit patch. In order to add a device users should go to http://44.203.151.18:8000/Device scroll down to the bottom, users will see this:

{
    "device_type": "",
    "unit": "",
    "dop": null,
    "user_id": null,
    "framework_version": null,
    "software_version": null
}

fill the required fields accordingly and hit post. Important note: the dop syntax should be like this --> "yyyy-mm-dd"

There is also a chat room the url for it is http://44.203.151.18:8000/chat/ users then enter the "room" they want to enter and they can chat together. For the use of doctors, and patients each doctor should have his own key that is shared with patients and then they can enter the same room using the key provided where they can chat securely.




