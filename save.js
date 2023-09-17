// Lấy tất cả các mục từ Local Storage
var localStorageItems = Object.entries(localStorage);

// Tạo bảng HTML để hiển thị Local Storage
var tableBody = document.getElementById("localStorageTable").getElementsByTagName("tbody")[0];

// Xóa các dòng ban đầu
while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
}

for (var i = 0; i < localStorageItems.length; i++) {
    var j = 0;
    var key = localStorageItems[i][j];
    j = 1;
    var value = localStorageItems[i][j];

    var row = tableBody.insertRow();
}


var registered = false; // Biến kiểm tra đăng ký
var registeredAccounts = []; // Mảng chứa các tài khoản đã đăng ký

// Kiểm tra xem đã có thông tin đăng ký trong Local Storage hay chưa
var storedAccounts = localStorage.getItem("registeredAccounts");
if (storedAccounts !== null) {
  registeredAccounts = JSON.parse(storedAccounts);
}
// đăng ký
function register(event) {
    event.preventDefault();

    var regUsername = document.getElementById("registerUsername").value;
    var regPassword = document.getElementById("registerPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (regUsername.trim() === "" || regPassword.trim() === "" || confirmPassword.trim() === "") {
        alert("Vui lòng điền đầy đủ thông tin đăng ký.");
        return;
    }

    if (regPassword !== confirmPassword) {
        alert("Mật khẩu xác nhận không khớp.");
        return;
    }

    

    // Kiểm tra xem đã có thông tin đăng ký hay chưa
    for (var i = 0; i < registeredAccounts.length; i++) {
        if (registeredAccounts[i].username === regUsername) {
          alert("Tên người dùng đã tồn tại. Vui lòng chọn tên người dùng khác.");
          return;
        }
      }

     // Thêm tài khoản mới vào mảng registeredAccounts
    registeredAccounts.push({ username: regUsername, password: regPassword });

    // Lưu mảng registeredAccounts vào Local Storage
    localStorage.setItem("registeredAccounts", JSON.stringify(registeredAccounts));
    
    localStorage.setItem("", regUsername);
    localStorage.setItem("", regPassword);
    
    var newRow = tableBody.insertRow();
    var newKeyCell = newRow.insertCell(0);
    var newValueCell = newRow.insertCell(1);

    newKeyCell.innerHTML = "<strong>" + regUsername + "</strong>";
    newValueCell.innerHTML = "<strong>" + regPassword + "</strong>";

    // Lưu thông tin đăng ký vào Local Storage
    localStorage.setItem("registerUsername", regUsername);
    localStorage.setItem("registerPassword", regPassword);

    registered = true;
    alert("Đăng ký thành công!");
    document.getElementById("registerUsername").value = "";
    document.getElementById("registerPassword").value = "";
    document.getElementById("confirmPassword").value = "";

}
// đăng nhập

function login(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var regUsername = localStorage.getItem("registerUsername");
    var regPassword = localStorage.getItem("registerPassword");

    if (regUsername === null || regPassword === null) {
        alert("Tài khoản không tồn tại, vui lòng đăng ký.");
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        return;
    }

    for (var i = 0; i < registeredAccounts.length; i++) {
        if (registeredAccounts[i].username === username && registeredAccounts[i].password === password) {
          // alert("Đăng nhập thành công!");
            window.location.assign("")
            window.location.href = "home.html";

          // Thực hiện các hành động sau khi đăng nhập thành công
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";  
          return;
        }
      }
    
      alert("Tên người dùng hoặc mật khẩu không chính xác.");
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
}

// quên mật khẩu
var forgotPasswordButton = document.getElementById("forgotPasswordButton");
forgotPasswordButton.addEventListener("click", forgotPassword);

function forgotPassword(event) {
  event.preventDefault();

  var username = prompt("Vui lòng nhập tên người dùng của bạn:");
  if (username === null || username.trim() === "") {
    return;
  }

  // Tìm kiếm tài khoản trong mảng registeredAccounts
  for (var i = 0; i < registeredAccounts.length; i++) {
    if (registeredAccounts[i].username === username) {
      alert("Mật khẩu của bạn là: " + registeredAccounts[i].password);
      return;
    }
  }

  alert("Không tìm thấy tài khoản với tên người dùng này.");
}

// nút nhấn

// Lấy các phần tử cần hiển thị và ẩn
var loginForm = document.getElementById("loginForm");
var registerForm = document.getElementById("registerForm");
var forgotPasswordButton = document.getElementById("forgotPasswordButton");

// Xác định các hành động khi nhấp vào các nút tương ứng
document.getElementsByClassName("button-login")[0].addEventListener("click", function() {
    loginForm.style.display = "flex";
    registerForm.style.display = "none";
    forgotPasswordButton.style.display = "none";
});

document.getElementsByClassName("button-login")[1].addEventListener("click", function() {
    loginForm.style.display = "none";
    registerForm.style.display = "flex";
    forgotPasswordButton.style.display = "none";
});

document.getElementsByClassName("button-login")[2].addEventListener("click", function() {
    loginForm.style.display = "none";
    registerForm.style.display = "none";
    forgotPasswordButton.style.display = "block";
});
