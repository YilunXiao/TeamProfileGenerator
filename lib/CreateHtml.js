const fs = require('fs');
// const Employee = require('./Employee');
// const Engineer = require('./Engineer');
// const Intern = require('./Intern');
// const Manager = require('./Manager');

// Class which creates the html page
class CreateHtml {
    // Takes in a managers, engineers, and an interns array to put on the page
    constructor(managers, engineers, interns) {
        this.managers = managers;
        this.engineers = engineers;
        this.interns = interns;
    }

    // Creates page using employees
    createPage() {
        const team = this.createEls();

        const pageTemplate = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <!-- Bootstrap CSS -->
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
            <title>Team</title>
        </head>
        <body>
            <!-- Navbar -->
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand mx-auto" href="#">
                <h1>Team</h1>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                    </li>
                    </ul>
                </div>
            </nav>
        
            <!-- Carousel -->
            <main class="p-4">
            <div id="carouselIndicators" class="carousel slide border rounded" data-ride="carousel" data-interval="false">
                <ol class="carousel-indicators position-relative">
                  <button data-target="#carouselIndicators" data-slide-to="0" class="m-1 rounded active">Managers</button>
                  <button data-target="#carouselIndicators" data-slide-to="1" class="m-1 rounded">Engineers</button>
                  <button data-target="#carouselIndicators" data-slide-to="2" class="m-1 rounded">Interns</button>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active p-5">
                    ${team[0]}
                    </div>
                    <div class="carousel-item p-5">
                    ${team[1]}
                    </div>
                    <div class="carousel-item p-5">
                    ${team[2]}
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
            </div>
            </main>
        
            <!-- Optional JavaScript -->
            <!-- jQuery first, then Popper.js, then Bootstrap JS -->
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
        </body>
        </html>`;

        // Create html file using template
        fs.writeFile('teamPage.html', pageTemplate, function (err) {
            if (err) throw err;
            console.log('HTML page created!');
        });
    }

    // Creates group elements
    createEls() {
        const team = [];
        let managersEl = '';
        let engineersEl = '';
        let internsEl = '';

        for (let employee of this.managers) {
            managersEl += this.createEl(employee);
        }
        team.push(managersEl);

        for (let employee of this.engineers) {
            engineersEl += this.createEl(employee);
        }
        team.push(engineersEl);

        for (let employee of this.interns) {
            internsEl += this.createEl(employee);
        }
        team.push(internsEl);

        return team;
    }

    // Creates an HTML card element using an employee/manager/engineer/intern Object
    createEl(employee) {
        let extraInfo = '';

        switch(employee.getRole()) {
            case 'Manager':
                extraInfo = 'Office Number: ' + employee.officeNumber;
                break;
            case 'Engineer':
                extraInfo = 'GitHub: ' + employee.getGithub();
                break;
            case 'Intern':
                extraInfo = 'School: ' + employee.getSchool();
                break;
            default:
                // code block
        }
        
        const cardTempl = `
        <div class="card mb-5 mr-4 w-25 float-left">
          <div class="card-header">
            <h5>${employee.getName()}</h5>
          </div>
          <div class="card-body">
            <p class="card-text">ID: ${employee.getId()}</p>
            <p class="card-text">Role: ${employee.getRole()}</p>
            <p class="card-text">Email: ${employee.getEmail()}</p>
            <p class="card-text">${extraInfo}</p>
          </div>
        </div>`;

        return cardTempl;
    }
}

module.exports = CreateHtml;