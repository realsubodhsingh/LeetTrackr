document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("search-btn");
    const usernameInput = document.getElementById("user-input");
    const easyLabel = document.getElementById("easy-label");
    const mediumLabel = document.getElementById("medium-label");
    const hardLabel = document.getElementById("hard-label");
    const easyProgressCircle = document.querySelector(".easy-progress");
    const mediumProgressCircle = document.querySelector(".medium-progress");
    const hardProgressCircle = document.querySelector(".hard-progress");
    const acceptanceRateBar = document.getElementById("acceptance-rate-bar");
    const acceptanceRateLabel = document.getElementById("acceptance-rate-label");
    const rankingElement = document.getElementById("global-ranking");
    const calendarGrid = document.querySelector(".calendar-grid");

    // Validate LeetCode username
    function validateUsername(username) {
        if (username.trim() === "") {
            alert("Username should not be empty");
            return false;
        }
        const regex = /^(?![_-])(?!.*[_-]{2})[a-zA-Z0-9_-]{1,15}(?<![_-])$/;
        return regex.test(username) || alert("Invalid username");
    }

    // Fetch user details from LeetCode API
    async function fetchUserDetails(username) {
        const url = `https://leetcode-stats-api.herokuapp.com/${username}`;
        try {
            searchButton.innerHTML = `<i class="fa-solid fa-spinner"></i>`;
            searchButton.disabled = true;

            const response = await fetch(url);
            if (!response.ok) throw new Error("Unable to fetch user profile details");

            const parsedData = await response.json();
            console.log("User Data: ", parsedData);
            displayUserData(parsedData);
        } catch (error) {
            console.log("No data found");
        } finally {
            searchButton.innerHTML = `<i class="fa-solid fa-magnifying-glass"></i>`;
            searchButton.disabled = false;
        }
    }

    // Update progress circles
    function updateProgress(solved, total, label, circle) {
        const progressDegree = (solved / total) * 100;
        circle.style.setProperty("--progress-degree", `${progressDegree}%`);
        label.textContent = `${solved}/${total}`;
    }

    // Update acceptance rate bar
    function updateAcceptanceRate(acceptanceRate) {
        acceptanceRateBar.style.width = `${acceptanceRate}%`;
        acceptanceRateLabel.textContent = `${acceptanceRate}%`;
    }

    // Generate heatmap for submission calendar
    function generateHeatmap(submissionData) {
        calendarGrid.innerHTML = ''; // Clear previous grid content
        for (const date in submissionData) {
            const submissions = submissionData[date];
            const dayDiv = document.createElement("div");
            dayDiv.classList.add("calendar-day");

            // Assign data-submissions attribute based on the number of submissions
            if (submissions === 0) {
                dayDiv.setAttribute("data-submissions", "0");
            } else if (submissions <= 3) {
                dayDiv.setAttribute("data-submissions", "1-3");
            } else if (submissions <= 6) {
                dayDiv.setAttribute("data-submissions", "4-6");
            } else if (submissions <= 10) {
                dayDiv.setAttribute("data-submissions", "7-10");
            } else {
                dayDiv.setAttribute("data-submissions", "10+");
            }
            calendarGrid.appendChild(dayDiv);
        }
    }

    // Display user data after API fetch
    function displayUserData(parsedData) {
        const { totalEasy, totalMedium, totalHard, easySolved, mediumSolved, hardSolved, acceptanceRate = 0, submissionCalendar = {} } = parsedData;

        updateProgress(easySolved, totalEasy, easyLabel, easyProgressCircle);
        updateProgress(mediumSolved, totalMedium, mediumLabel, mediumProgressCircle);
        updateProgress(hardSolved, totalHard, hardLabel, hardProgressCircle);

        updateAcceptanceRate(acceptanceRate);
        generateHeatmap(submissionCalendar);

        const globalRanking = parsedData.ranking; 
        rankingElement.textContent = `${globalRanking}`;
    }

   
    // Search button click event
    searchButton.addEventListener("click", function () {
        const username = usernameInput.value;
        if (validateUsername(username)) {
            fetchUserDetails(username);
        }
    });
});
