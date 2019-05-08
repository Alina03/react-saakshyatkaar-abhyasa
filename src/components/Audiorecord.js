import React, { Component } from 'react'
import { ReactMic } from 'react-mic';

export default class Audiorecord extends Component {

  constructor() {
    super();
    this.state = {record: false, pause: false};
  }

  btnRecordClick(event) {
    this.setState({
      pause: false,
      record: true
    });
  }

  btnSkipClick(event) {
    this.setState({
      pause: true,
      record: false
    });
  }

  btnSubmitClick(event) {
    // send data to server

    this.setState({
      pause: true,
      record: false
    });
  }

  render() {

    let buttons;
    if(this.state.record){
      buttons = <div>
        <button onClick={() => this.btnSkipClick()}> Skip</button>
        <button onClick={() => this.btnSubmitClick()}> Submit</button>
      </div>
    }
    else{
      buttons = <button  onClick={() => this.btnRecordClick()}> Record</button>
    }



    return (
      <div>

        <ReactMic
            record={this.state.record}         // defaults -> false.  Set to true to begin recording
            pause={this.state.pause}          // defaults -> false.  Available in React-Mic-Plus upgrade only
            // className={string}       // provide css class name
            // onStop={function}        // callback to execute when audio stops recording
            // onData={function}        // callback to execute when chunk of audio data is available
            // strokeColor={string}     // sound wave color
            // backgroundColor={string} // background color
          />

          {buttons}
          
         
      </div>
    );
  }
}
