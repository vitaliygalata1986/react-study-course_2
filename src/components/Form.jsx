import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      card: '',
      email: '',
    };
    this.firstNameRef = React.createRef();
    this.emailRef = React.createRef();
  }

  handleEmail = (event) => {
    this.setState({ email: event.target.value }); // создаем динамич. ключ
  };

  handleChange = (event) => {
    this.setState(
      () => ({ [event.target.name]: event.target.value }),
      () => {
        if (this.state.card.length === 16) {
          // после того как мы вбили 16 символов
          // то установим фокус на след. инпуте
          this.emailRef.current.focus();
        }
      }
    );
  };

  componentDidMount() {
    // console.log(this.firstNameRef);
    this.firstNameRef.current.focus();
  }

  render() {
    const { email, card } = this.state;
    return (
      <div>
        <input
          type="number"
          name="card"
          value={card}
          placeholder="card"
          onChange={this.handleChange}
          ref={this.firstNameRef}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={this.handleEmail}
          ref={this.emailRef}
        />
        <br />
      </div>
    );
  }
}

export { Form };
