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
