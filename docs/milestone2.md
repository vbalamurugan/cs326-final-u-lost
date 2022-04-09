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
### Output
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
### Output
### Response 
* 200 - OK - The request has succeeded. The reporter has succesfully updated an item.
* 404 - Resource Not Found - The requested resource does not exist. The message body will contain more information.

## __DELETE__ __/reporter/delete__
API request of type delete to delete an existing item in a particular category.(In this instance the user is a reporter who wishes to delete item that was previously reported by them.)
### Input
* id - id of item created. 
### Output
### Response 
* 200 - OK - The request has succeeded. The reporter has succesfully deleted an item. 
* 404 - Resource Not Found - The requested resource does not exist. The message body will contain more information.

## __GET__ __/reporter/read__
API request of type get to retrieve item details which was posted by the current user.(In this instance the user is a reporter who wishes to report a lost item.)
### Input
* id - id of item created. 
### Output
### Response 
* 200 - OK - The request has succeeded. Succesfuly retrieved login details. 
* 404 - Resource Not Found - The requested resource does not exist. The message body will contain more information.


## __GET__ __/finder/read__
API request of type get to retrieve item details which was posted by the current user.(In this instance the user is a reporter who wishes to report a lost item.)
### Input
* category - category of the items to be read. 
### Output
### Response 
* 200 - OK - The request has succeeded. Succesfuly retrieved login details. 
* 404 - Resource Not Found - The requested resource does not exist. The message body will contain more information.

