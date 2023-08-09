import React from 'react';

class Form extends React.Component {
  state = {
    firstName: '',
    email: '',
    message: '',
    select: '',
    subscription: false,
    subscription_2: false,
    gender: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value }); // создаем динамич. ключ
  };

  handleCheckboxChange = (event) => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  render() {
    const {
      firstName,
      email,
      message,
      select,
      subscription,
      subscription_2,
      gender,
    } = this.state;
    return (
      <div>
        <input
          type="text"
          name="firstName"
          placeholder="firstName"
          value={firstName}
          onChange={this.handleChange}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={this.handleChange}
        />
        <br />
        <textarea
          name="message"
          value={message}
          onChange={this.handleChange}
        ></textarea>
        <br />
        <select name="select" value={select} onChange={this.handleChange}>
          <option value="" disabled>
            Выберите...
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <br />
        <label>
          <input
            type="checkbox"
            name="subscription"
            checked={subscription}
            onChange={this.handleCheckboxChange}
          />
          Subscription 1
        </label>
        <label>
          <input
            type="checkbox"
            name="subscription_2"
            checked={subscription_2}
            onChange={this.handleCheckboxChange}
          />
          Subscription 2
        </label>
        <br />
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={this.handleChange}
          checked={gender === 'male'}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={this.handleChange}
          checked={gender === 'female'}
        />
        Female
      </div>
    );
  }
}

export { Form };
