document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.getElementById("search-form");
    const searchResult = document.getElementById("search-result");

    searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        searchResult.innerHTML = '';

        const keyword = document.getElementById("search-box").value.trim();
        if (!/^\d+$/.test(keyword)) {
            const message = document.createElement("div");
            message.innerHTML = '<p>Please enter a valid <strong>Table Name</strong>.</p>';
            message.classList.add('error');
            message.style.cssText = 'font-size: 16px; animation: shake 0.1s linear 10;';
            searchResult.appendChild(message);
            return;
        }

        const number = parseInt(keyword);
        for (let i = 1; i <= 10; i++) {
            const row = document.createElement("div");
            row.innerHTML = `${number} &nbsp; x &nbsp; ${i} &nbsp; = &nbsp; ${number * i}`;
            searchResult.appendChild(row);
        }
    });
});

