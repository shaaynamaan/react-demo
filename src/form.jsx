import React, { Component } from 'react'

export default class form extends Component {
  constructor() {
    super()
    this.state = {
      Username: "",
      Password: "",
      Gender: "",
      Education: "",
      Selectfile: "",
      Description: "",
      isSubmitted: false
    }
  }



  handler = (e) => {
    debugger
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }
  onSubmit = (e) => {
    e.preventDefault()
    this.setState({ isSubmitted: true })
  }

  render() {
    return (
      <React.Fragment>
        <div>

        </div>

        <form onSubmit={(e) => { this.onSubmit(e) }}>
          <span class="border border-primary"></span>
          <div class="form-group m-2">
            <label for="Username">Enter Username:-</label>
            <input type="text" class="form-contorl"
              name="Username"
              value={this.state.Username}
              onChange={(e) => { this.handler(e) }}
              id="exampleInputusername"
              placeholder="Username" />
          </div>
          <br>
          </br>
          <div class="form-group m-2">
            <label for="Password">Enter Password:-</label>
            <input type="password" class="form-contorl"
              name="Password"
              value={this.state.Password}
              onChange={(e) => { this.handler(e) }}
              id="InputPassword"
              placeholder="Password" />
          </div>
          <br></br>
          <label for="Gender">Select your Gender:-</label>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" checked={this.state.Gender === 'Male'} onChange={() => { 
              debugger
              this.setState({ Gender: 'Male' }) }} />
            <label class="form-check-label" for="exampleRadios1">
              Male
            </label>
          </div>
          {<div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" checked={this.state.Gender === 'Female' } id="exampleRadios2" onChange={() => { 
              this.setState({ Gender: 'Female' }) }} />
            <label class="form-check-label" for="exampleRadios2">
              Female
            </label>
          </div>}
          <br></br>
          <label for="Education">Education :-</label>

          <select
            onChange={(e) => { this.handler(e) }}
            name='Education'
            value={this.state.Education}
          >
            <option value="Xth">Xth</option>
            <option value="XIIth">XIIth</option>
            <option value="Under-Graduate">Under-Graduate</option>
            <option value="Post-Graduate">Post-Graduate</option>
          </select>
          <br></br>
          {/* <div class="form-group">
            <br></br>
            <label for="exampleFormControlFile1">Example file input:-</label>
            <br></br>
            <input name='Selectfile' type="file" class="form-control-file" id="exampleFormControlFile1" onChange={(e) => { this.handler(e) }} />
          </div> */}
          <br></br>
          <input class="btn btn-primary" type="submit" />
        </form>

        <div>
          {this.state.isSubmitted && (
            <div>
              <p>
                {this.state.Username}</p>
              <p>
                {this.state.Password}</p>
              <p>
                {this.state.Gender}</p>
              <p>
                {this.state.Education}</p>
            </div>
          )}<br></br>
          {/* {this.state.isSubmitted && this.state.Password}<br></br> */}
          {/* {this.state.isSubmitted && this.state.Gender}<br></br> */}
          {/* {this.state.isSubmitted && this.state.Education} */}
          {/* {JSON.stringify(this.state)} */}
        </div>
      </React.Fragment>
    )
  }
}

