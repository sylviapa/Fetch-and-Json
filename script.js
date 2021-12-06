/*
async function getDegrees(url) {
    // fetch the url
    await fetch(url)
      //get your data here, and check for the response status. If it's not 200, throw an error
      .then((response) => response.json())
      .then((data) =>
        document.write(
          `My first degree was a ${data.data[0].degrees.bachelors.data.type} from ${data.data[0].degrees.bachelors.data.institution} in ${data.data[0].degrees.bachelors.data.date}`
        )
      );
  }
  
  getDegrees("./src/degrees.json");
*/

document.addEventListener("DOMContentLoaded", function(event) {
  fetch('my_degree.json')
    .then(response => response.json())
    .then(data => { 
    
      const table = document.createElement('table');
    
      let tr = document.createElement('tr');
      let th1 = document.createElement('th');
      let th2 = document.createElement('th');
      let th3 = document.createElement('th');
      let th4 = document.createElement('th');
  
      let td1 = document.createElement('td');
      let td2 = document.createElement('td');
      let td3 = document.createElement('td');
      let td4 = document.createElement('td');
  
      let content = document.createTextNode('School');
      th1.appendChild(content);
      
      content = document.createTextNode('Program/Major');
      th2.appendChild(content);
    
      content = document.createTextNode('Type');
      th3.appendChild(content);
    
      content = document.createTextNode('Year conferred');
      th4.appendChild(content);
    
      tr.appendChild(th1);
      tr.appendChild(th2);
      tr.appendChild(th3);
      tr.appendChild(th4);
      table.appendChild(tr);
    
      data.degrees.forEach((element, index) => {
        
        tr = document.createElement('tr');
        td1 = document.createElement('td');
        td2 = document.createElement('td');
        td3 = document.createElement('td');
        td4 = document.createElement('td');
        
        content = document.createTextNode(element.School);
        td1.appendChild(content);
        
        content = document.createTextNode(element.Program_Major);
        td2.appendChild(content);
        
        content = document.createTextNode(element.Type);
        td3.appendChild(content);
        
        content = document.createTextNode(element.Year_conferred);
        td4.appendChild(content);
        
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
  
        table.appendChild(tr);
        
      });
  
    
      document.body.appendChild(table);
    });
    
  });