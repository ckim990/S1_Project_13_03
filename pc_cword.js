"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 3

   Crossword Puzzle Script
   
    Author: Christopher Kim
    Date:   3.20.19 
   
   Global Variables
   ================
   allLetters
      References all of the letter cells in the crossword table#crossword
   
   currentLetter
      References the letter currently selected in the puzzleLetter
      
   wordLetters
      References the across and down letters in the word(s) associated with the current letter
   
   acrossClue
      References the across clue associated with the current letter
      
   downClue
      References the down clue associated with the current letter
      
         
   Functions
   =========
   
   init()
      Initializes the puzzle, setting up the event handlers and the variable values
       
   formatPuzzle(puzzleLetter)
      Formats the appearance of the puzzle given the selected puzzle letter
      
   selectLetter(e)
      Applies keyboard actions to select a letter or modify the puzzle navigation
      
   switchTypeDirection()
      Toggles the typing direction between right and down
      
   getChar(keyNum)
      Returns the text character associated with the key code value, keyNum


*/











/*====================================================*/

var allLetters;
var currentLetter;
var wordLetters;
var acrossClue;
var downClue;
var typeDirection = "right";

window.onload = init;

function init() {
   allLetters = document.querySelectorAll('table#crossword span');

   currentLetter = allLetters[0];
   var acrossID = currentLetter.getAttribute('data-clue-a');

   var downID = currentLetter.getAttribute('data-clue-d');
   acrossClue = document.getElementById(acrossID);
   downClue = document.getElementById(downID);

   console.log(acrossClue);

   formatPuzzle(currentLetter);

   for (var i = 0; i < allLetters.length; i++) {
      allLetters[i].style.cursor = "pointer";
      allLetters[i].addEventListener('onmousedown', function (e) {
         formatPuzzle(e.target);
      });
   }
   document.addEventListener('keydown', selectLetter);

   var typeImage = document.getElementById('directionImg');
   typeImage.style.cursor = "pointer";
   typeImage.addEventListener('click', switchTypeDirection);
   document.getElementById('showErrors').onclick = function () {
      for (var i = 0; i < allLetters.length; i++) {
         if (allLetters[i].textContent != allLetters[i].dataset.letter) {
            allLetters[i].style.color = "red";
         }
      }
      setTimeout(function () {
         for (var i = 0; i < allLetters.length; i++) {
            allLetters[i].style.color = "";
         }
      }, 3000);
   }
   document.getElementById('showSolution').onclick = function () {
      for (var i = 0; i < allLetters.length; i++) {
         if (allLetters[i].textContent != allLetters[i].dataset.letter) {
            allLetters[i].textContent = allLetters[i].dataset.letter;
         }
      }
   }
}

function getChar(keyNum) {
   return String.fromCharCode(keyNum);
}