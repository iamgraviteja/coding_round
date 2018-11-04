import React, { Component } from 'react';

import Input from '../../components/Input/Input';

class Admission extends Component {

    state = {
        admissionForm: {
            firstName: {
                label: 'Name',
                placeholder: 'Your First Name',
                value: '',
                validation: {
                    required: true,
                    isAlphabet: true,
                    maxLength: 20,
                },
                valid: false
            },
            lastName: {
                label: 'Last Name',
                placeholder: 'Your Last Name',
                value: '',
                validation: {
                    required: true,
                    isAlphabet: true,
                    maxLength: 20
                },
                valid: false
            },
            class: {
                label: 'Class',
                placeholder: 'Your Class',
                value: '',
                validation: {
                    required: true,
                    isAlphaNumeric: true
                },
                valid: false
            },
            yop: {
                label: 'Year of passing',
                placeholder: 'Year of pass',
                value: '',
                validation: {
                    required: true,
                    isNumeric: true,
                    maxValue: 2017
                },
                valid: false
            },
            percent: {
                label: 'Percentage',
                placeholder: 'Your Percentage',
                value: '',
                validation: {
                    required: true,
                    isNumeric: true,
                    maxValue: 100
                },
                valid: false
            }
        },
        formIsValid: false
    }


    formSubmitHandler = (event) => {
        event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in this.state.admissionForm) {
            formData[formElementIdentifier] = this.state.admissionForm[formElementIdentifier].value;
        }
        console.log(formData);
    }

    updateObject = (oldObject, updatedProperties) => {
        return {
            ...oldObject,
            ...updatedProperties
        };
    };

    checkValidity = (value, rules) => {
        let isValid = true;
        if (!rules) {
            return true;
        }
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.maxValue) {
            isValid = value <= rules.maxValue && isValid
        }

        if (rules.isAlphabet) {
            const pattern = /^[a-zA-Z ]+$/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isAlphaNumeric) {
            const pattern = /^[a-zA-Z0-9]+$/;
            isValid = pattern.test(value) && isValid
        }
        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {

        const updatedFormElement = this.updateObject(this.state.admissionForm[inputIdentifier], {
            value: event.target.value,
            valid: this.checkValidity(event.target.value, this.state.admissionForm[inputIdentifier].validation),
        });
        const updatedForm = this.updateObject(this.state.admissionForm, {
            [inputIdentifier]: updatedFormElement
        });

        let formIsValid = true;
        for (let inputIdentifier in updatedForm) {
            formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({ admissionForm: updatedForm, formIsValid: formIsValid });
    }

    render() {

        const formElementsArray = [];
        for (let key in this.state.admissionForm) {
            formElementsArray.push({
                id: key,
                config: this.state.admissionForm[key]
            });
        }
        let form = formElementsArray.map(elem => (
            <Input
                key={elem.id}
                label={elem.config.label}
                placeholder={elem.config.placeholder}
                value={elem.config.value}
                changed={(event) => this.inputChangedHandler(event, elem.id)} />
        ));

        return (
            <div className="admission">
                <form onSubmit={this.formSubmitHandler} className="form">
                    <h4 className="form__heading">Admission Form</h4>
                    {form}
                    <div className="submit">
                        <button className="submit__btn" disabled={!this.state.formIsValid}>Submit</button>
                    </div>
                    {this.state.formIsValid?<div>See console to check result after submit</div>:null}
                </form>


            </div >
        );
    }
};

export default Admission;