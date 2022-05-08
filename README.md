# Medical-Hub

A cross platform application that stores patients, doctors and nurses. In addition to some functionality for medical personnel. This application was built for functionality, styling is not required.

## API

Django was used to develop a RESTful API that was hosted on AWS using an EC2 instance but it is currently stopped for security reasons, the database used is sqlite. There are four endpoints; Users, Devices, Relations and Chat. Medical Hub only uses two of these enpoints which are Users and Relations. Here is the documentation for the API using swagger:

<img width="500" height ="1000" alt="Screen Shot 2022-05-08 at 3 11 20 PM" src="https://user-images.githubusercontent.com/60357207/167312143-a7edba1f-4cc6-4fe4-af36-80d54db68992.png">

<img width="1000" height ="500" alt="Screen Shot 2022-05-08 at 3 11 39 PM" src="https://user-images.githubusercontent.com/60357207/167312191-dd295a6f-7c32-485c-a7ce-d96d837adca0.png">


Users can run http://localhost/doc/ ---> for more information


## Getting Started
```
npm install axios
```
```
npm install @react-navigation/native@^5.x
```
```
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
```
```
npm install @react-navigation/stack@^5.x
```
```
expo start
```


### App Development 
##Expo

* Login 
Firebase is used for authentication. Users have to enter email and password and click register (1). Users will be redirected to the "User Details" page in order to complete registration (2). After clicking submit users will be redirected to the login page where they can log in with the account created.

[1]
<img width="1000" height ="500" alt="Screen Shot 2022-05-08 at 3 11 39 PM" src="https://user-images.githubusercontent.com/60357207/167312472-c761e66e-7782-4281-8dea-8c0892a4f1a3.png">

[2]
![Simulator Screen Shot - iPhone 13 - 2022-05-08 at 15 28 21](https://user-images.githubusercontent.com/60357207/167312528-ad5498ee-7b0e-4899-aec7-29031dc8db04.png)


* Medical Personnel
Depending on the #role which is [Doctor, Nurse, Patient], each role corresponds to a #role_id which is stored in the database, Doctor corresponds to "1", Nurse to "2" and Patient to "3". Medical Personnel will be redirected to a page where their patients are listed [3]. Both Nurses and Doctors have the option to add a patient to their registry but in order for a Nurse to add a patient, the patient first need to be assigned to a doctor [4]. Medical Personnel can also add users to the database by clicking on "Add User" and filling the corresponding form [5].

[3]
![Simulator Screen Shot - iPhone 13 - 2022-05-08 at 15 39 31](https://user-images.githubusercontent.com/60357207/167312948-a3975f1b-7409-40b2-a1f9-33dc2a54cf7f.png)

[4]
![Simulator Screen Shot - iPhone 13 - 2022-05-08 at 15 41 57](https://user-images.githubusercontent.com/60357207/167313078-12646467-7bea-41c7-8abe-4e09719c2d40.png)

[5]
![Simulator Screen Shot - iPhone 13 - 2022-05-08 at 15 39 59](https://user-images.githubusercontent.com/60357207/167313171-68f2d299-5357-4e6e-bd17-34257b7428df.png)


* Patients 
Patients will log in the same way as the medical personnel but they will be redirected to another page where their doctor is displayed [6]. Patients can also view all nurses available by clicking "View all nurses available" [6].

[6]
![Simulator Screen Shot - iPhone 13 - 2022-05-08 at 15 55 06](https://user-images.githubusercontent.com/60357207/167313595-54cbc8e8-1ab3-436b-8c50-0a36ee6ae6c6.png)




