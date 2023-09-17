<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Lấy dữ liệu từ form
    $comment = $_POST["comment"];
    $fullname = $_POST["fullname"];

    // Tạo phần tử mới
    $newElement = '<li>
        <div class="cmt-top">
            <p class="cmt-top-name">' . $fullname . '</p>
        </div>
        <div class="cmt-content">
            <p class="cmt-txt">' . $comment . '</p>
        </div>
        <div class="cmt-command">
            <a href="javascript:void(0)" data-name="' . $fullname . '" onclick="ReplyComment($(this))" class="cmttl">
                Trả lời
                <b class="count-tl"></b>
            </a>
            <a href="javascript:void(0)" onclick="LikeComment($(this), 54682263)" class="cmtl dot-circle-ava">
                <i id="l-54682263" class="iconcmt-thumpup"></i>Thích
                <span class="hide">(<b>0</b>)</span>
            </a>
            <span class="cmtd dot-circle-ava">Bây giờ</span>
        </div>
    </li>';

    // Đọc nội dung hiện tại của tệp HTML
    $filename = "comments.html";
    $fileContent = file_get_contents($filename);

    // Tìm vị trí của thẻ đóng </ul>
    $pos = strpos($fileContent, '</ul>');

    if ($pos !== false) {
        // Chèn phần tử mới vào trước thẻ đóng </ul>
        $fileContent = substr_replace($fileContent, $newElement, $pos, 0);

        // Ghi nội dung mới vào tệp HTML
        file_put_contents($filename, $fileContent);

        // Chuyển hướng về trang gốc hoặc trang xác nhận thành công
        header("Location: index.html"); // Thay thế "index.html" bằng URL của trang gốc hoặc trang xác nhận thành công
        exit();
    }
}
?>
