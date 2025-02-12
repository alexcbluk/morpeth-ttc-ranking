import './style.css'
import { populateTable } from "./ranking/ranking.js";

document.querySelector('#app').innerHTML = `
  <div>
    <h1 class="text-3xl font-bold underline mb-10">
      Junior Ranking
    </h1>
    <table id="ranking_table">
        <thead>
            <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Format</th>
                <th>Last Match</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
  </div>
`

const fetchData = async () => {
    try {
        const response = await fetch("http://localhost:3000/api/data"); // API URL
        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json();
        return data;
    } catch (error) {
        document.getElementById("ranking_table").innerHTML = "<p>Error loading data</p>";
    }
}

const data = await fetchData();
if (data) {
  populateTable(data, "ranking_table");
}

