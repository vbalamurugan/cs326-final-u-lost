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

# API Documentation

## Introduction

## Method | Requests
* __POST__ __/login/create__
* __GET__ __/login/read__
* __PUT__ __/login/update__
* __POST__ __/reporter/create__
* __PUT__ __/reporter/update__
* __DELETE__ __/reporter/delete__
* __GET__ __/reporter/read__
* __GET__ __/finder/read__

## __POST__ __/login/create__
API request of type post to create login for new user for given email and password.
### Input
* email - email user wishes to uses for account credentials. 
* password - password user wishes to uses for account credentials.
* Example Input :![postlogincreate_-_link](https://user-images.githubusercontent.com/59256553/162589317-f6038655-6730-4f27-af23-44da8bbf0ddc.png)
### Output
Example Output :![postlogincreate_-_output](https://user-images.githubusercontent.com/59256553/162589356-053895ad-ebf4-4c0e-b562-a9791027ea7e.png)

### Response 
* 200 - OK - The request has succeeded. The client has succesfully created an account.
* 400 - Bad Request - The request could not be understood due to invalid syntax. The message body will contain more information.
* 403 - Request Forbidden - Valid request but server is refusing to fulfill it. The message body will contain more information.

## __GET__ __/login/read__
API request of type get to retrieve login credentials for existing user for given email.
### Input
* email - email user had used for creating an account previously. 
* Example Input :![getloginread_-_link](https://user-images.githubusercontent.com/59256553/162589376-bdb64914-49e8-4129-936f-f1ec03e5dfc6.png)
### Output
Example Ouput :![getloginread_-_output](https://user-images.githubusercontent.com/59256553/162589385-b5e633c3-7870-4a12-a10b-1fb21bbd59b5.png)

### Response 
* 200 - OK - The request has succeeded. Succesfuly retrieved login details. 
* 404 - Resource Not Found - The requested resource does not exist. The message body will contain more information.

## __PUT__ __/login/update__
API request of type put to update honesty score for a reporter.
### Input
* email - email reporter had used for creating an account previously. 
* Example Input :![3](https://user-images.githubusercontent.com/52909523/165873543-79c74bd9-02c4-429f-83fc-2e9704d259bc.png)
* Before Update : ![0](https://user-images.githubusercontent.com/52909523/165873599-f1fcff09-aed6-483e-97ea-b2da9fd9754b.png)
### Output
* Example Output : ![4](https://user-images.githubusercontent.com/52909523/165873581-a9f6c4c7-1569-47d1-b43b-ff5ad5ade5b1.png)
* After Update: ![1](https://user-images.githubusercontent.com/52909523/165873622-058a5b39-8bd4-4238-9a6a-f2de8e0e9b3a.png)

## __POST__ __/reporter/create__
API request of type post to create an item for a particular category previously choosen by user.(In this instance the user is a reporter who wishes to report a lost item.)
### Input
* category - category of item being reported. 
* location - location of item being reported. 
* contact - contact details of reporter. 
* time - time when the item was found. 
* images - image of item being reported. 
* id - id of item being created. 
* Example Input :![v2](https://user-images.githubusercontent.com/59256553/162590637-14b91c14-3330-45c7-b43e-9f5e380ffe70.png)
### Output
Example Output :![postreportercreate_-_output](https://user-images.githubusercontent.com/59256553/162590652-5414dc90-2159-4514-8825-7e39a298a913.png)

### Response 
* 200 - OK - The request has succeeded. The reporter has succesfully created an item.
* 400 - Bad Request - The request could not be understood due to invalid syntax. The message body will contain more information.

## __PUT__ __/reporter/update__
API request of type put to update an existing item in a particular category.(In this instance the user is a reporter who wishes to update item details that was previously reported by them.)
### Input
* category - category of item being reported. 
* location - location of item being reported. 
* contact - contact details of reporter. 
* time - time when the item was found. 
* images - image of item being reported. 
* id - id of item created. 
* Input Example : ![reporterupdateput_-_link](https://user-images.githubusercontent.com/59256553/162590696-8241d415-7b44-47e5-b291-264954c44f60.png)
### Output
Output Example : <img width="966" alt="Screen Shot 2022-04-09 at 4 34 55 PM" src="https://user-images.githubusercontent.com/59256553/162590795-bbc8acb5-0948-4276-afdd-ef24153ab503.png">
### Response 
* 200 - OK - The request has succeeded. The reporter has succesfully updated an item.
* 404 - Resource Not Found - The requested resource does not exist. The message body will contain more information.

## __DELETE__ __/reporter/delete__
API request of type delete to delete an existing item in a particular category.(In this instance the user is a reporter who wishes to delete item that was previously reported by them.)
### Input
* id - id of item created. 
* Example Input :<img width="935" alt="Screen Shot 2022-04-09 at 4 38 46 PM" src="https://user-images.githubusercontent.com/59256553/162590909-57677769-c0cb-47df-9445-c6549166e9c6.png">
### Output
Example Output: <img width="968" alt="Screen Shot 2022-04-09 at 4 35 07 PM" src="https://user-images.githubusercontent.com/59256553/162590804-9a246f51-fd21-4ebb-b7ec-84fb38c2e369.png">
### Response 
* 200 - OK - The request has succeeded. The reporter has succesfully deleted an item. 
* 404 - Resource Not Found - The requested resource does not exist. The message body will contain more information.

## __GET__ __/reporter/read__
API request of type get to retrieve item details which was posted by the current user.(In this instance the user is a reporter who wishes to report a lost item.)
### Input
* id - id of item created. 
* Example Input :<img width="557" alt="Screen Shot 2022-04-09 at 4 35 44 PM" src="https://user-images.githubusercontent.com/59256553/162590818-30615ebb-b4b8-4296-a222-93478a2c61ad.png">
### Output: Example Output :<img width="644" alt="Screen Shot 2022-04-09 at 4 35 59 PM" src="https://user-images.githubusercontent.com/59256553/162590823-6c661a49-eef4-400b-9568-d4a504991c0c.png">
### Response 
* 200 - OK - The request has succeeded. Succesfuly retrieved login details. 
* 404 - Resource Not Found - The requested resource does not exist. The message body will contain more information.


## __GET__ __/finder/read__
API request of type get to retrieve item details which was posted by the current user.(In this instance the user is a reporter who wishes to report a lost item.)
### Input
* category - category of the items to be read. 
* Example Input :<img width="589" alt="Screen Shot 2022-04-09 at 4 38 06 PM" src="https://user-images.githubusercontent.com/59256553/162590894-77124205-771f-4abe-b924-f943f4018037.png">
### Output
Example Output :<img width="660" alt="Screen Shot 2022-04-09 at 4 38 22 PM" src="https://user-images.githubusercontent.com/59256553/162590895-e2eaa1e5-97b4-4fab-a1cb-fee9977336d3.png">
### Response 
* 200 - OK - The request has succeeded. Succesfuly retrieved login details. 
* 404 - Resource Not Found - The requested resource does not exist. The message body will contain more information.

# CRUD OPERATIONS

## Log-in:
#### User creating a new account. Sends a "__POST__ __/login/create__" request and saves the credentials in the db. 
<img width="967" alt="Screen Shot 2022-04-15 at 1 04 41 PM" src="https://user-images.githubusercontent.com/59256553/163599610-e8c61a46-5807-43b8-ba81-c39bba744327.png">

#### User logging in into their account. Sends a "__GET__ __/login/read__" request and checks the credentials in the db. 
<img width="969" alt="Screen Shot 2022-04-15 at 1 04 56 PM" src="https://user-images.githubusercontent.com/59256553/163599631-d2215e5a-1bf1-430c-8318-76a2645e257f.png">

#### After signing up and loging in, user will then be directed to the following page(This page is where they choose if they are a reporter or finder)
<img width="971" alt="Screen Shot 2022-04-15 at 1 07 52 PM" src="https://user-images.githubusercontent.com/59256553/163599877-9d6f3877-b4fe-4084-9a61-3e468676ec89.png">

## Reporting Item:
#### User(Reporter) will be directed to the reporter page where the user can add an item to be reported as seen. The list of items seen are retrived using the '__GET__ __/reporter/read__' request which retrives the previously reported items 
<img width="970" alt="Screen Shot 2022-04-15 at 1 47 23 PM" src="https://user-images.githubusercontent.com/59256553/163603783-dfe60758-d71e-4579-8dc2-de5c260e9223.png">

#### User on clicking the "add+" button shown above will be prompted with a modal to input the items detials. On clicking add, a '__POST__ __/reporter/create__' request will be sent and the item details are stored into the db
<img width="969" alt="Screen Shot 2022-04-15 at 1 47 51 PM" src="https://user-images.githubusercontent.com/59256553/163603814-9cfa486d-a1ca-49fa-afba-f1e2af86e94c.png">

#### The User can then see a new item in the reported items list. 
<img width="968" alt="Screen Shot 2022-04-15 at 1 49 48 PM" src="https://user-images.githubusercontent.com/59256553/163604012-e6af1971-0ad2-48ef-b1d9-f9a8482289ce.png">

## Updating Reported Item:
#### User(Reporter) will be directed to the reporter page where the user can update an item previosuly reported. The list of items seen are retrived using the '__GET__ __/reporter/read__' request which retrives the previously reported items.
<img width="970" alt="Screen Shot 2022-04-15 at 1 45 48 PM" src="https://user-images.githubusercontent.com/59256553/163603618-82e0aa3e-a3b9-4b87-a556-472d064bb531.png">

#### User can then click on the item they had previously reported. This will prompt a modal with the item details as seen. On clicking the update button the item will be updated with the new details by sending a '__PUT__ __/reporter/update__' request. 
<img width="968" alt="Screen Shot 2022-04-15 at 1 46 09 PM" src="https://user-images.githubusercontent.com/59256553/163603653-b9d4c465-8e88-4272-917e-006998b3c4e2.png">

#### User will then see an updated item in the reported items list. 
<img width="969" alt="Screen Shot 2022-04-15 at 1 46 54 PM" src="https://user-images.githubusercontent.com/59256553/163603738-831b9d8d-87f2-4ebf-842e-1b231085334b.png">

## Deleting Reported Item:
#### User(Reporter) will be directed to the reporter page where the user can delete an item previously resported. The list of items seen are retrived using the '__GET__ __/reporter/read__' request which retrives the previously reported items.
<img width="970" alt="Screen Shot 2022-04-15 at 1 45 48 PM" src="https://user-images.githubusercontent.com/59256553/163603618-82e0aa3e-a3b9-4b87-a556-472d064bb531.png">

#### User can then click on the item they had previously reported. This will prompt a modal with the item details as seen. On clicking the delete button the item will be deleted by sending a '__DELETE__ __/reporter/delete__' request. 
<img width="969" alt="Screen Shot 2022-04-15 at 2 00 29 PM" src="https://user-images.githubusercontent.com/59256553/163604981-6af49666-2f38-46a6-9284-2c8221409012.png">

#### User will then see an updated item in the reported items list. 
<img width="971" alt="Screen Shot 2022-04-15 at 2 00 48 PM" src="https://user-images.githubusercontent.com/59256553/163605021-6d94ce66-5094-4138-b320-99a327bfe777.png">

## Searching for Item:
### When a user clicks on Finder after signing in and choosing a category, they will be redirected to the following page. The list of items will be retrieved by a '__GET__ __/finder/read__' request for the particular item category.
<img width="969" alt="Screen Shot 2022-04-15 at 1 55 47 PM" src="https://user-images.githubusercontent.com/59256553/163604567-c8cc1bfe-2197-4d82-968c-d1270486e90a.png">

#### User can click on a particular item in the list and view its specific details. If it is the item they are searching for they can click on the 'It is mine!' button to let the reporter know. 
<img width="970" alt="Screen Shot 2022-04-15 at 1 56 43 PM" src="https://user-images.githubusercontent.com/59256553/163604639-e6a4ca54-bd6c-4acb-be62-39fcc4cf6980.png">

# Database Information

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

# URL Routes/Mappings

* Login/SignUp route: https://glacial-scrubland-79174.herokuapp.com/client/login.html (Used for authentication)
* Reporter/Finder route: https://glacial-scrubland-79174.herokuapp.com/client/reporterFinder.html (Used to select the respective role)
* Reporter Categories route: https://glacial-scrubland-79174.herokuapp.com/client/categoriesReporter.html (Reporter selects a category)
* Finder Categories route: https://glacial-scrubland-79174.herokuapp.com/client/categoriesFinder.html (Finder selects a category)
* Reporter route: https://glacial-scrubland-79174.herokuapp.com/client/itemListReporter.html (Reporter View)
* Finder route: https://glacial-scrubland-79174.herokuapp.com/client/itemListFinder.html (Finder View)

# Authentication/Authorization

* We have not used proper authentication for this application. We are using MongoDB to store the user information, and then make create or read requests as intended. We know that this is tremendously risky for the users, but we thought that it was still a decent way to let the users create an account. https://glacial-scrubland-79174.herokuapp.com/client/login.html - is the route where user can signup for the application.

# Division of Labor


# Conclusion 

* Our team enjoyed working on this project throughout this semester. We learned how to store images on the server while linking them with some tag in the database and also learned proper design of code. We enjoyed learning Node.js and MongoDB as it was pretty intuitive and hope that it helps us while interning at different companies. One thing that might have helped us before we started the project was knowing how to do proper authentication. Since the instructor posted this resource pretty late, we decided to omit it. Some hurdles that we faced while building this project were spotting bugs (Why the code doesn't work as intended?), having trouble to push the project to heroku, and determining a way to store images on the server. We solved all these issues together by using stackoverflow and debugging. At the end, we are very proud of the application we have built, since each of us has taken equal effort to build this application.


# Team Work for Milestone 2

* Sahil and Vikas were responsible to store and display the images of the items on the user interface.
* Sahil worked on connecting the login/create, login/read to the backend.
* Vikas worked on connecting the reporter/update to the backend.
* Sidharth was responsible to display the data fetched from the backend to the frontend. He also connected the reporter/delete to the backend.
* Nishant was reponsible for connecting the reporter/create route to backend.

