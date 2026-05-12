// Đảm bảo mã chạy sau khi toàn bộ cây DOM đã được tải
document.addEventListener("DOMContentLoaded", () => {
  // --- Chức năng 1: Header thay đổi khi cuộn ---
  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      // Nếu cuộn xuống hơn 50px
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // --- Chức năng 2: Dropdown Menu cho Desktop ---
  const navItemsWithDropdown = document.querySelectorAll(
    ".main-nav .has-dropdown"
  );
  navItemsWithDropdown.forEach((item) => {
    const link = item.querySelector("a");
    const dropdown = item.querySelector(".dropdown-menu");

    // Hiện khi di chuột vào
    item.addEventListener("mouseenter", () => {
      dropdown.classList.add("show");
    });

    // Ẩn khi di chuột ra
    item.addEventListener("mouseleave", () => {
      dropdown.classList.remove("show");
    });
  });

  // --- Chức năng 3: Menu Mobile (Hamburger) ---

  // Đóng menu khi nhấn vào overlay

  if (window.innerWidth <= 992) {
    const footerColumns = document.querySelectorAll(".footer-column");
    footerColumns.forEach((column) => {
      const title = column.querySelector("h4");
      title.addEventListener("click", () => {
        // Bật/tắt accordion được click
        column.classList.toggle("active");
      });
    });
  }
});

// slide show/hide menu
document.addEventListener("DOMContentLoaded", function () {
  const slides = [
    {
      title: "2026 RAV4",
      subtitle: "Adventure in every charge.",
      background: "/assets/images/Big_Home.png",
    },
    {
      title: "2025 Camry",
      subtitle: "Drive with confidence.",
      background: "/assets/images/CAR.png",
    },
    {
      title: "2025 Tacoma",
      subtitle: "Built for the wild.",
      background: "/assets/images/XE_BROWN.jpg",
    },
    {
      title: "2024 Corolla",
      subtitle: "Style meets performance.",
      background: "/assets/images/xe_wild.png",
    },
    {
      title: "bZ4X EV",
      subtitle: "Toyota's all-electric future.",
      background: "/assets/images/black_car.png",
    },
  ];

  let currentIndex = 0;

  const heroSection = document.querySelector(".hero-section");
  const heroTitle = document.querySelector(".hero-title");
  const heroSubtitle = document.querySelector(".hero-subtitle");
  const leftArrow = document.querySelector(".thumbnail-left");
  const rightArrow = document.querySelector(".thumbnail-right");
  const dots = document.querySelectorAll(".hero-slider-nav .dot");

  // Cập nhật slide hiện tại
  function updateSlide(index) {
    const slide = slides[index];
    heroTitle.textContent = slide.title;
    heroSubtitle.textContent = slide.subtitle;
    heroSection.style.backgroundImage = `url(${slide.background})`;
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }

  leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide(currentIndex);
  });

  rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide(currentIndex);
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateSlide(index);
    });
  });

  updateSlide(currentIndex);
});
// Chức năng Trình chiếu sản phẩm

const slides = document.querySelectorAll(".product-slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const currentPage = document.getElementById("current-page");
const totalPages = document.getElementById("total-pages");

let currentSlide = 0;
totalPages.textContent = slides.length;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classList.add("active");
  currentPage.textContent = index + 1;
}

prevBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

nextBtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});
