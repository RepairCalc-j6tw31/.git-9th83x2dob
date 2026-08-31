(() => {
  const config = window.REPAIRCALC_CONFIG || {};
  document.querySelectorAll("[data-download]").forEach((link) => {
    link.href = config.downloadUrl || "https://averagecert.github.io/";
  });
  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });
})();
