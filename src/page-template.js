
const generateManager = managerArr => {
    if(!managerArr){
        return '';
    }

    return `
    <div class="card col-3 p-0 m-2">
        <div class="card-header bg-primary">
            <h3>${managerArr[0].getName()}</h3>
            <p>${managerArr[0].getRole()}</p>
        </div>
        <div class="card-content">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${managerArr[0].getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${managerArr[0].getEmail()}">${managerArr[0].getEmail()}</a></li>
                <li class="list-group-item">Office Number: ${managerArr[0].officeNumber}</li>
            </ul>
        </div>
    </div>
    `;
}

const generateEngineer = engineerArr => {
    if(engineerArr.length === 0){
        return '';
    }

    let htmlContent = ``;
    for(let i=0; i<engineerArr.length; i++){
        htmlContent += `<div class="card col-3 p-0 m-2">
        <div class="card-header bg-primary">
            <h3>${engineerArr[i].getName()}</h3>
            <p>${engineerArr[i].getRole()}</p>
        </div>
        <div class="card-content">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineerArr[i].getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineerArr[i].getEmail()}">${engineerArr[i].getEmail()}</a></li>
                <li class="list-group-item">Github Profile: <a href="https://github.com/${engineerArr[i].getGithub()}" target="_blank">${engineerArr[i].getGithub()}</a></li>
            </ul>
        </div>
        </div>
    `;
    }

    return htmlContent;
    
}

const generateIntern = internArr => {
    if(internArr.length === 0){
        return '';
    }

    let htmlContent = ``;
    for(let i=0; i<internArr.length; i++){
        htmlContent += `<div class="card col-3 p-0 m-2">
        <div class="card-header bg-primary">
            <h3>${internArr[i].getName()}</h3>
            <p>${internArr[i].getRole()}</p>
        </div>
        <div class="card-content">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${internArr[i].getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${internArr[i].getEmail()}">${internArr[i].getEmail()}</a></li>
                <li class="list-group-item">School: ${internArr[i].getSchool()}</li>
            </ul>
        </div>
        </div>
    `;
    }

    return htmlContent;
}

module.exports = (managerArr, engineerArr, internArr) => {

      return `
      <!DOCTYPE html>
      <html lang="en">
    
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <link rel="stylesheet" href="style.css">
      </head>
    
      <body>
        <header>
            <h1>My Team</h1>
        </header>
        <main>
            <div class="row justify-content-center">
                ${generateManager(managerArr)}
            </div>
            <div class="row justify-content-center">
                ${generateEngineer(engineerArr)}
            </div>
            <div class="row justify-content-center">
                ${generateIntern(internArr)}
            </div>
        </main>
      </body>

      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
      </html>
      `;
  }