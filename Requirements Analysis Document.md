# LSD_RAD2017
First project in Large Systems.
The task during the first eight weeks of the course is to implement a functional clone of **Hacker News**.

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
   A. Overview  
   B. Functional requirements  
   C. Nonfunctional requirements  
      a. Usability   
      b. Reliability  
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

The goal for the objectives and success criterias is to give the project team and stakeholders an insight of the developed system.
A projects success criteria can be stated as:

> Project success criteria are the standards by which the project will be judged at the end to decide whether or not it has been successful in the eyes of the stakeholders.

The below table will describe the objectives and how to success them.

**Objectives**  | **Success Criteria**
------------    | ------------
Everyone is trained and have a basic understanding of the skills that are needed to achieve the project | To achieve this, the project team will undergo a training course in the used technology for the project. This makes sure that everyone is on the same level or atleast close to.
Project structure is essential to keep up the speed | A project management tool will be used to give the project team a view of the current status of the project. Everyone on the project should be able to see what their colleagues are working on. This tool will also show what functionality is needed, what are ongoing, what is in test phase, and what is done.
Everyone has an understanding on what is going | A weekly meeting will be hold to look retrospectly on the project. What has been done, what are people working on, and is their any questions to the project leader or stakeholders
Functionality are not done before the test says so | The person(s) working on a functionality should make some kind of test to make sure that it is working as intended. Also when the project change.
Everyone in the project team has the same version of the project | By using a versioning control system we can make sure that everyone in the project team are having the same version of the built project. An example could be to use GIT as a version control system. Before end day ends every employee push to the repository; either the main or their own branch. Before the day starts they pull the newest version of the project.

## D. Definitions, acronyms, and abbreviations

The definitions, acronyms, and abbreviations have the intention to give an overview of the special "words" throughout the requirement analysis. This can be words or abbreviations that are not quitly understood, which then will be found in the below table to clear up any confusions for who might read this analysis.

By definition:
> an abbreviation may be any type of shortened form, such as words with the middle omitted (for example, Rd for road or Dr for Doctor), an acronym is a word formed from the first letter or first few letters of each word in a phrase (such as sonar, created from sound navigation and ranging). 

**Acronym**       | **Definition**
----------------  | --------------
REST              | Representational Stateless Transfer - a way of providing interoperability between computer systems on the Internet. 
API               | Application Programming Interface - is a set of subroutine definitions, protocols, and tools for building application software
GIT               | GIT is just a word. GIT is a version control system for tracking changes in computer files and coordinating work on those files among multiple people.
UUID              | Universally Unique Identifier - is a 128-bit number used to identify information in computer systems
URL               | Uniform Resource Locater - is a reference to a web resource that specifies its location on a computer network and a mechanism for retrieving it
HN                | HackerNews - Description can be read at the beginning of the analysis


**Abbreviation**  | **Definition**
----------------  | --------------


## E. References

1. [HackerNews Homepage](https://news.ycombinator.com/)
2. 

## F. Overview
The system is an exact copy of Hackernews’ system. Therfore our system will have the same functionallity as their system has.


# 2. Current system

The current system is HackerNews and you can see the description of the current system by reading the "Purpose of the System" and the "Scope of the system".

# 3. Proposed system
### A. Overview

The system is a exact copy of [Hackernews'](https://www.hackernews.com) system. Therfore our system will have the same functionallity as their system has.


### B1. Functional requirement

These are some of the functional requirements that our system has:
###### Create user account
- A user is able to create an account
- The user should select an username and a password
- The user is now able to login

###### Login
- A user login with an username and a password
- System checks the database
- If the user is in the system, the user is logged in.

###### Comments on story
- A user comments on a story
- System checks if the user is logged in
- If true, then the comment is posted

###### See story
- A user is able to see stories - even though they're not logged in

###### Upvoting
- A user press the upvote button on a story
- System checks if the user is logged in
- System checks how many point the user has
- If both criteria are met, then the upvote is succesful


### B2. Nonfunctional Requirements
Requirements elaborating performance characteristics of the system. 

a. Usability
*	Usability tests are required for all the system functions. Frequently used and critical functions are prioritized. 

b. Reliability
*	The system shall reside on a server with an uptime of more than 95% during the period of 
*	The system shall not lose any contents, even during downtime (for upgrade/crashes). 
*	A 24/7 uptime mechanism buffering incoming content to the system is required, in order to publish new data to the system when it is operational. This fixes data loss during system downtime. 
*	The systems performance should be monitored. 
*	Thorough testing of the  
*	Users should be able to trust the system. Failures should be rare. 

c. Performance
*	The response time of user actions should mimic that of the original Hacker News website. 
*	During stress on the system, the maximum response time should not exceed __ ms. 
*	The system should be scalable, in order to function optimally on devices with different screen sizes. 

d. Supportability
*	The implementation code shall be well documented.
*	Test cases shall be well documented. 

e. Implementation
*	The system should be able to store the required amount of data. For example, the amount of a user’s Karma points or a post’s up-votes. 
*	The systems data or source code should not be available to a third party (matter of security). 
*	An underlying database must handle all data. 


f. Interface
*	The base design shall mimic the one of the original Hacker News.
*	Orange/gray/black palette. 

g. Packaging
* TBD

h. Legal
* TBD

### D. System models
#### a. Scenarios
##### See new stories
**Scenario name**       | **See new stories**
------------    | ------------
**participating actor instances**| User
**Flow of events**           | <ol> <li> The user opens the website</li><li>The user is presented with the front page of the system</li><li>The user clicks the button in the top menu labeled "new".</li><li>The user is hereby presented with the newest stories uploaded to the sit.</li></ol>

##### Comment on stories
**Scenario name**       | Comment on stories
------------    | ------------
**participating actor instances**| User
**Flow of events** | <ol><li>The user opens the website</li><li>The user is presented with the front page of the system</li><li>The user logs in to the system by clicking "login"</li><li>The user clicks on the little button labeled "comments" below a story</li><li>The user enters the desired text in the comment field and presses "add comment"</li><li>The comment is now visible to other users<li></ol> 

##### Show something that a user made
**Scenario name**       | Show something that a user made
------------    | ------------
**participating actor instances**| User
**Flow of events** | <ol><li>The user opens the website</li><li>The user is presented with the front page of the system</li><li>The user clicks the button at the top labeled "show"</li><li>The user is is hereby presented with user-made projects, shown by the creators</li></ol>

##### Able to ask a question
**Scenario name**       | Able to ask a question
------------    | ------------
**participating actor instances**| User
**Flow of events** | <ol><li>The user opens the website</li><li>The user is presented with the front page of the system</li><li>The user clicks the button at the top labeled "submit"</li><li>The user writes a question in the textfield, leaving the "url" field blank</li><li>The question is now uploaded to the site</li></ol>


##### See asked questions
**Scenario name**       | See asked questions
------------    | ------------
**participating actor instances**| User
**Flow of events** | <ol><li>The user opens the website</li><li>The user is presented with the front page of the system</li><li>The user clicks the button at the top labeled "ask"</li><li>The user is hereby presented with questions from other users of the site</li></ol>

##### See job opportunities at startups funded by Y Combinator
**Scenario name**       | See job opportunities at startups funded by Y Combinator
------------    | ------------
**participating actor instances**| User
**Flow of events** | <ol><li>The user opens the website</li><li>The user is presented with the front page of the system</li>
<li>The user clicks the button at the top labeled "jobs"</li><li>The user is hereby presented with job opportunites</li></ol>

##### Submit a story
**Scenario name**       | Submit a story
------------    | ------------
**participating actor instances**| User
**Flow of events** | <ol><li>The user opens the website</li><li>The user is presented with the front page of the system</li><li>The user clicks the button at the top labeled "submit"</li><li>The user writes a desired title for the story in the "title" text field</li><li>The user writes an url for the story in the "url" text field</li><li>The user clicks the "submit" button</li><li>The story posted by the user is now visible on the site</li></ol>

##### Sign up and be a part of the community
**Scenario name**       | Sign up and be a part of the community
------------    | ------------
**participating actor instances**| User
**Flow of events** | <ol><li>The user opens the website</li><li>The user is presented with the front page of the system</li><li>The user clicks the button at the top labeled "login"</li><li>The user writes a desired username and password in the text fields under the "Create Account" section</li><li>The user clicks the button labeled "create account"</li><li>The user is now logged in with the created account</li></ol>

##### Login
**Scenario name**       | Login
------------    | ------------
**participating actor instances**| User
**Flow of events** | <ol><li>The user opens the website</li><li>The user is presented with the front page of the system</li><li>The user clicks the button at the top labeled "login"</li><li>The user writes the the personal credentials in the the text fields under the "Login" section</li><li>The user clicks the button labeled "login"</li><li>The user is now logged in</li></ol>






#### b. Use case models

##### Create account
**Use case name**       | Create account
------------    | ------------
**Participating actors**| User, Guest
**Flow of events** | <ol><li>The user opens the website</li><li>The user is presented with the front page of the system</li><li>The user clicks "login"</li><li>The user chooses an username and password</li><li>The user clicks "Create account"</li><li>The system stores the userdata in the database</li><li>The user is now logged in</li></ol>
**Entry condition**| None
**Exit condition** | <ol><li>The user is logged in, OR is promted to use another username</li></ol>
**Quality requirements** | The respoonse time for creating a user should not exceed that of the original website Hackernews

##### Login
**Use case name**       | Login
------------    | ------------
**Participating actors**| User
**Flow of events** | <ol><li>The user opens the website</li><li>The user is presented with the front page of the system</li><li>The user clicks login</li><li> The user enters personal login credentials.</li></li><li>The user clicks "Login".<li>The system crosschecks the entered data with the data available in the database.</li><li>The user is now logged in</li></ol>
**Entry condition**| * The user needs to have an account created beforehand. 
**Exit condition** | * The user is logged in OR is told to check if entered data is correct. </li></ol>
**Quality requirements** | The response time for checking the database and logging the user in, should not exceed that of the original website Hackernews.


##### Ask Hacker News
**Use case name**       | Ask Hacker News
------------    | ------------
**participating actor instances**| User
**Flow of events** | <ol><li>The user opens the website</li><li>The user is presented with the front page of the system</li><li>The user clicks the button at the top labeled "submit"</li><li>The user writes a question in the textfield, leaving the "url" field blank</li><li>The user clicks the button at the top labeled "submit".</li><li>The system determines if the user has entered only text, or url also.</li><li>If the user has only entered text, the question is now uploaded to the site</li></ol>
**Entry condition**| * The user needs to be logged in in order to submit a question. 
**Exit condition** | * The post is created and is now visible to other users of the site. </li></ol>
**Quality requirements** | The response time for uploading the question should not exceed that of the original website Hackernews.

##### Submit a story
**Use case name**       | Submit a story
------------    | ------------
**participating actor instances**| User
**Flow of events** | <ol><li>The user opens the website</li><li>The user is presented with the front page of the system</li><li>The user clicks the button at the top labeled "submit"</li><li>The user writes a desired title for the story in the "title" text field</li><li>The user writes an url for the story in the "url" text field</li><li>The user clicks the "submit" button</li><li>The system determines if the user has entered only text, or title and a url also.</li><li>If both the title and the url field is used, the story posted by the user is now visible on the site</li></ol>
**Entry condition**| * The user needs to be logged in in order to submit a post. 
**Exit condition** | * The post is created and is now visible to other users of the site. </li></ol>
**Quality requirements** | The response time for submitting a post should not exceed that of the original website Hackernews.

##### Sort stories
**Use case name**       | Sort stories
------------    | ------------
**Participating actors**| User, Guest
**Flow of events** | <ol><li>The user is logged in</li><li>The user press the sort button, and sorts after the newest story</li><li>The system calls a sort function, that orders the list, so the new story is first</li><li>The list are now sorted</li></ol>
**Entry condition**| None
**Exit condition** | <ol><li>The user refreshes the page</li></ol>
**Quality requirements** | The sorting function should work fast

##### Viewing a story
**Use case name**       | View story
------------    | ------------
**Participating actors**| User, Guest
**Flow of events** | <ol><li>The user goes to the website</li><li>The user sees a list with stories</li><li>The user clicks on a story</li><li>The system gets the right story from the database</li><li>The user can now read the story</li></ol>
**Entry condition**| Clicking on a story
**Exit condition** | <ol><li>Clicking back</li></ol>
**Quality requirements** | The list should be updated fast to the user, and there should be low response time

##### View Job Opportunities
**Scenario name**       | Job Opportunities
------------    | ------------
**participating actor instances**| User
**Flow of events** | <ol><li>The user opens the website</li><li>User clicks on the "Jobs" menu item</li><li>The user is presented with jobs from startups that are funded by Y Combinator</li><li>The user can click on any post to see its content</li><li>User will be directed to a post on the website or an external post about the job opportunity</li></ol>
**Entry condition**| Clicking on the menu item: "Jobs"
**Exit condition** | <ol><li>Clicking on another menu item or homepage</li></ol>
**Quality requirements** | The list should be updated fast to the user, and there should be low response time



