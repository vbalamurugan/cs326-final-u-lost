# Team Name

* U-Lost

# Web Application Name

* UMass Amherst Lost & Found 

# Team Work for Milestone 3

* Sahil and Vikas were responsible to store and display the images of the items on the user interface.
* Sahil worked on connecting the login/create, login/read to the backend.
* Vikas worked on connecting the reporter/update to the backend.
* Sidharth was responsible to display the data fetched from the backend to the frontend. He also connected the reporter/delete to the backend.
* Nishant was reponsible for connecting the reporter/create route to backend and updating the "Honesty Score" for the reporter when the Finder clicks
  on the "It is Mine!" button.

# Database Information (MongoDB)

* Items Collection: 

{ _id: Number,
  category: String,
  location: String,
  contact: String,
  time: String,
  image: String
}


* Login Collection: 

{ _id: String,
  email: String,
  password: String,
  honestyScore: Number
}
