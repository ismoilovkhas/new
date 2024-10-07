const candidateId = "d851be47-c15c-48fa-8c20-94f117d23ca2"; // Your candidate ID
const row = 1;
const column = 1;

const url = "https://challenge.crossmint.io/api/polyanets";

const data = {
    candidateId: candidateId,
    row: row,
    column: column
};

fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.statusText);
    }
    return response.json();
})
.then(data => {
    console.log("Success:", data);
})
.catch(error => {
    console.error("Error:", error);
});


// Execute the functions
createPolyanets()
    // .then(() => checkGoalMap());
