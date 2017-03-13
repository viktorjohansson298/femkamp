import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import TextField from 'material-ui/TextField';
import BollkastningLogo from '../../public/bollkastning.svg';

export default class Bollkastning extends Component{

  handleAdd = (e) => {
    e.preventDefault();

    var myObj = {
      competitor: this.refs.inputName.getValue(),
      score: this.refs.inputScore.getValue()
    }

    this.props.route.onAdd(myObj, 0);

    this.refs.inputName.value = "";
    this.refs.inputScore.value = "";

  }

  handleDelete = () =>{

    var name = this.refs.inputName.getValue();

    this.props.route.onDelete(name, 0);
  }

  render(){
  var theScores = this.props.route.resultat[0].scores;
  theScores = theScores.map(function(item, index){
    return(
      <div key={index} className="animated fadeInDown">
          <p><span style={{borderBottom: '3px solid #00bcd4', fontSize: '24px'}}>{item.competitor}</span> <span style={{borderBottom: '3px solid #d40052', fontSize: '21px', color: '#0d0d0d'}}>{item.score}</span></p>
      </div>
    );
  });
    return(
     <MuiThemeProvider>
      <div>
      <div className="img-container">
        <img src={BollkastningLogo} alt='bollkastning' style={{width: '160px'}}/>
        </div>
        <form onSubmit={this.handleAdd}>
            <TextField floatingLabelText="Namn" type="text" ref="inputName" required /><br/>
            <TextField floatingLabelText="Poäng" type="number" ref="inputScore" required min="0"/><br/>
            <FloatingActionButton mini={true} type="submit" style={{marginBottom: '10px', marginTop: '16px', marginRight: '15px'}}>
              <ContentAdd />
            </FloatingActionButton>
            <FloatingActionButton mini={true} secondary={true} type="button" onClick={this.handleDelete} >
              <ContentRemove/>
            </FloatingActionButton>
        </form>
        <div className="resultat-container">
            {theScores}
        </div>
      </div>
      </MuiThemeProvider>
    )
  }
}
