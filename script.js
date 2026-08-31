(() => {
  const config = window.REPAIRCALC_CONFIG || {};
  document.querySelectorAll("[data-download]").forEach((link) => {
    link.href = config.downloadUrl || "https://flyn.im/MDSlPk";
  });
  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });
})();
