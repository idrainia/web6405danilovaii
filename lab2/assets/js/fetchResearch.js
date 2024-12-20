async function fetchAndFillTable() {
    try {
        const response = await fetch('http://127.0.0.1:8000/publications');

        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }

        const data = await response.json();

        const tableBody = document.getElementById('research-table');
        tableBody.innerHTML = '';

        data.data.forEach(item => {
            const row = `
                <tr>
                    <td>${item.title}</td>
                    <td>${item.region}</td>
                    <td>${item.date}</td>
                    <td>${item.description}</td>
                    <td><a href="${item.link}">Читать подробнее</a></td>
                </tr>`;
            tableBody.innerHTML += row;
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        alert('Failed to fetch data. See console for details.');
    }
}

window.onload = fetchAndFillTable;
