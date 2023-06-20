import React, { Component } from 'react'

export default class form extends Component {
constructor(){
    super()        
    this.state = {
        Username:" ",
        Password:" ",
        Gender:" ",
        Education:" ",
        Selectfile:" ",
        Description:" "
    }
}



//  handler =(e) => {
//     debugger
//      const { name, value } = e.target
 
 
//      console.log("Username", name);
//      this.setState({

//      })
//  }

  render() {
    return (
        <React.Fragment>
        <div>
        
        </div>
        
        <form>
        <div class="form-group m-2">
        <input type="Username" class="form-contorl"
        name="Username"
        onChange={""}
        id="exampleInputusername"
        placeholder="Username" />
        </div>
        <div class="form-group m-2">
        <input type="Password" class="form-contorl"
        name="Password"
        onChange={""}
        id="InputPassword"
        placeholder="Password" />
        </div>
        <br></br>
        <div class="form-check">
      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
      <label class="form-check-label" for="exampleRadios1">
        Male
      </label>
        </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
      <label class="form-check-label" for="exampleRadios2">
        Female
      </label>
    </div>
    <br></br>
    <div class="dropdown show">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown link
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
    <div class="form-group">
    <label for="exampleFormControlFile1">Example file input</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
    </div>  
    <input class="btn btn-primary" type="submit" value="Submit"/>   
        </form>  
      </React.Fragment>
    )
  }
}
