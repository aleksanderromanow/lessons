document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("submit-form");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("name").value;
            const phone = document.getElementById("phone").value;
            const checkbox = document.getElementById("agree");

            if (isFormValid(name, phone, checkbox)) {
                // продолжаем обработку
                alert(`name = ${name}, phone = ${phone}`)
            } else {
                e.stopImmediatePropagation()
            }
        });
    }

    function isFormValid(name, phone, checkbox) {
        return name !== "" && phone !== "" && checkbox.checked && /^\d+$/.test(phone);
    }
});