
function Validator(options) {
    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }
    function Validate(inputElement, errorMessage) {
        var valueInput = inputElement.value;
        var errorElement;
        options.rules.forEach(function (rule) {
            if (rule.selector === `#${inputElement.id}`) {
                errorElement = rule.test(valueInput)
                if (errorElement) {
                    errorMessage.innerText = errorElement;
                    inputElement.classList.add('valid_input')
                }
            }
        })
        return !errorElement;
    }
    var formElement = document.querySelector(options.form);
    if (formElement) {
        var inputElements = formElement.querySelectorAll('.form_group [name]');
        inputElements.forEach(function (inputElement) {
            var errorMessage = inputElement.parentElement.querySelector(options.ErrorMessage)
            var errorMessage = getParent(inputElement, options.formGroup).querySelector(options.ErrorMessage)

            inputElement.onblur = function () {
                Validate(inputElement, errorMessage)
            }
            inputElement.oninput = function (e) {
                if (inputElement.value) {
                    errorMessage.innerText = '';
                    inputElement.classList.remove('valid_input')
                }
            }
        })
        //submit
        var submitElement = formElement.querySelector('#submit_btn');
        submitElement.onclick = function (e) {
            e.preventDefault();
            var isValid = [];
            var data = {}
            var myArray1 = [];
            var myArray2 = [];
            inputElements.forEach(function (inputElement) {
                var errorMessage = inputElement.parentElement.querySelector(options.ErrorMessage)
                switch (inputElement.type) {
                    case 'checkbox':
                        myArray2.push(inputElement);
                        break;
                    case 'radio':
                        myArray1.push(inputElement);
                        break;
                    case 'select-one':
                        if (inputElement.value === 'undefined') {
                            isValid.push(false);
                            errorMessage.innerText = 'Vui lòng chọn giới tính'
                        } else {
                            data[inputElement.name] = inputElement.value;
                        }
                        break;
                    default:
                        isValid.push(Validate(inputElement, errorMessage))
                        data[inputElement.name] = inputElement.value;
                }


            })
            if (myArray2.length !== 0) {
                var allValue = [];
                for (var i = 0; i < myArray2.length; i++) {
                    if (myArray2[i].checked) {
                        allValue.push(myArray2[i].value);
                    }
                }
                if (allValue.length !== 0) {
                    data[myArray2[0].name] = allValue;
                    isValid.push(true);
                } else {
                    // var errorMessage = myArray2[0].parentElement.querySelector(options.ErrorMessage);
                    var errorMessage = getParent(myArray2[0], options.formGroup).querySelector(options.ErrorMessage);
                    errorMessage.innerText = 'Vui lòng chọn khoá học'
                    isValid.push(false);
                }
            }
            if (myArray1.length !== 0) {
                var count = 0;
                for (var i = 0; i < myArray1.length; i++) {
                    if (myArray1[i].checked) {
                        data[myArray1[i].name] = myArray1[i].value;
                        isValid.push(true);
                        count = 1;
                    }
                }
                if (count === 0) {
                    var errorMessage = myArray1[0].parentElement.querySelector(options.ErrorMessage);
                    errorMessage.innerText = 'Vui lòng chọn'
                    isValid.push(false);

                }
            }


            if (!isValid.includes(false)) {
                options.onSubmit(data)
            }

        }
    }
}
Validator.isRequest = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value ? undefined : message || 'Vui lòng nhập trường này';
        }
    }
}
Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            if (value) {
                var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                return regex.test(value) ? undefined : message || 'Vui lòng nhập trường này';
            } else {
                return 'Vui lòng nhập email'
            }

        }
    }
}
Validator.isPassword = function (selector, min, message) {
    return {
        selector: selector,
        test: function (value) {
            if (value) {
                return value.length >= min ? undefined : message || 'Vui lòng nhập trường này';
            } else {
                return 'Vui lòng nhập mật khẩu'
            }
        }
    }
}
Validator.confirmPassword = function (selector, confirmPassword, message) {
    return {
        selector: selector,
        test: function (value) {
            if (value) {
                return value === confirmPassword() ? undefined : message || 'Vui lòng nhập trường này';
            } else {
                return 'Vui lòng nhập mật khẩu'
            }
        }
    }
}