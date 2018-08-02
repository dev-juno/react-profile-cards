function Person(test) {
    return (
        React.createElement("div", { className: "person" },
            React.createElement("h1", null, test.name),
            React.createElement("p", null, test.age),
            React.createElement("p", null, test.job)));


}

var app =
React.createElement("div", null,
    React.createElement(Person, { name: "Jasmin", age: "30", job: "Painter" }),
    React.createElement(Person, { name: "Hector", age: "28", job: "Developer" }),
    React.createElement(Person, { name: "Dina", age: "22", job: "Photographer" }),
    React.createElement(Person, { name: "Lisa", age: "20", job: "Hairdresser" }),
    React.createElement(Person, { name: "David", age: "25", job: "Vet" }));



ReactDOM.render(app,
document.querySelector('#app'));