# Starting

## Needs :-
1. tiny mce - Editor
2. appwrite.io - Storing the database
3. html react parser
4. react forms
5. .env
6. redux toolkit
7. react - redux
8. react-router-dom
9. tinymce
10. html-react-parser
11. reacthookforms


## Step2

- Setup the env
- add it to git ignore
**Good Practise**
Make a conf folder -> conf.js -> make an object `conf = {}` and add key as variables and then its value, then export

- Make Sure to use framework specific syntax to export the .env variable
for eg
for create-react-app
> process.env.{variable name}
for vite
> import.meta.env.{variable name}

- Also variable name should be framework specific


## Step 3

making auth.js

whick ever backend service you are using for example Firebase,appwrite etc.

if you change the service then code would remain the same i.e you just have to change the methods used

So if you are making are making an auth.js file first make a class 
- make the client and just declare account
- dont make the object directly as it would lead to waste of resource,we want that when someone create the object of our auth then we make the resources
- then make the constructor that would make the account, whenever there is creation of new object then that would lead to creation of account
- now make function in the class,there are two methods 
    - use promises.
        - promises will run irregardless of upper code running
    - use async await. Will run only above processes are done.i.e constructo to be called