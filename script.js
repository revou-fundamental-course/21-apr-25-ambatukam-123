function konversi() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    if (isNaN(celsius)) {
        alert("Masukkan angka yang valid untuk Celsius!");
        return;
    }
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('fahrenheit').value = fahrenheit;
    document.getElementById('cara').value = `${celsius}°C * (9/5) + 32 = ${fahrenheit}°F`;
}

function resetForm() {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
    document.getElementById('cara').value = '';
}

function reverse() {
    const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    if (isNaN(fahrenheit)) {
        alert("Masukkan angka yang valid untuk Fahrenheit!");
        return;
    }
    const celsius = (fahrenheit - 32) * 5/9;
    document.getElementById('celsius').value = celsius.toFixed(2);
    document.getElementById('cara').value = `(${fahrenheit}°F - 32) * (5/9) = ${celsius.toFixed(2)}°C`;
}
