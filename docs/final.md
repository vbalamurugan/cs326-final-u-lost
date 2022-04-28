# U-Lost

* UMass Amherst Lost & Found 

# Semester

* Spring 2022

# Overview

* Our application is designed for students/faculty to find lost items. We have 2 roles in the application: Reporter and Finder.
  Reporter is he one who reports a lost item, and the Finder will then be able to see all the reported items with their images on the app.
  It is upto the Finder to select the item and notify the Reporter by clicking on "It is Mine!" button. Our idea is innovative since there exists 
  no such app for UMass students/faculty.

# Team Members

* Sahil Joshi (sahiljoshi515)
* Sidharth Saluja (SidharthSaluja)
* Vikas Balamurugan (vbalamurugan)
* Nishant Jain (nishant1549)

# User Interface

* SignUp page: Page will be used for signing up for the application. (If account does not exist)

![1](https://user-images.githubusercontent.com/52909523/165815984-ce5e5b28-971c-4146-9a5c-52bd52d497aa.png)

* SignIn page: Page will be used for signing in for the application. (If account already exists)

![2](https://user-images.githubusercontent.com/52909523/165816132-e10ee510-0de4-487b-b985-5cc3db7a3387.png)

* Selecting page: Page for selecting whether you want to report an item or find an item.

![3](https://user-images.githubusercontent.com/52909523/165816196-f9377ef6-42c3-48a4-a736-6e39767881e7.png)

* Categories page: Page for selecting the category you wish to find/report an item.

![4](https://user-images.githubusercontent.com/52909523/165816282-7aeffcab-6bba-4430-b3b5-485b62f2d64d.png)

* Reporter view 1: This is how the reporter sees the previously reported items.

![5a](https://user-images.githubusercontent.com/52909523/165816324-e36359b7-7311-42bb-a9ad-da836ab45de2.png)

![5b](https://user-images.githubusercontent.com/52909523/165816407-26cf7106-aacb-4ea8-914e-33d2551949fb.png)

* Reporter view 2: This is what the reporter will see when they pclick on "Add+" button

![Screen Shot 2022-04-28 at 13 53 54](https://user-images.githubusercontent.com/52909523/165816524-67bc4ebe-d8bc-48ef-8151-70c58f67ecb3.png)

* Reporter view 3: This is what the reporter will see when they click on one of the items, they can update/delete an item as intended.

![6](https://user-images.githubusercontent.com/52909523/165816665-4b88ecad-c980-4ee3-aa51-c3ce493a538c.png)

* Finder view 1: This is what the finder sees the items that have been reported.

![7](https://user-images.githubusercontent.com/52909523/165816741-431a553c-503c-45b5-8c47-928d0ed7d05c.png)

* Finder view 2: This is what the finder sees when they click on one of the items. They can choose to notify the reporter by clicking on "It is Mine!"    button.

![8](https://user-images.githubusercontent.com/52909523/165816872-a366a873-436b-4484-96dd-bb2c6679af63.png)





# Team Work for Milestone 2

* Sahil and Vikas were responsible to store and display the images of the items on the user interface.
* Sahil worked on connecting the login/create, login/read to the backend.
* Vikas worked on connecting the reporter/update to the backend.
* Sidharth was responsible to display the data fetched from the backend to the frontend. He also connected the reporter/delete to the backend.
* Nishant was reponsible for connecting the reporter/create route to backend.

# Database Information

* Items Collection: 

```{ _id: Number,
     category: String,
     location: String,
     contact: String,
     time: String,
     image: String
    }
```

* Login Collection: 

```{ _id: String,
     email: String,
     password: String,
     honestyScore: Number
    }
```
