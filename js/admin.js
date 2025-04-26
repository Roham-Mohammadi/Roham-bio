function loginAdmin() {
    const password = document.getElementById('adminPassword').value;
    const correctPassword = "1234"; // اینجا رمز مدیر رو بزار

    if (password === correctPassword) {
        alert("خوش آمدید مدیر!");
        // اینجا میتونی کارهایی که مدیر باید ببینه یا انجام بده رو اضافه کنی
    } else {
        alert("رمز اشتباه است!");
    }
    return false; // جلوگیری از ریفرش شدن صفحه
}