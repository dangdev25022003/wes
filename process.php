<!-- <?php
Kết nối đến cơ sở dữ liệu
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "database_name";

$conn = new mysqli($servername, $username, $password, $dbname);

// Kiểm tra kết nối
if ($conn->connect_error) {
    die("Kết nối không thành công: " . $conn->connect_error);
}

// Lấy giá trị tra cứu từ yêu cầu POST
$searchValue = $_POST['search'];

// Xử lý tra cứu thông tin bảo hành
// ...

// Ví dụ: Tìm kiếm thông tin bảo hành dựa trên số điện thoại hoặc IMEI
$sql = "SELECT * FROM warranty WHERE phone_number = '$searchValue' OR imei = '$searchValue'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Hiển thị kết quả tra cứu
    echo "<h2>Kết quả tra cứu:</h2>";
    echo "<ul>";
    while ($row = $result->fetch_assoc()) {
        echo "<li>Số điện thoại: " . $row["phone_number"] . "</li>";
        echo "<li>IMEI: " . $row["imei"] . "</li>";
        echo "<li>Mã jobcard: " . $row["jobcard"] . "</li>";
        echo "<li>Ngày bảo hành: " . $row["warranty_date"] . "</li>";
    }
    echo "</ul>";
} else {
    echo "<p class='error'>Không tìm thấy thông tin bảo hành.</p>";
}

// Đóng kết nối đến cơ sở dữ liệu
$conn->close();
?> -->
