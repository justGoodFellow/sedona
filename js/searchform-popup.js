'use strict';

document.documentElement.classList.replace('no-js', 'js');

var searchFormOpen = document.querySelector('.search__open-btn');
var searchForm = document.querySelector('.search-form');

if (searchFormOpen) {
  searchFormOpen.addEventListener('click', function () {
    searchForm.classList.toggle('search-form--show');
  });
}
