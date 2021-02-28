import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addCase } from "../../actions/cases";

export class Form extends Component {
  state = {
    name: "",
    embg: "",
    description: "",
  };

  static propTypes = {
    addCase: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (e) => {
    e.preventDefault();
    const { name, embg, description } = this.state;
    const cases = { name, embg, description };
    this.props.addCase(cases);
    this.setState({
      name: "",
      embg: "",
      description: "",
    });
  };

  render() {
    const { name, embg, description } = this.state;
    return (
      <div className="row">
        <div className="col-lg-7 mx-auto">
          <div className="card card-body card-transparent mt-5 mb-5 mx-auto ">
            <h2 className="text-center">Create Case</h2>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  onChange={this.onChange}
                  value={name}
                />
              </div>
              <div className="form-group">
                <label>EMBG</label>
                <input
                  className="form-control"
                  type="text"
                  name="embg"
                  onChange={this.onChange}
                  value={embg}
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <input
                  className="form-control"
                  type="text"
                  name="description"
                  onChange={this.onChange}
                  value={description}
                />
              </div>
              <div className="form-group text-center">
                <button
                  type="submit"
                  className="btn background-dark-purple w-25"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { addCase })(Form);
