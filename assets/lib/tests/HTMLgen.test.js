const HTML = require('../HTMLgen');
const fs = require('fs');
const Engineer = require('../Engineer');
const Manager = require('../Manager');
const Intern = require('../Intern');
const Employee = require('../Employee');

const e = new Engineer('name', '1', 'email', 'github')
const i = new Intern('name', '1', 'email', 'school')
const em = new Employee('name', '1', 'email')
const m = new Manager('name', '1', 'email', '2')

const array = [e, i, em, m];

jest.mock("fs");


describe('HTMLGenerator', () =>{
    describe('Card Generator', () =>{
        it('should intake an engineer object with name, id, email, and role, and give a card with that information', () =>{
            const h = new HTML(array);
            expect(h.cardGenerator(e)).toEqual(eCard);
        })
        it('should intake an intern object with name, id, email, and role, and give a card with that information', () =>{
            const h = new HTML(array)
            expect(h.cardGenerator(i)).toEqual(iCard)
        })
        it('should intake an employee object with name, id, email, and role, and give a card with that information', () =>{
            const h = new HTML(array)
            expect(h.cardGenerator(em)).toEqual(emCard)
        })
        it('should intake a manager object with name, id, email, and role, and give a card with that information', () =>{
            const h = new HTML(array)
            expect(h.cardGenerator(m)).toEqual(mCard)
        })
    })
})



//!the cards are pretty large so I'm putting them down here
const eCard =
                `<div id="card" class="card col-lg-3 col-sm-6" style="background-color: #7C7C7C;">
                  <div class="card-body text-center">
                    <h5 class="text-light">Engineer</h5>
                    <ul id="cardList" class="list-group">
                      <li class="list-group-item" style="background-color: #92DCE5;">name</li>
                      <li class="list-group-item" style="background-color: #92DCE5;">ID: 1</li>
                      <li class="list-group-item" style="background-color: #92DCE5;"><a href="mailto: email">Email: email</a></li>
                      <li class="list-group-item" style="background-color: #92DCE5;"><a href="https://github.com/github">GitHub: github</a></li>
                    </ul>
                  </div>
                </div>`

const emCard =
                `<div id="card" class="card col-lg-3 col-sm-6" style="background-color: #7C7C7C;">
                  <div class="card-body text-center">
                    <h5 class="text-light">Employee</h5>
                    <ul id="cardList" class="list-group">
                      <li class="list-group-item" style="background-color: #92DCE5;">name</li>
                      <li class="list-group-item" style="background-color: #92DCE5;">ID: 1</li>
                      <li class="list-group-item" style="background-color: #92DCE5;"><a href="mailto: email">Email: email</a></li>
                    </ul>
                  </div>
                </div>`

const iCard =
                `<div id="card" class="card col-lg-3 col-sm-6" style="background-color: #7C7C7C;">
                  <div class="card-body text-center">
                    <h5 class="text-light">Intern</h5>
                    <ul id="cardList" class="list-group">
                      <li class="list-group-item" style="background-color: #92DCE5;">name</li>
                      <li class="list-group-item" style="background-color: #92DCE5;">ID: 1</li>
                      <li class="list-group-item" style="background-color: #92DCE5;"><a href="mailto: email">Email: email</a></li>
                      <li class="list-group-item" style="background-color: #92DCE5;">School: school</li>
                    </ul>
                  </div>
                </div>`

const mCard =
                `<div id="card" class="card col-lg-3 col-sm-6" style="background-color: #7C7C7C;">
                  <div class="card-body text-center">
                    <h5 class="text-light">Manager</h5>
                    <ul id="cardList" class="list-group">
                      <li class="list-group-item" style="background-color: #92DCE5;">name</li>
                      <li class="list-group-item" style="background-color: #92DCE5;">ID: 1</li>
                      <li class="list-group-item" style="background-color: #92DCE5;"><a href="mailto: email">Email: email</a></li>
                      <li class="list-group-item" style="background-color: #92DCE5;">Office: 2</li>
                    </ul>
                  </div>
                </div>`
