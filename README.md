# TeamProfGen


## Requirements: 
1. Use command line to accept user input
2. Use user input to make the HTML page
3. When you click on an email, on the HTML page, the mail app should pop up to email that person
4. Clicking on the Github profile should open up their profile in a new tab 
5. User should be prompted with the following: 
    ### Team Manager
    1. Name
    2. Employee ID
    3. Email Address 
    4. Office Number


    ### Engineer 
    1. Name
    2. Employee ID
    3. Email
    4. Github Username

    
    ### Intern 
    1. Name
    2. Employee ID
    3. Email
    4. School

6. After the Team Manager is info is put in, the user is prompted to add an employee/intern
7. After inputting the employee/intern info, the user is prompted again to add employee/intern. They should be prompted to 'end' adding people
8. The application must use Inquirer and Jest
9. The application must use the following classes, properties, and methods:
    ### Employee
    1. name, id, email
    2. getName(), getId(), getEmail(), getRole()

    ### Manager
    1. name, id, email, officeNumber
    2. getName(), getId(), getEmail(), getRole()

    ### Engineer
    1. name, id, email, github
    2. getName(), getId(), getEmail(), getRole(), getGithub()

    ### Intern
    1. name, id, email, school
    2. getName(), getId(), getEmail(), getRole(), getSchool(s)