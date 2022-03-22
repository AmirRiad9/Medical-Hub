# Medical-Hub


I used Django to create a restful api system, and the database being used is sql. The project is hosted on aws using an ubuntu server. the public ip address is http://44.203.151.18:8000, in order to view the devices in the database use http://44.203.151.18:8000/Device this will show all the devices. To get the device using the device id users can use the exact link but add the device id after /Device for example if I wanted to see the details of the device using device id 1 then it would be as follows --> http://44.203.151.18:8000/Device/1. If the user wants to delete device then first get the device using the device id and click on the top left red button called delete. If users want to patch anything they will use the same url to get the device they want to patch and change the information at the bottom in the text box the hit patch. In order to add a device users should go to http://44.203.151.18:8000/Device scroll down to the bottom, users will see this:

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




