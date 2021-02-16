/**BÀI TẬP 1:QUẢN LÍ TUYỂN SINH
 * Khối 1:
 * Nhập điểm 3 môn thi và điểm chuẩn
 * Chọn điểm ưu tiên (gồm khu vực ưu tiên và đối tượng ưu tiên)
 * 
 * Khối 2:
 * Khai báo biến điểm các môn thi, điểm chuẩn và điểm ưu tiên
 * Tông điểm của học sinh = môn 1 + môn 2 + môn 3 + điểm ưu tiên khu vực + điểm ưu tiên đối tượng
 * Kết quả:
//  * Rớt:
        tổng điểm của học sinh < điểm chuẩn
        điểm 1 trong 3 môn thi = 0
//  * Đậu:
        Tổng điểm của học sinh >= điểm chuẩn và không có điểm môn nào = 0
 * 
 * Khối 3:
 * Xuất kết quả và thông báo đậu rớt của học sinh
 */

// Khai báo hàm tỉnh tổng điểm
var tinhTongDiem = function (mon1, mon2, mon3, kvUuTien, dtUuTien) {
    tongDiem = 0;
    tongDiem = parseFloat(mon1) + parseFloat(mon2) + parseFloat(mon3) + parseFloat(kvUuTien) + parseFloat(dtUuTien);
    return tongDiem;
}

var ketQua = document.getElementById("ketQua");

ketQua.addEventListener("click", function () {
    var mon1 = document.getElementById("mon1").value;
    var mon2 = document.getElementById("mon2").value;
    var mon3 = document.getElementById("mon3").value;
    var khuVuc = document.getElementById("khuVuc").value;
    var doiTuong = document.getElementById("doiTuong").value;
    var diemChuan = document.getElementById("diemChuan").value;
    var tbKetQua = document.getElementById("tbKetQua");

    tinhTongDiem(mon1, mon2, mon3, khuVuc, doiTuong);

    if (diemChuan > 34.5 || mon1 > 10 || mon2 > 10 || mon3 > 10) {
        tbKetQua.innerHTML = "Điểm nhập không hợp lệ, vui lòng nhập lại!!";
    }
    else if (tongDiem < diemChuan || mon1 == 0 || mon2 == 0 || mon3 == 0) {
        tbKetQua.innerHTML = "Kết quả của thí sinh RỚT với tổng điểm là: " + tongDiem;
    } else {
        tbKetQua.innerHTML = "Kết quả của thí sinh ĐẬU với tổng điểm là: " + tongDiem;
    }
})

/**BÀI TẬP 2: TÍNH TIỀN ĐIỆN
 * Khối 1:
 * Nhập tên người sử dụng, số kW sử dụng 
 * 
 * Khối 2:
 * Khai báo biến cho tên người sử dụng, số kW sử dụng
 * Khai báo hàm cho tính toán tổng tiền phải trả theo 5 mức sử dụng
 * < 50kW
 *  tongTien = soKW * 500;
 * 
 * > 50kW và <= 100kW
 *  tongTien = 500 * 50 + (soKW - 50)*650;
 * 
 * > 100kW và <= 200kW
 *  tongTien = 500 * 50 + 50*650 +(soKW - 100)*850;
 * 
 * > 200kW và <= 350kW
 *  tongTien = 500 * 50 + 50*650 + 100*850 + (soKW - 200)*1100;
 * 
 * > 350kW
 *  tongTien = 500 * 50 + 50*650 + 100*850 + 150*1100 + (soKW - 350)*1300;
 * 
 * Khối 3:
 * Xuất ra tổng tiền người sử dụng phải trả
 */

//  Khai báo hàm tính tiền
var tinhTienDien = function (soKW) {
    tongTien = 0;
    if (soKW < 50) {
        tongTien = soKW * 500;
    } else if (soKW > 50 && soKW <= 100) {
        tongTien = 500 * 50 + (soKW - 50) * 650;
    } else if (soKW > 100 && soKW <= 200) {
        tongTien = 500 * 50 + 50 * 650 + (soKW - 100) * 850;
    } else if (soKW > 200 && soKW <= 350) {
        tongTien = 500 * 50 + 50 * 650 + 100 * 850 + (soKW - 200) * 1100;
    } else {
        tongTien = 500 * 50 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKW - 350) * 1300;
    }
    return tongTien;
}

var ketQua2 = document.getElementById("ketQua2");

ketQua2.addEventListener("click", function(){
    var user = document.getElementById("user").value;
    var soKW = document.getElementById("soKW").value;
    var tbTien = document.getElementById("tbTien");

    tinhTienDien(soKW);

    tbTien.innerHTML = "Tổng tiền phải trả của người dùng " + user + " là: " + tongTien + " VND";
})

