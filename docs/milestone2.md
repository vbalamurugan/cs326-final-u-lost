# Team Name

* U-Lost

# Web Application Name

* UMass Amherst Lost & Found 

# Team Work for Milestone 1

* Sahil was responsible for building the pages which Reporter and Finder will see individually.
* Sidharth was responsible for building the Sign-in and Sign-up pages.
* Vikas was responsible for building the "Categories" page.
* Nishant was responsible for building the "Common" page which the Reporter and Finder will see.
* Everyone contributed in creating the wireframes.

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
* API request of type post to create login for new user for given email and password.
### Response 
* 200 - OK - The request has succeeded. The client has succesfully created an account.
* 400 - Bad Request - The request could not be understood due to invalid syntax. The message body will contain more information.
* 403 - Request Forbidden - Valid request but server is refusing to fulfill it. The message body will contain more information.

## __GET__ __/login/read__
* API request of type get to retrieve login credentials for existing user for given email.
### Response 
* 200 - OK - The request has succeeded. Succesfuly retrieved login details. 
* 404 - Resource Not Found - The requested resource does not exist. The message body will contain more information.

## __POST__ __/reporter/create__
* API request of type post to create an item for a particular category previously choosen by user.(In this instance the user is a reporter who wishes to report a lost item.)
### Response 
* 200 - OK - The request has succeeded. The reporter has succesfully created an item.
* 400 - Bad Request - The request could not be understood due to invalid syntax. The message body will contain more information.

## __PUT__ __/reporter/update__
* API request of type put to update an existing item in a particular category.(In this instance the user is a reporter who wishes to update item details that was previously reported by them.)
### Response 
* 200 - OK - The request has succeeded. The reporter has succesfully updated an item.
* 404 - Resource Not Found - The requested resource does not exist. The message body will contain more information.

## __DELETE__ __/reporter/delete__
* API request of type delete to delete an existing item in a particular category.(In this instance the user is a reporter who wishes to delete item that was previously reported by them.)
### Response 
* 200 - OK - The request has succeeded. The reporter has succesfully deleted an item. 
* 404 - Resource Not Found - The requested resource does not exist. The message body will contain more information.

## __GET__ __/reporter/read__
* API request of type get to retrieve item details which was posted by the current user.(In this instance the user is a reporter who wishes to report a lost item.)
### Response 
* 200 - OK - The request has succeeded. Succesfuly retrieved login details. 
* 404 - Resource Not Found - The requested resource does not exist. The message body will contain more information.


## __GET__ __/finder/read__
* API request of type get to retrieve item details which was posted by the current user.(In this instance the user is a reporter who wishes to report a lost item.)
### Response 
* 200 - OK - The request has succeeded. Succesfuly retrieved login details. 
* 404 - Resource Not Found - The requested resource does not exist. The message body will contain more information.

