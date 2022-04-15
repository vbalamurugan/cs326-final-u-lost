# Team Name

* U-Lost

# Web Application Name

* UMass Amherst Lost & Found 

# Team Work for Milestone 1

* Sahil was responsible for.
* Sidharth was responsible for 
* Vikas was responsible for .
* Nishant was responsible for .

# API Documentation

## Introduction

## Method | Requests
* __POST__ __/login/create__
* __GET__ __/login/read__
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
* Example Input: <img width="557" alt="Screen Shot 2022-04-09 at 4 35 44 PM" src="https://user-images.githubusercontent.com/59256553/162590818-30615ebb-b4b8-4296-a222-93478a2c61ad.png">
### Output
Example Output: <img width="644" alt="Screen Shot 2022-04-09 at 4 35 59 PM" src="https://user-images.githubusercontent.com/59256553/162590823-6c661a49-eef4-400b-9568-d4a504991c0c.png">
### Response 
* 200 - OK - The request has succeeded. Succesfuly retrieved login details. 
* 404 - Resource Not Found - The requested resource does not exist. The message body will contain more information.


## __GET__ __/finder/read__
API request of type get to retrieve item details which was posted by the current user.(In this instance the user is a reporter who wishes to report a lost item.)
### Input
* category - category of the items to be read. 
* Example Input: <img width="589" alt="Screen Shot 2022-04-09 at 4 38 06 PM" src="https://user-images.githubusercontent.com/59256553/162590894-77124205-771f-4abe-b924-f943f4018037.png">
### Output
Example Output:<img width="660" alt="Screen Shot 2022-04-09 at 4 38 22 PM" src="https://user-images.githubusercontent.com/59256553/162590895-e2eaa1e5-97b4-4fab-a1cb-fee9977336d3.png">
### Response 
* 200 - OK - The request has succeeded. Succesfuly retrieved login details. 
* 404 - Resource Not Found - The requested resource does not exist. The message body will contain more information.

# CRUD OPERATIONS :

##User creating a new account. Sends a "__POST__ __/login/create__" request and saves the credentials in the db. 
<img width="965" alt="Screen Shot 2022-04-15 at 1 00 44 PM" src="https://user-images.githubusercontent.com/59256553/163599167-40572aeb-2937-4cb8-a92f-9d5be9d72dbc.png">

##User logging in into their account. Sends a "__GET__ __/login/read__" request and checks the credentials in the db. 






