import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cards = [

    {
      imgPath: "one.jpg",
      title: "Dessert of Delight",
      desc:"Oh my should you try this!",
      favorited:false
    },

    {
      imgPath: "two.jpg",
      title: "Wonderful Suprise",
      desc:"Something to Make you melt.",
      favorited:false
    },


    {
      imgPath: "three.jpg",
      title: "Strawberry Suprise",
      desc:"Berry of all berries.",
      favorited:false
    },
    {
      imgPath: "four.jpg",
      title: "Sweet Goodness",
      desc:"This is a wonderful treat.",
      favorited:false
    },

    {
      imgPath: "five.jpg",
      title: "Sweet Tooth",
      desc:"back to the Dentist with this one!",
      favorited:false
    },

    {
      imgPath: "six.jpg",
      title: "Macaroons",
      desc:"This is the great one",
      favorited:false
    },
    {
      imgPath: "seven.jpg",
      title: "Ice Cream",
      desc:"This is a wonderful gift for your mom",
      favorited:false
    },


    {
      imgPath: "eight.jpg",
      title: "Fruit",
      desc:"Healthier Alternative!",
      favorited:false
    },
    {
      imgPath: "nine.jpg",
      title: "Chocolate",
      desc:"For all the chocolate lovers out there",
      favorited:false
    },

    {
      imgPath: "ten.jpg",
      title: "Wonderful",
      desc:"This is a wonderful dessert",
      favorited:false
    }


  ]

  constructor(public navCtrl: NavController) {

  }

  clickfav(card){
    let index =this.cards.indexOf(card);
    if(index > -1){
      if(card.favorited){
        this.cards[index].favorited = false;
      }else{
        this.cards[index].favorited = true;

      }
    }
  }







}