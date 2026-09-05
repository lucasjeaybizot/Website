const currentPage = window.location.pathname.split("/").pop() || "index.html";

const navItems = [
  ["index.html", "Home"],
  ["research_page.html", "Research"],
  ["education_page.html", "Education"],
  ["publications_page.html", "Publications"],
  ["blog_page.html", "News"]
];

const nav = document.getElementById("navbar");

nav.innerHTML = `
  ${navItems.map(([url, label]) => `
    <a href="${url}" class="${currentPage === url ? "active" : ""}">
      ${label}
    </a>
  `).join("")}

  <a href="https://github.com/lucasjeaybizot"
     target="_blank"
     class="right">
    <img src="images/github_logo.svg" alt="GitHub">
  </a>

  <a href="https://www.linkedin.com/in/lucas-jeay-bizot/"
     target="_blank"
     class="right">
    <img src="images/linkedin_logo.png" alt="LinkedIn">
  </a>
  <a href="https://scholar.google.com/citations?user=JkOmj_sAAAAJ&hl=en&oi=ao"
     target="_blank" 
     class="right">
     <img src="images/Google_Scholar_logo.svg" alt="google scholar logo">
  </a>
`;