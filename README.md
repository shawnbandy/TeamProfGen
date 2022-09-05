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
    2. getName(), getId(), getEmail(), getRole(), getSchool()


## Accomplished by
1. Using inquirer to get input from the user
2. Using fs to create HTML in the /dist folder upon input completion 
3. Having a clickable email that defaults you to your default mailing application 
4. Having a github username redirect to the github user profile
5/6. User is prompted for team manager first, and then is allowed to add different employees if wanted 
7. Continual prompting of new members after member completion 
8. Application uses Inquirer and Jest
9. Application has the required classes with properties and methods


## Application Description
This application uses node.js, inquirer, and jest to dynamically create a team profile website based on user input. On running the index.js with node.js, the user is prompted for a manager name, email, office number, and ID number with inquirer. These values are used to create a new object using the Manager class, and that object being stored into an array for later use. The user is then prompted to add new members if desired, with options being a generic employee, engineer, or intern, each taking and using inputs from the user to create an object with their respective class. Once the user has added their team and has no more users to add, the objects stored in the array are put into an HTML page outputted in the /dist folder. Each class is tested in a TDD with jest. 

Link to Repo: https://github.com/shawnbandy/TeamProfGen

Link to Deployed Page: https://github.com/shawnbandy/TeamProfGen/blob/main/assets/dist/result.html

Video to Application demo: https://youtu.be/lKQZ5qEPn4w

Image of Application Demo: ![image](https://user-images.githubusercontent.com/105885313/188448910-fe89f442-7669-435d-93a7-ccf8d89508e0.png)



