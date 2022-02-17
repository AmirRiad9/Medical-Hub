# Medical-Hub
A platform that patients and medical professionals can use to book, get notifications, leave messages, store their medical data and look up their history. 

The Device_Module uses the Device.json file, gets the information and outputs the values in the Devices_added.txt file. To call the API use the function that is in the Device_Module file, it is called get_data() and takes in one argument which is the .json file to be used, for this example the function is called as follows: get_data('Device.json').

The synntax for the Device.json file is as follows:

{
  "Device_id": 1,
  "Device_Type": "Thermometer",
  "Unit": "F",
  "DOP": "28-04-1999",
  "MAC_Address": "00-14-13-24-25-12",
  "User_id":12,
  "Framework_v": 2.34,
  "Software_v": 4.0
}

The keys are very important they are all case-sensitive please do not change or else the API will not work correctly! The Device_id takes in an integer, the User_id also takes an integer and both the Framework_v and the software_v take in a float (an integer would also work it would just add a .0 in the end, so if the user puts 4 it will become 4.0). 
