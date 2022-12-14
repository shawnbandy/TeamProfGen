const fs = require('fs')


class HTMLGen {

    constructor (teamArray){
        this.teamArray = teamArray;
    }

    htmlGenerate(array){

      let input = ""

      for (let i = 0; i< array.length; i++){
        input += array[i];
      }

        const baseHTML = 
        `<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <!--*Bootstrap linking-->
                <link
                  rel="stylesheet"
                  href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                />
                <!--*other fonts-->
                <link
                  rel="stylesheet"
                  href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" 
                  integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
                  crossorigin="anonymous"
                />
                <!--*google fonts-->
                <link
                  href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" 
                  rel="stylesheet"
                />
                <script
                  type="text/javascript"
                  src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js"
                ></script>
                <link rel="stylesheet" href="assets/css/style.css" />
                <title>Team Profile Generator</title>
            </head>
        
              <body style="background-color: #EEE5E9;">
        
                <header class="text-center" style="background-color: #D64933;">
                  <h3 class="text">Team Profile Generator</h3>
                </header>
        
                <main id="mainBody">
                  <section id="employeeSection" class="container col-12 row justify-content-center">
                    ${input}
                  </section>
                </main>
        
                <script type= "text/javascript" src="/TeamProfGen/assets/index.js"></script>
        
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
              </body>
        
        </html>`

        fs.writeFile("./dist/result.html", baseHTML, (err) => {
            err ? console.log(err) : console.log("File written successfully")
        })

    }

    cardGenerator(object){
        this.name = object.name;
        this.id = object.id;
        this.email = object.email;
        this.role = object.role;
        this.special;

        let card;
        
        switch (this.role){
            case "Engineer" :
                this.special = object.gitHub
                card = 
                `<div id="card" class="card col-lg-3 col-sm-6" style="background-color: #7C7C7C;">
                  <div class="card-body text-center">
                    <h5 class="text-light">${this.role}</h5>
                    <ul id="cardList" class="list-group">
                      <li class="list-group-item" style="background-color: #92DCE5;">${this.name}</li>
                      <li class="list-group-item" style="background-color: #92DCE5;">ID: ${this.id}</li>
                      <li class="list-group-item" style="background-color: #92DCE5;"><a href="mailto: ${this.email}">Email: ${this.email}</a></li>
                      <li class="list-group-item" style="background-color: #92DCE5;"><a href="https://github.com/${this.special}">GitHub: ${this.special}</a></li>
                    </ul>
                  </div>
                </div>`
                break;
            case "Manager" :
                this.special = object.office
                card = 
                `<div id="card" class="card col-lg-3 col-sm-6" style="background-color: #7C7C7C;">
                  <div class="card-body text-center">
                    <h5 class="text-light">${this.role}</h5>
                    <ul id="cardList" class="list-group">
                      <li class="list-group-item" style="background-color: #92DCE5;">${this.name}</li>
                      <li class="list-group-item" style="background-color: #92DCE5;">ID: ${this.id}</li>
                      <li class="list-group-item" style="background-color: #92DCE5;"><a href="mailto: ${this.email}">Email: ${this.email}</a></li>
                      <li class="list-group-item" style="background-color: #92DCE5;">Office: ${this.special}</li>
                    </ul>
                  </div>
                </div>`
                break;
            case "Intern" :
                this.special = object.school
                card = 
                `<div id="card" class="card col-lg-3 col-sm-6" style="background-color: #7C7C7C;">
                  <div class="card-body text-center">
                    <h5 class="text-light">${this.role}</h5>
                    <ul id="cardList" class="list-group">
                      <li class="list-group-item" style="background-color: #92DCE5;">${this.name}</li>
                      <li class="list-group-item" style="background-color: #92DCE5;">ID: ${this.id}</li>
                      <li class="list-group-item" style="background-color: #92DCE5;"><a href="mailto: ${this.email}">Email: ${this.email}</a></li>
                      <li class="list-group-item" style="background-color: #92DCE5;">School: ${this.special}</li>
                    </ul>
                  </div>
                </div>`
                break;
            default :
                this.special = ""
                card = 
                `<div id="card" class="card col-lg-3 col-sm-6" style="background-color: #7C7C7C;">
                  <div class="card-body text-center">
                    <h5 class="text-light">Employee</h5>
                    <ul id="cardList" class="list-group">
                      <li class="list-group-item" style="background-color: #92DCE5;">${this.name}</li>
                      <li class="list-group-item" style="background-color: #92DCE5;">ID: ${this.id}</li>
                      <li class="list-group-item" style="background-color: #92DCE5;"><a href="mailto: ${this.email}">Email: ${this.email}</a></li>
                    </ul>
                  </div>
                </div>`
                break;
        }


        return card;
        
    }

}

module.exports = HTMLGen;

