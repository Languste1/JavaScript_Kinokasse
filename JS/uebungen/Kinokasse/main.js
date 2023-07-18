function main() {

    let input = document.getElementById("age");
    let age = input.value;

    // Altersüberprüfungen
    // < 6 oder > 60 bekommen Sonderpreis von 4€ und alle anderen 6,50€
    if (age < 0 || age > 110) {
        alert("Bitte trage ein gültiges Alter ein!")
    } else if (age <= 6 || age >= 60) {
        alert("Der Preis beträgt 4€")
    } else {
        alert("Der Preis beträgt 6.50€")
    }

}