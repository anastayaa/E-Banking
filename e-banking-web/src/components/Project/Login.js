import React, { Component } from "react";
import classnames from "classnames";

class Login extends Component {
  


  render() {
    //const { errors } = this.state;
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                     // "is-invalid": errors.username
                    })}
                    placeholder="Username"
                    name="username"
                    //value={this.state.username}
                    //onChange={this.onChange}
                  />
                  {/* errors.username && (
                    <div className="invalid-feedback">{errors.username}</div>
                  ) */} 
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classnames("form-control form-control-lg", {
                     // "is-invalid": errors.password
                    })}
                    placeholder="Password"
                    name="password"
                   // value={this.state.password}
                   // onChange={this.onChange}
                  />
                  {/* errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  ) */}
                </div>
                <input
                    type="submit"
                    className="btn text-white btn-block mt-4"
                    style={{backgroundColor:'#EB5C09'}}  
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Login;