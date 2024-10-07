const candidateId = 'd851be47-c15c-48fa-8c20-94f117d23ca2'; // Your candidate ID
const baseUrl = 'https://challenge.crossmint.io/api';

// Coordinates for the X-shape
const coordinates = [
    { row: 0, column: 2 },
    { row: 1, column: 1 },
    { row: 1, column: 3 },
    { row: 2, column: 0 },
    { row: 2, column: 4 },
    { row: 3, column: 1 },
    { row: 3, column: 3 },
    { row: 4, column: 2 }
];

// Function to create Polyanets
async function createPolyanets() {
    for (const { row, column } of coordinates) {
        try {
            const response = await fetch(`${baseUrl}/polyanets`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ candidateId, row, column }),
            });

            if (!response.ok) {
                // Handle different response statuses
                const errorData = await response.json();
                console.error(`Error creating Polyanet at (${row}, ${column}):`, errorData);
                continue; // Skip to the next coordinate
            }

            const data = await response.json();
            console.log(`Created Polyanet at (${row}, ${column}):`, data);
        } catch (error) {
            console.error(`Network error creating Polyanet at (${row}, ${column}):`, error);
        }
    }
}

// Function to check the goal map
async function checkGoalMap() {
    try {
        const response = await fetch(`${baseUrl}/map/${candidateId}/goal`);
        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error fetching goal map:', errorData);
            return;
        }

        const goalMap = await response.json();
        console.log('Goal Map:', goalMap);
    } catch (error) {
        console.error('Network error fetching goal map:', error);
    }
}

// Execute the functions
createPolyanets().then(() => checkGoalMap());
