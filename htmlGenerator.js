// parent html generator function that contains the layout markup
function htmlGenerator (employees) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Summary</title>
        <style>
            * {
                box-sizing: border-box;
            }

            body {
                font-family: 'Calibri', sans-serif;
                margin: 0;
            }

            header {
                text-align: center;
                background: #007180;
                color: white;
                text-shadow: 2px 2px #006f7e;
                width: 100%;
                line-height: 130px;
                font-size: 1.2em;
            }

            header h1 {
                margin: 0;
            }

            .card-container {
                margin: 20px 0;
                text-align: center;
            }

            .card {
                display: inline-block;
                width: 30%;
                margin: 10px;
            }

            .card-title {
                color: white;
                background: #00adc4;
                text-align: center;
                border-radius: 5px 5px 0 0;
                border-bottom: 3px solid #006f7e;
                overflow: auto;
            }

            .card-title h2 {
                margin-top: 5px;
            }

            .card-title h3 {
                margin-bottom: 5px;
            }

            .card-body {
                text-align: left;
                background: #eeeeee;
                padding: 15px;
                border-radius: 0 0 5px 5px;
            }

            .card-body p {
                margin: 5px 0;
                padding: 15px 10px;
                background: white;
                border: 1px solid #dddddd;
            }

            @media only screen and (max-width: 800px) {
                .card {
                    width: 40%;
                }
            }

            @media only screen and (max-width: 600px) {
                .card {
                    width: 80%;
                }
            }

        </style>
    </head>
    <body>
        <header>
            <h1>Team Summary</h1>
        </header>
        <div class="card-container">
        ${middleSectionGenerator(employees)}
        </div>
    </body>
    </html>`


};

// generates as many cards as there are employees in the employee array
function middleSectionGenerator(employees) {
    return employees.map(employee => {
        return cardGenerator(employee);
      }).join('\n');
 };

 // generates a single card with different parameters based on employee type
function cardGenerator(employee) {
    let fourthCategory;

    switch (employee.role) {
        case "Manager" :
            fourthCategory = "Office Number";
            break;
        case "Engineer" :
            employee.variable = `<a href="http://www.github.com/${employee.variable}">${employee.variable}</a>`;
            fourthCategory = "GitHub";
            break;
        case "Intern":
            fourthCategory = "School";
            break;
        default :
            console.log("something went wrong");
    }

    return `<div class="card">
                <div class="card-title">
                    <h3>${employee.role}</h3>
                    <h2>${employee.name}</h2>
                </div>
                <div class="card-body">
                    <p>ID: ${employee.id}</p>
                    <p>E-mail: ${employee.email}</p>
                    <p>${fourthCategory}: ${employee.variable}</p>
                </div>
            </div>`
};

module.exports = htmlGenerator;