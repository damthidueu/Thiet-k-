function toggleSearch() {
    const searchContainer = document.querySelector('.col-lg-4');
    let searchInput = document.getElementById('search-input');

    if (!searchInput) {
        // Tạo input nếu nó chưa tồn tại
        searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.id = 'search-input';
        searchInput.placeholder = 'Tìm kiếm...';

        // Đảm bảo input có thể tương tác được
        searchInput.style.position = 'absolute';
        searchInput.style.left = '100px';

        // Thêm sự kiện khi nhấn Enter
        searchInput.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                searchInput.style.display = 'none';
            }
        });

        // Thêm sự kiện khi nhấn ra ngoài ô input
        searchInput.addEventListener('blur', function() {
            searchInput.style.display = 'none';
        });

        searchContainer.appendChild(searchInput);
        searchInput.focus(); // Đặt focus vào input sau khi thêm vào DOM
    } else {
        // Ẩn/hiện input nếu nó đã tồn tại
        if (searchInput.style.display === 'none' || searchInput.style.display === '') {
            searchInput.style.display = 'inline-block';
            searchInput.focus(); // Đặt focus vào input khi hiển thị
        } else {
            searchInput.style.display = 'none';
        }
    }
}
