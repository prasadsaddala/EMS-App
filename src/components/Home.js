import React,{useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import {useNavigate} from 'react-router-dom'

function Home() {
    const [form, setForm] = useState({
    email: "",
    password: "",
});

let history = useNavigate();
const onUpdateField = e => {
    const nextFormState = {
    ...form,
    [e.target.name]: e.target.value,
};
setForm(nextFormState);

};

const handleSubmit=(e) => {
    e.preventDefault();
    alert(JSON.stringify(form, null, 2));
    history("/Employees");
};
return (
    <Form className="d-grid gap2" style={({margin:"20px 150px 150px 150px"})}>
        <Form.Group classname="mb-3" controlId="formName">
        <label className="mb-3">Email</label>
        <Form.Control
            className="mb-3"
            type="text"
            aria-label="Email field"
            name="email"
            value={form.email}
            onChange={onUpdateField}
        />
    </Form.Group>
        <Form.Group classname="mb-3" controlId="formPassword">
        <label className="mb-3">Password</label>
        <Form.Control
            className="mb-3"
            type="password"
            aria-label="Password field"
            name="password"
            value={form.password}
            onChange={onUpdateField}
        />
    </Form.Group>
        <Button onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
    </Form>
);

}

export default Home;