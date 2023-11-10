'use strict';

// const container = document.querySelector('.container');
const container = document.querySelector('.container--div');
const searchBox = document.querySelector('.input');
// const searchInput = document.querySelector('.input').value;
const stocks = document.querySelectorAll('.stocks');
// const productName = document.querySelectorAll('.h2');
const productName = document.getElementsByTagName('h2');

//1. store the items from html in an array of objects

const items = [
  {
    itemName: 'Fancy bag for Everyone',
    itemPrice: '$32.8',
    itemImage: 'img/pt-1.jpg',
  },
  {
    itemName: 'Fancy Sneakers',
    itemPrice: '$32.8',
    itemImage: 'img/pt-6.jpg',
  },
  {
    itemName: 'Lovely Shirt for boys',
    itemPrice: '$38',
    itemImage: 'img/pt-11.jpg',
  },
  {
    itemName: 'Lovely bag for travels',
    itemPrice: '$38',
    itemImage: 'img/pt-3.jpg',
  },
  {
    itemName: 'Pretty sneakers for all',
    itemPrice: '$32',
    itemImage: 'img/pt-8.jpg',
  },
  {
    itemName: 'Fancy bag for big men',
    itemPrice: '$32',
    itemImage: 'img/pt-2.jpg',
  },
  // {
  //   itemName: '',
  //   itemPrice: '',
  //   itemImage: '',
  // },

  {
    itemName: 'Nice shirt',
    itemPrice: '$33',
    itemImage: 'img/pt-14.webp',
  },
  {
    itemName: 'Nice sneakers',
    itemPrice: '$32',
    itemImage: 'img/pt-10.jpg',
  },
  {
    itemName: 'Big boys bag for multi-purpose',
    itemPrice: '$40',
    itemImage: 'img/pt-5.jpg',
  },
  {
    itemName: 'Beautiful sneakers for everyone',
    itemPrice: '$33',
    itemImage: 'img/pt-9.jpg',
  },
  {
    itemName: 'Fancy bag for travels',
    itemPrice: '$33',
    itemImage: 'img/pt-4.jpg',
  },

  {
    itemName: 'Cute Shirt for men',
    itemPrice: '$35',
    itemImage: 'img/pt-13.jpg',
  },

  {
    itemName: 'Fancy sneakers for sports',
    itemPrice: '$30',
    itemImage: 'img/pt-7.jpg',
  },
  {
    itemName: 'Big boys wear for men',
    itemPrice: '$35',
    itemImage: 'img/pt-12.jpg',
  },
];

//2. read the data from the array and update the UI

const updateUI = function (item) {
  container.innerHTML = '';

  item.forEach(itm => {
    const html = `
  <div class="stocks">
  <img src="${itm.itemImage}" alt="" />
  
  <div class="sales-desc">
    <h2 class="h2">${itm.itemName}</h2>
    <h3 class="h3">${itm.itemPrice}</h3>
  </div>
  </div>
  `;

    container.insertAdjacentHTML('beforeend', html);
  });
};
updateUI(items);
// console.log(items);
//3. get user input and use that to update the UI

// document.addEventListener('keyup', e => {
//   if (e.key === 'Enter') {
//     items.forEach(item => {
//       return item.itemName.toLowerCase().includes(searchBox.value)
//         ? console.log(item)
//         : '';
//     });
//     searchBox.value = '';
//   }
// });

// Event listener for the search box
searchBox.addEventListener('keyup', function (e) {
  const searchTerm = searchBox.value.toLowerCase();

  // Filter items based on user input
  const searchResults = items.filter(item =>
    item.itemName.toLowerCase().includes(searchTerm)
  );

  // console.log(searchResults);
  // Update UI with filtered results
  searchResults.length > 0 ? updateUI(searchResults) : updateUI(items);

  // Clear the search box
  // searchBox.value = '';
});
