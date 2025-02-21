const categories = ["Dress", "Tuxedo", "Pants", "Polo", "Gown", "Costume"];

function searchItem() {
    let input = document.getElementById("search").value;
    if (categories.includes(input)) {
        alert(`Showing results for ${input}`);
    } else {
        alert("Item not found. Try another one.");
    }
}
