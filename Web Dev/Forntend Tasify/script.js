document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ DOM fully loaded and script.js running");

    // Ensure topPicks container exists
    const topPicksContainer = document.getElementById("topPicks");
    if (!topPicksContainer) {
        console.error("❌ Element #topPicks NOT FOUND!");
        return;
    }

    // Top Picks Data
    /*const topPicks = [
        { icon: "💬", name: "Surveys", description: "Share your opinion to... (0/2)", reward: 0.51 },
        { icon: "🎮", name: "Games", description: "Play mini games...(1/10)", reward: 0.29 },
        { icon: "▶️", name: "Videos", description: "Watch videos & earn! (5/10)", reward: 0.02 },
        { icon: "🐝", name: "Share", description: "Share your link to earn...(0/10)", reward: 0.95 },
        { icon: "📺", name: "YouTube", description: "Watch YouTube videos...(2/5)", reward: 0.07 },
        { icon: "🐦", name: "Instagram", description: "Follow pages on Instag...(2/20)", reward: 0.04 }
    ];*/
    const topPicks = [
        { icon: '<i class="fa-solid fa-comments"></i>', name: "Surveys", description: "Share your opinion to... (0/2)", reward: 0.51, usdValue: 0.50 },
        { icon: '<i class="fa-solid fa-gamepad"></i>', name: "Games", description: "Play mini games...(1/10)", reward: 0.29, usdValue: 0.29 },
        { icon: '<i class="fa-solid fa-video"></i>', name: "Videos", description: "Watch videos & earn! (5/10)", reward: 0.02, usdValue: 0.02 }
    ];
    
    console.log("✅ Top Picks Data Loaded:", topPicks);

    // Render Top Picks
    topPicksContainer.innerHTML = topPicks.map(pick => `
        <div class="pick-card" onclick="earnPoints(${pick.reward})">
            <div class="pick-icon">${pick.icon}</div>
            <div class="pick-title">${pick.name}</div>
            <div class="pick-desc">${pick.description}</div>
            <div class="reward">⬆ ${pick.reward.toFixed(2)} Points</div>
        </div>
    `).join("");

    console.log("✅ Top Picks Rendered Successfully");

    // Ensure leaderboard container exists
    const leaderboardContainer = document.getElementById("leaderboard");
    if (!leaderboardContainer) {
        console.error("❌ Element #leaderboard NOT FOUND!");
        return;
    }

    // Leaderboard Data
    const leaderboard = [
        { username: "userecae387b-5f0", reward: 79.46, rank: 1 },
        { username: "userd7d7a97a-2ee", reward: 49.55, rank: 2 },
        { username: "iCantTask", reward: 34.74, rank: 3 },
        { username: "user9eac8b0d-263", reward: 25.47, rank: 4 },
        { username: "user2920078b-8ec", reward: 18.34, rank: 5 }
    ];
    
    console.log("✅ Leaderboard Data Loaded:", leaderboard);

    // Render Leaderboard
    leaderboardContainer.innerHTML = leaderboard.map(user => `
        <div class="leaderboard-card">
            <div class="user-info">
                <span>#${user.rank}</span>
                <div class="user-avatar"></div>
                <span>${user.username}</span>
            </div>
            <div class="reward">⬆ ${user.reward.toFixed(2)} Points</div>
        </div>
    `).join("");

    console.log("✅ Leaderboard Rendered Successfully");
});

// Points System
let points = 0;

// Function to add points
function earnPoints(amount) {
    points += amount;
    document.getElementById("points").innerText = points.toFixed(2);
    localStorage.setItem("userPoints", points);
}

// Function to redeem points
function redeemPoints() {
    if (points >= 50) {
        alert("Redeeming points... Your request is being processed.");
        points -= 50; // Deduct 50 points per redemption
        document.getElementById("points").innerText = points.toFixed(2);
        localStorage.setItem("userPoints", points);
    } else {
        alert("You need at least 50 points to redeem!");
    }
}

// Load saved points from local storage
window.onload = function() {
    if (localStorage.getItem("userPoints")) {
        points = parseFloat(localStorage.getItem("userPoints"));
        document.getElementById("points").innerText = points.toFixed(2);
    }
};