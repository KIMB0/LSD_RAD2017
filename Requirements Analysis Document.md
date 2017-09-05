# LSD_RAD2017
First project in Large Systems.
The task during the first eight weeks of the course is to implement a functional clone of **Hacker News**.
# Your task until next week: Requirements Elicitation
* Extract a list of requirements from the description above. 
* Take special care of extracting a complete set of functional as well as non-functional requirements.
### Create a Requirements Analysis Document (RAD) for your project
1. Introduction  
  A. Purpose of the system  
  B. Scope of the system  
  C. Objectives and success criteria of the project  
  D. Definitions, acronyms, and abbreviations  
  E. References  
  F. Overview  
2. Current system
3. Proposed system  
···A. Overview  
  B. Functional requirements  
  C. Nonfunctional requirements  
  ··a. Usability  
     ···b. Reliability  
     c. Performance  
     d. Supportability  
     e. Implementation  
     f. Interface  
     g. Packaging  
     h. Legal       

    D. Systemmodels  
    -   A. Scenarios  
        B. Use case model  
4. Glossary


# 1. Introduction

## A. Purpose of the system
Hacker news is a social news website focusing on computer science and entrepreneurship. It is similiar to reddit. It is a website where users can post stories. It enables users to debate by letting them comment on stories and other users comments. For the user to comment on a story or another comment, they've to be logged in. 

Users can upvote and downvote stories or other users comment. However, unlike reddit the logged in user needs atleast 500 karma points before they are able to downvote content. Karma points are calculated by the number of up-votes a given user's content has received minus the number of down-votes. 
All users have the option to flag submitted content as spam.

## B. Scope of the system
The system will be build as a webapplication consisting in back- and frontend development. 
The backend will be build as a RESTful API, where the frontend will interact with the backend to retrieve the requested data. 
The frontend will present the user with an overview of stories and will be able to:

* See new stories
* Comments on stories
* Show something that a user made
* Able to ask a question
* See asked questions
* See job opportunities at startups funded by Y Combinator
* Submit a story
* Sign up and be a part of the community
* Login

The above is also the major functions, that is the most important part of the system.

The RESTful API will service external programs. It can provide stories, comments, jobs, Ask HN's and even polls. Everything is just an item and are identified by their ids, which are unique integers. They live under `/v0/item/<id>`.

## C. Objectives and success criteria of the project

## D. Definitions, acronyms, and abbreviations

## E. References

## F. Overview


# 2. Current system

# 2. Proposed system





### Items
All items have some of the following properties. Required properties are in **bold**.

**Field**       | **Description**
------------    | ------------
**id**          | The item's unique ID (UUID)
deleted         | true if the item is deleted
type            | The type of the item. One of "job", "story", "comment", "poll", or "pollopt"
by              | The username of the item's author
time            | Creation date of the item. Stated in Unix Time
text            | The comment, story, or poll text. HTML
dead            | true if the item is dead
parent          | The comment's parent: either another comment or the relevant story
poll            | The pollopt's associated poll
kids            | The ids of the item's comments in ranked display order
url             | The URL of the story
score           | The story's score or the votes for a pollopt
title           | The title of the story, poll, or job
parts           | A list of related pollopts, in display order
descendants     | In the case of stories or polls, the total comment count

### Users
Users are identified by case-sensitive ids, and live under `v0/user/`. Only users that have public activity (comments or story submissions) on the stire are available through the API.

**Field**       | **Description**
------------    | ------------
**id**          | The user's unique username. Case-sensitive. Required
delay           | Delay in minutes between a comment's creation and its visibility to other users
**created**     | Creation date of the user, in Unix Time
**karma**       | The user's karma
about           | The user's optional self-description. HTML
submitted       | List of the user's stories, polls, and comments

### HTTP Methods
Below is a table of the HTTP methods and their descriptions.

**Method**              | **Description**
------------            | -------------
**GET** /newest         | Get the newest story from hackernews
**GET** /comments       | Get newest comments
**GET** /show           | Show what other people have made that you can play with
**GET** /ask            | Get asked questions from newest to oldest
**GET** /jobs           | Get jobs at startups founded by Y Combinator
**GET** /v0/item/id     | Get the specific item  
**POST** /login         | Post login details to enter the application
**POST** /              | ad



* state of system. i.e., up-and-running or in upgrade
* get last ingested story
* get last comment on a story

### Nonfunctional Requirements
Requirements elaborating performance characteristics of the system. 

a. Usability
•	Usability tests are required for all the system functions. Frequently used and critical functions are prioritized. 

b. Reliability
•	The system shall reside on a server with an uptime of more than 95% during the period of 
•	The system shall not lose any contents, even during downtime (for upgrade/crashes). 
•	A 24/7 uptime mechanism buffering incoming content to the system is required, in order to publish new data to the system when it is operational. This fixes data loss during system downtime. 
•	The systems performance should be monitored. 
•	Thorough testing of the  
•	Users should be able to trust the system. Failures should be rare. 

c. Performance
•	The response time of user actions should mimic that of the original Hacker News website. 
•	During stress on the system, the maximum response time should not exceed __ ms. 
•	The system should be scalable, in order to function optimally on devices with different screen sizes. 

d. Supportability
•	The implementation code shall be well documented.
•	Test cases shall be well documented. 

e. Implementation
•	The system should be able to store the required amount of data. For example, the amount of a user’s Karma points or a post’s up-votes. 
•	The systems data or source code should not be available to a third party (matter of security). 
•	An underlying database must handle all data. 


f. Interface
•	The base design shall mimic the one of the original Hacker News.
•	Orange/gray/black palette. 

g. Packaging
* TBD

h. Legal
* TBD
