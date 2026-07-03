const WHATSAPP_NUMBER = "6281234567890";

const products = [
  {
    name: "Roti Gembong Original",
    category: "Original",
    price: "Rp15.000",
    status: "Tersedia",
    desc: "Roti gembong klasik dengan tekstur lembut dan aroma panggang hangat.",
    detail: "Cocok untuk sarapan, teman kopi, atau bekal keluarga. Porsi 2-3 orang.",
    filling: "#f6d58d",
    breadA: "#f7d789",
    breadB: "#c8681d"
  },
  {
    name: "Roti Gembong Cokelat",
    category: "Manis",
    price: "Rp18.000",
    status: "Tersedia",
    desc: "Isian cokelat tebal dengan rasa manis yang pas.",
    detail: "Favorit anak-anak dan pelanggan yang suka roti manis klasik.",
    filling: "#5b2e19",
    breadA: "#f8cf78",
    breadB: "#a84d1c"
  },
  {
    name: "Roti Gembong Keju",
    category: "Manis",
    price: "Rp19.000",
    status: "Tersedia",
    desc: "Taburan dan isian keju gurih yang berpadu dengan roti empuk.",
    detail: "Rasa gurih-manis seimbang, cocok untuk oleh-oleh keluarga.",
    filling: "#fff0a8",
    breadA: "#ffe0a0",
    breadB: "#bd681f"
  },
  {
    name: "Roti Gembong Cokelat Keju",
    category: "Premium",
    price: "Rp22.000",
    status: "Tersedia",
    desc: "Perpaduan cokelat lembut dan keju gurih dalam satu roti.",
    detail: "Pilihan aman untuk dibagi karena rasanya akrab dan disukai banyak orang.",
    filling: "#7a3b1f",
    breadA: "#f8d485",
    breadB: "#b95b20"
  },
  {
    name: "Roti Gembong Tiramisu",
    category: "Premium",
    price: "Rp23.000",
    status: "Pre-order",
    desc: "Krim tiramisu lembut dengan aroma kopi yang ringan.",
    detail: "Disarankan pre-order agar krim disiapkan fresh sesuai jadwal pickup.",
    filling: "#c69c6d",
    breadA: "#f5cb79",
    breadB: "#9f4d1e"
  },
  {
    name: "Roti Gembong Matcha",
    category: "Premium",
    price: "Rp23.000",
    status: "Pre-order",
    desc: "Isian matcha creamy dengan sentuhan pahit yang elegan.",
    detail: "Cocok untuk pelanggan yang suka rasa premium dan tidak terlalu manis.",
    filling: "#2f8d62",
    breadA: "#f4d27d",
    breadB: "#aa5a1c"
  },
  {
    name: "Roti Gembong Abon",
    category: "Premium",
    price: "Rp24.000",
    status: "Tersedia",
    desc: "Pilihan gurih dengan abon melimpah untuk rasa yang lebih mengenyangkan.",
    detail: "Enak untuk sarapan cepat atau bekal perjalanan.",
    filling: "#b46436",
    breadA: "#f4c875",
    breadB: "#a8531c"
  },
  {
    name: "Paket Mix 3 Rasa",
    category: "Paket",
    price: "Rp55.000",
    status: "Tersedia",
    desc: "Tiga rasa favorit dalam satu paket hemat untuk keluarga.",
    detail: "Isi dapat menyesuaikan stok harian. Cocok untuk acara kecil dan oleh-oleh.",
    filling: "#6c3a1c",
    breadA: "#f8d98b",
    breadB: "#b95b20"
  }
];

const productGrid = document.querySelector("#product-grid");
const dialog = document.querySelector("#product-dialog");
const dialogContent = document.querySelector("#dialog-content");
const closeDialog = document.querySelector(".dialog-close");
const filterButtons = document.querySelectorAll(".filter-chip");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");

function orderUrl(message) {
  const text = `Halo Toko Roti Gembong Gembul.\n\n${message}\nJumlah:\nNama:\nTanggal ambil/kirim:\nCatatan:`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function productArt(product) {
  return `
    <div class="product-art" style="--filling:${product.filling};--bread-a:${product.breadA};--bread-b:${product.breadB};">
      <div class="mini-bread" role="img" aria-label="${product.name}"></div>
    </div>
  `;
}

function statusClass(status) {
  if (status === "Pre-order") return "preorder";
  if (status === "Habis") return "soldout";
  return "";
}

function renderProducts(category = "Semua") {
  const visibleProducts = category === "Semua" ? products : products.filter((item) => item.category === category);

  productGrid.innerHTML = visibleProducts
    .map((product) => {
      const originalIndex = products.indexOf(product);
      return `
        <article class="product-card">
          ${productArt(product)}
          <div class="product-body">
            <div class="product-meta">
              <span>${product.category}</span>
              <span class="status ${statusClass(product.status)}">${product.status}</span>
            </div>
            <h3>${product.name}</h3>
            <p>${product.desc}</p>
            <strong class="product-price">${product.price}</strong>
            <div class="product-actions">
              <button class="button secondary" type="button" data-detail="${originalIndex}">Detail</button>
              <a class="button primary" href="${orderUrl(`Produk: ${product.name}`)}" target="_blank" rel="noreferrer">Pesan</a>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function openProductDetail(index) {
  const product = products[index];
  dialogContent.innerHTML = `
    ${productArt(product)}
    <div class="dialog-info">
      <p class="eyebrow">${product.category}</p>
      <h2>${product.name}</h2>
      <p>${product.desc}</p>
      <strong class="product-price">${product.price}</strong>
      <div class="dialog-facts">
        <span>Status: ${product.status}</span>
        <span>Ukuran: 1 box roti gembong</span>
        <span>Saran simpan: tutup rapat, hangatkan sebelum dimakan</span>
      </div>
      <p>${product.detail}</p>
      <a class="button primary" href="${orderUrl(`Produk: ${product.name}`)}" target="_blank" rel="noreferrer">Pesan via WhatsApp</a>
    </div>
  `;
  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }
}

function hydrateWhatsappLinks() {
  document.querySelectorAll("[data-wa]").forEach((link) => {
    link.setAttribute("href", orderUrl(link.dataset.wa));
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noreferrer");
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderProducts(button.dataset.filter);
  });
});

productGrid.addEventListener("click", (event) => {
  const detailButton = event.target.closest("[data-detail]");
  if (!detailButton) return;
  openProductDetail(Number(detailButton.dataset.detail));
});

closeDialog.addEventListener("click", () => dialog.close());

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

menuToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav.addEventListener("click", (event) => {
  if (event.target.tagName !== "A") return;
  siteNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
});

renderProducts();
hydrateWhatsappLinks();
