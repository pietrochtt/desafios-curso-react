import React from "react";
function Form() {
    const [values, setValues] = React.useState({
    email: "",
    password: "",
    });
    function handleSubmit(evt) {
        evt.preventDefault();
    }
    function handleChange(evt) {

    const { target } = evt;
    const { name, value } = target;

    const newValues = {
        ...values,
        [name]: value,
    };
    // Sincroniza el estado de nuevo
    setValues(newValues);
    }
    return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
        id="email"
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
    />
        <label htmlFor="password">Password</label>
        <input
        id="password"
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
    </form>
    );
}

export default Form;