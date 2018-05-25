import React, { Component } from "react";
import Cards from "./components/cards/Cards"
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import content from "./components/cards.json"

class App extends Component {

  

  state = {
    content,
    clicks: [],
    score: 0,
    winnar: "",
    background: "container border"
  }

  //shuffles starting cards on mount
  componentDidMount() {
    this.shuffle(this.state.content);
   // console.log(this.state.content);
  }

//shuffle function that returns this.state.content as a different order
   shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
   // console.log(a);
    return a;
}

//when card is clicked adding id to array to check later
  clickCard = id => {
   // console.log(this.state.content);
   // console.log(id)
   this.state.clicks.push(id);
  // console.log("current array of id" + this.state.clicks);
   this.checkClick(id);
  }
//adding to score and making background flash green
  addScore() {
    this.changeGreen();
    this.changeBack();
    this.setState({ score: this.state.score + 1 });
    this.shuffle(this.state.content);
  }
//win text
  youWin() {
    this.setState({winnar: "CONGLATURATION !!! You have completed a great game."});
    this.changeGreen();
   // console.log(this.state.winnar);
  }
//lose text
  youLose() {
    this.setState({winnar: "SORRY YOU LOSE!"});
    this.setState({background: "container bg-danger"})
  }

  //this is the main logic that happens onclick
  checkClick = id => {
    var guesses = this.state.clicks.length;
    var guessArr = this.state.clicks;
   // console.log("length of click ids" + guesses);
   //checking how may guesses have been made
    if(guesses === 1){
      this.addScore();

    } else if (guesses < 12){
     // console.log(guessArr);

     //this checks to see if the id of the card thats been clicked has been chosen before
      for (var i = 0; i <( guessArr.length - 1); i++) {
        if (id === guessArr[i]){
          this.youLose();
            break;
        }else{
          this.addScore();
        }
    }
    // console.log("less than 12 id: " + id)
    } else if(guesses === 12){  
      //final check to see if you win
      for (var j = 0; j <( guessArr.length - 1); j++) {
        if (id === guessArr[j]){
          this.youLose();
          break;
        }else{
          this.addScore();
          this.youWin();
        }
      }
    }
  }

  changeGreen() {
    this.setState({background: "container bg-success border"});
  }

  changeBack() {
    setTimeout( () => {this.setState({background: "container border"})} , 250);

  }

  render() {
    return (
    <Wrapper>
    <Header 
    score={this.state.score}
    winnar={this.state.winnar}
    />
    <div className={this.state.background}>
    {this.state.content.map(card => (
    <Cards 
    //pass props in here along with  stat updates
    clickCard={this.clickCard}
    id={card.id}
    key={card.id}
    image={card.image}
    />
    ))}
    </div>

    </Wrapper>
    )
  }
}

export default App;