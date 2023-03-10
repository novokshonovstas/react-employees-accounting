import './employees-add-form.css'
import { Component  } from 'react';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onSubmit = (e) => {
        const { onAdd } = this.props;
        const { name, salary } = this.state;

        e.preventDefault();
        onAdd(name, salary);
        this.setState({ name: '', salary: ''})
    }

    onValueChange = (e) => {
        this.setState({
            // [e.target.name] - сответствует имени ключа в state и при срабатывании  onValueChange он по имени аттрибута name запишет в state значение динамически
            [e.target.name]: e.target.value,
        })
    }

    render () {
        const { name, salary } = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form  onSubmit={this.onSubmit}
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" 
                        onChange={this.onValueChange}
                        name="name"
                        value={name}
                        />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                        onChange={this.onValueChange}
                        name="salary"
                        value={salary}
                        />
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}


export default EmployeesAddForm;