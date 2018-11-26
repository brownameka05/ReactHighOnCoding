import React, { Component } from 'react';

class Watchkit extends Component {
  render() {
    return (
      <div className ="watchkit">
      <h1>Hello Watchkit</h1>
      <p className = "body"> Last month Apple released the anticipated Watchkit Framework for developers in the form of iOS 8.2 beta SDK realease.
      The Watchkit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basicas of
      getting started with the Watchkit framework and developing apps for the Apple Watch.</p>
      <ul className ="comments">
      <li>12 comments </li>
      <li>124 likes</li>
      </ul>


      <h1>Introduction to Swift</h1>
      <p className = "body"> Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications.
      Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction.
      This article will revolve around the basic concepts in the Swift language and how you can get started.</p>
      <ul className ="comments">
      <li>15 comments </li>
      <li>45 likes</li>
      </ul>


      </div>
    );
  }
}

export default Watchkit;
