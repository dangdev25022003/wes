$(document).ready(function() {
    // Bắt sự kiện khi người dùng nhấn nút submit
    $('#search-form').submit(function(event) {
      event.preventDefault(); // Ngăn chặn form submit
  
      var searchValue = $('#search').val(); // Lấy giá trị từ input
  
      // Gửi yêu cầu AJAX để đọc tệp txt
      $.ajax({
        url: 'products.txt',
        dataType: 'text',
        success: function(data) {
          var lines = data.split('\n');
          var result = '<h2>Kết quả tra cứu:</h2><ul>';
          var hasMatch = false;
  
          // Duyệt qua từng dòng trong tệp txt
          for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
  
            // Kiểm tra nếu dòng chứa chuỗi tìm kiếm
            if (line.indexOf(searchValue) !== -1) {
              result += '<li>' + line + '</li>';
              hasMatch = true;
            }
          }
  
          result += '</ul>';
  
          // Hiển thị kết quả tra cứu hoặc thông báo không tìm thấy
          if (hasMatch) {
            $('.result').html(result);
          } else {
            $('.result').html('<p class="error">Không tìm thấy thông tin bảo hành phù hợp.</p>');
          }
        },
        error: function() {
          // Xử lý lỗi khi không đọc được tệp txt
          $('.result').html('<p class="error">Đã xảy ra lỗi khi đọc dữ liệu.</p>');
        }
      });
    });
  });
  