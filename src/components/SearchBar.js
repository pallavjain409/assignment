import { debounce } from "lodash";
import React from "react";
export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };

    this.changeSearch = debounce(this.props.handleChange, 250);
  }
  onChange = (e) => {
    this.setState(
      {
        input: e.target.value,
      },
      () => {
        this.changeSearch(e.target.value);
      }
    );
  };

  render() {
    return (
      <div className="input-group">
        <input
          value={this.state.input}
          type="text"
          className="form-control"
          placeholder="Search by Product id"
          onChange={(e) => this.onChange(e)}
        />
      </div>
    );
  }
}
