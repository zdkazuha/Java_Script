class Car {
    constructor(model, year, color, speed, producer, isElectro) {
        this.model = model;
        this.year = year;
        this.color = color;
        this.speed = speed;
        this.producer = producer;
        this.isElectro = isElectro;
    }

    get carStatus() {
        return this.isElectro ? 'Yes' : 'No';
    }

    toHTMLRow() {
        return `<tr>
                    <td>${this.model}</td>
                    <td>${this.year}</td>
                    <td>${this.color}</td>
                    <td>${this.speed} км/год</td>
                    <td>${this.producer}</td>
                    <td>${this.isElectro}</td>
                </tr>`;
    }
}
