let barAmount = document.querySelectorAll(".amount");
let bar = document.querySelectorAll(".bar");

async function fetchData() {
  const data = await fetch("./data.json");
  const result = await data.json();
  return result;
}

fetchData().then((result) => {
  barAmount.forEach((item, index) => {
    item.textContent = `$${result[index].amount}`;
    bar[index].style.height = `${result[index].amount * 3}px`;
      Array.from(bar).forEach((item, index) => {
        item.style.height = `${result[index].amount * 3}px`;
      });

      const barArray = Array.from(bar);
      const maxHeight = Math.max(...barArray.map((b) => b.offsetHeight));
      const maxHeightIndex = barArray.findIndex(
        (b) => b.offsetHeight === maxHeight
      );
      if (maxHeightIndex !== -1) {
        barArray[maxHeightIndex].style.backgroundColor = "var(--Cyan)";
      }
  });
});


bar.forEach((item, index) => {

  item.addEventListener("mouseover", () => {
    barAmount[index].style.display = "flex";
  });
  item.addEventListener("mouseleave", () => {
    barAmount[index].style.display = "none";
  });
});


