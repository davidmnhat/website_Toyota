function scrollCarousel(id, direction) {
  const carousel = document.getElementById(id);
  const itemWidth =
    carousel.querySelector(".carousel-item, .offer-card").offsetWidth + 16;
  const visibleItems = Math.floor(carousel.offsetWidth / itemWidth);
  const totalItems = carousel.children.length;
  let scrollLeft = carousel.scrollLeft + direction * itemWidth * visibleItems;
  carousel.scrollTo({ left: scrollLeft, behavior: "smooth" });

  // Update page text
  const pageSpan =
    id === "vehicleCarousel"
      ? document.getElementById("vehiclePage")
      : document.getElementById("offerPage");
  const currentPage = Math.min(
    Math.max(1, Math.round(scrollLeft / (itemWidth * visibleItems)) + 1),
    Math.ceil(totalItems / visibleItems)
  );
  pageSpan.innerText = `${currentPage} of ${totalItems}`;
}

const offersPerPage = 5;
let currentPage = 1;

const offerList = document.getElementById("offerList");
const offers = Array.from(offerList.getElementsByClassName("offer-card"));
const totalPages = Math.ceil(offers.length / offersPerPage);

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageInfo = document.getElementById("pageInfo");

function showPage(page) {
  // Giới hạn phạm vi trang
  if (page < 1 || page > totalPages) return;
  currentPage = page;

  // Ẩn tất cả offer
  offers.forEach((offer, index) => {
    offer.style.display =
      index >= (page - 1) * offersPerPage && index < page * offersPerPage
        ? "block"
        : "none";
  });

  // Cập nhật phân trang
  pageInfo.textContent = `${currentPage} of ${totalPages}`;
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}

// Gán sự kiện nút
prevBtn.addEventListener("click", () => showPage(currentPage - 1));
nextBtn.addEventListener("click", () => showPage(currentPage + 1));

// Hiển thị trang đầu tiên
showPage(1);
