import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.cardRef = React.createRef(); // ссылка на объект Ref
    this.emailRef = React.createRef();
  }

  componentDidMount() {
    // console.log(this.firstNameRef);
    this.emailRef.current.focus();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.cardRef.current.value.length < 16) {
      alert('invalid card number');
      return;
    }
    if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        this.emailRef.current.value
      )
    ) {
      alert('email is not valid');
      return;
    }

    // send
    // после отправки обнуляем поля
    this.cardRef.current.value = '';
    this.emailRef.current.value = '';
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="number"
          name="card"
          placeholder="card"
          ref={this.cardRef}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="email"
          ref={this.emailRef}
        />
        <br />
        <button type="submit">Send</button>
      </form>
    );
  }
}

export { Form };
