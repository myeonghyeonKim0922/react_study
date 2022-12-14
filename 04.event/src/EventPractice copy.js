import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    message: "",
  };

  constructor(porps) {
    super(props);
    this.handelChange = this.handelChange.bind(this);
    this.handelClick = this.handelClick.bind(this);
  }

  handelChange(e) {
    this.setState({ message: e.target.value });
  }

  handelClick(e) {
    alert(this.state.message);
    this.setState({ message: "" });
  }

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력"
          value={this.state.message}
          onChange={this.handelChange}
        ></input>
        <button onClick={this.handelClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
