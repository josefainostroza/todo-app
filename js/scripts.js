const allButtomElement = document.getElementById('all')
const activeButtomElement = document.getElementById('active')
const completedButtomElement = document.getElementById('completed')

const pressButtomFilters = () => {
    if(allButtomElement){
        allButtomElement.classList.add('select')
    }
    console.log(pressButtomFilters)
}
allButtomElement.addEventListener('click',pressButtomFilters)
// const printProducts = (array) => {
//     const fragment = document.createDocumentFragment();
//     array.map((product) => {
//       const newItem = document.createElement('div');
//       newItem.classList.add('container-image');
  
//       const imgElement = document.createElement('img');
//       imgElement.classList.add('image');
//       imgElement.src = product.img;
//       imgElement.alt = product.name;
  
//       const textDiv = document.createElement('div');
//       textDiv.classList.add('text');}
//     )}
    
//     printProducts(products);