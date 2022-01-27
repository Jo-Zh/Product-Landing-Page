window.addEventListener("DOMContentLoaded", () => {
  const package = document.getElementById("Product-Packages");
  const orderbutton = package.querySelectorAll(".order");
  const select = document.getElementById("selection");
  const selectall = select.querySelectorAll("option");

  orderbutton.forEach((el) => {
    el.addEventListener("click", (e) => {
      const selectorder = e.currentTarget.parentNode;
      const order = selectorder.querySelector(".pack-title").innerText;
      localStorage.setItem("order", order);
      selectall.forEach((option) => {
        if (option.innerText === order) {
          option.setAttribute("selected", "selected");
        }
      });
    });
  });
});
