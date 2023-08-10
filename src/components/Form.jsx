import React from 'react';

class Form extends React.Component {
  state = {
    email: '',
    isAgreeWithTerms: false,
  };

  handleEmail = (event) => {
    this.setState({ [event.target.name]: event.target.value }); // создаем динамич. ключ
  };

  handleCheckboxChange = (event) => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  submitForm = () => {
    const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      this.state.email
    );
    const isValidCheckbox = this.state.isAgreeWithTerms;

    if (!isValidEmail) {
      alert('Your email is not valid');
      return;
    }

    if (!isValidCheckbox) {
      alert('Your should accept all terms and conditions');
      return;
    }
    this.setState({
      email: '',
      isAgreeWithTerms: false,
    });
    alert('Thank you for subscription!');
  };

  render() {
    const { email, isAgreeWithTerms } = this.state;
    return (
      <div>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={this.handleEmail}
        />
        <br />
        <label>
          <input
            type="checkbox"
            name="isAgreeWithTerms"
            checked={isAgreeWithTerms}
            onChange={this.handleCheckboxChange}
          />
          Subscription
        </label>
        <br />
        <button type="button" onClick={this.submitForm}>
          Send
        </button>
      </div>
    );
  }
}

export { Form };
