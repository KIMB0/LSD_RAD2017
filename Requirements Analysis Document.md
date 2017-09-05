﻿# LSD_RAD2017
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


# 3. Proposed system
### A. Overview

### B. Nonfunctional Requirements
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
**Scenario name**       | See new stories
------------    | ------------
**participating actor instances**| **
**Flow of events**           | 
1. The user opens the website. 
2. The user is presented with the front page of the system.
3. The user clicks the button in the top menu labeled "new".
4. The user is hereby presented with the newest stories uploaded to the site. 

##### Comment on stories
**Scenario name**       | Comment on stories
------------    | ------------
**participating actor instances**| **
**Flow of events**           | 
1. The user opens the website. 
2. The user is presented with the front page of the system.
3. The user logs in to the system by clicking "login".
4. The user clicks on the little button labeled "comments" below a story.
5. The user enters the desired text in the comment field and presses "add comment". 
6. The comment is now visible to other users. 

##### Show something that a user made
**Scenario name**       | Show something that a user made
------------    | ------------
**participating actor instances**| **
**Flow of events**           | 
1. The user opens the website. 
2. The user is presented with the front page of the system.
3. The user clicks the button at the top labeled "show". 
4. The user is is hereby presented with user-made projects, shown by the creators. 

##### Able to ask a question
**Scenario name**       | Able to ask a question
------------    | ------------
**participating actor instances**| **
**Flow of events**           | 
1. The user opens the website. 
2. The user is presented with the front page of the system.
3. The user clicks the button at the top labeled "submit". 
4. The user writes a question in the textfield, leaving the "url" field blank.
5. The question is now uploaded to the site. 


##### See asked questions
**Scenario name**       | See asked questions
------------    | ------------
**participating actor instances**| **
**Flow of events**           | 
1. The user opens the website. 
2. The user is presented with the front page of the system.
3. The user clicks the button at the top labeled "ask". 
4. The user is hereby presented with questions from other users of the site.  

##### See job opportunities at startups funded by Y Combinator
**Scenario name**       | See job opportunities at startups funded by Y Combinator
------------    | ------------
**participating actor instances**| **
**Flow of events**           | 
1. The user opens the website. 
2. The user is presented with the front page of the system.
3. The user clicks the button at the top labeled "jobs".  
4. The user is hereby presented with job opportunites. 

##### Submit a story
**Scenario name**       | Submit a story
------------    | ------------
**participating actor instances**| **
**Flow of events**           | 
1. The user opens the website. 
2. The user is presented with the front page of the system.
3. The user clicks the button at the top labeled "submit". 
4. The user writes a desired title for the story in the "title" text field. 
5. The user writes an url for the story in the "url" text field. 
7. The user clicks the "submit" button. 
8. The story posted by the user is now visible on the site.

##### Sign up and be a part of the community
**Scenario name**       | Sign up and be a part of the community
------------    | ------------
**participating actor instances**| **
**Flow of events**           | 
1. The user opens the website. 
2. The user is presented with the front page of the system.
3. The user clicks the button at the top labeled "login". 
4. The user writes a desired username and password in the text fields under the "Create Account" section.
5. The user clicks the button labeled "create account". 
6. The user is now logged in with the created account. 

##### Login
**Scenario name**       | Login
------------    | ------------
**participating actor instances**| **
**Flow of events**           | 
1. The user opens the website. 
2. The user is presented with the front page of the system.
3. The user clicks the button at the top labeled "login". 
4. The user writes the the personal credentials in the the text fields under the "Login" section.
5. The user clicks the button labeled "login". 
6. The user is now logged in. 






#### b. Use case models
