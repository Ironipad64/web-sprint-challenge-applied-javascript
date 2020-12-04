// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container



function Header() {

    const panelHeader = document.createElement("div");
    const panelDate = document.createElement("span");
    const panelTitle = document.createElement("h1");
    const panelTemp = document.createElement("span");

    panelHeader.className = 'header';
    panelDate.className = 'date';
    panelTemp.className = 'temp';
    //structure
    panelTitle.textContent = 'Lambda Times';
    panelDate.textContent = 'MARCH 28, 2020';
    panelTemp.textContent = '98°';

    panelHeader.appendChild(panelDate);
    panelHeader.appendChild(panelTitle);
    panelHeader.appendChild(panelTemp);






    return panelHeader;

}
const panelHeader = document.querySelector(".header-container")

panelHeader.appendChild(Header());

