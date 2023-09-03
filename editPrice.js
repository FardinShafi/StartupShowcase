function add() {
    var hahaDiv = document.getElementById("haha");
    hahaDiv.textContent = "";
    var newDiv = document.createElement("div");
    newDiv.className = "myform";
    // newDiv.setAttribute('id', 'myform2');
    newDiv.innerHTML = `<form class="myform" action="addPrice.php"  method="POST"
        <label>Enter City</label>
        <input type="text" name="city" class="field" required>
        <label>Enter Area</label>
        <input type="text" class="field" name="area" required>
        <label>Base Fare</label>
        <input type="text" class="field" name="base" required>
        <label>Hourly Rate</label>
        <input type="text" class="field" name="hourly" required>

        <button type="button" style="color: black;" class="btn btn-primary btn1" data-bs-toggle="modal"
                        data-bs-target="#exampleModal">
                        Submit
                    </button>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header booba-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel"><img style="width: 90px;" class="popup_img"
                                        src="images/yes-unscreen.gif" alt="">
                                </h1>
        
                            </div>
                            <div class="modal-body myBody">
                                <h3>Thank You</h3>
                                <p>Price Set Was Successful</p>
                            </div>
                            <div class="modal-footer">
                                <a href="#"><button type="button" class=" btn2" data-bs-dismiss="modal">OK</button></a>
                            </div>
                        </div>
                    </div>
                </div> 
                    
                    
                    `;
    hahaDiv.appendChild(newDiv);
}

function edit() {
    var hahaDiv = document.getElementById("haha");
    hahaDiv.textContent = "";
    var newDiv = document.createElement("div");
    newDiv.innerHTML = `                <div id="search-div" class="search-div">
    <label>Select City</label>
    <select class="combo-box" id="citySelect">
        <!-- Options will be dynamically added here -->
    </select>
    <label>Select Area</label>
    <select class="combo-box" id="areaSelect">
        <!-- Options will be dynamically added here -->
    </select>
    <button id="searchButton"><img class="search-icon src_icn" src="images/search.png" alt=""></button>
</div>
<br><br><br>
<form id="editForm" class="myform">
    <label>Base Fare</label>
    <input type="text" id="baseFareInput" class="field" required>
    <label>Hourly Rate</label>
    <input type="text" id="hourlyRateInput" class="field" required>
    <button type="button" style="color: black;" class="btn btn-primary btn1" data-bs-toggle="modal"
                    data-bs-target="#exampleModal">
                    Confirm
                </button>
</form>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header booba-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel"><img style="width: 90px;"
                                    class="popup_img" src="images/yes-unscreen.gif" alt="">
                            </h1>

                        </div>
                        <div class="modal-body myBody">
                            <h3>Thank You</h3>
                            <p>Your Booking Has Been Successful</p>
                        </div>
                        <div class="modal-footer">
                            <a href=""><button type="button" class=" btn2" data-bs-dismiss="modal">OK</button></a>
                        </div>
                    </div>
                </div>
            </div>

`;
    hahaDiv.appendChild(newDiv);
}

// Fetch city and area options and populate the selects
document.addEventListener("DOMContentLoaded", function () {
    fetchCityAndAreaOptions();

    // Handle search button click
    var searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", function () {
        fetchValuesForCityAndArea();
    });

    // Handle form submit
    var editForm = document.getElementById("editForm");
    editForm.addEventListener("submit", function (event) {
        event.preventDefault();
        updateDatabase();
    });
});

function fetchCityAndAreaOptions() {
    // Simulated data, replace with actual API call or database fetch
    var cities = ["Dhaka", "Barishal", "Cumilla", "Rajshahi", "Lalbag"];
    var areas = ["Gulshan", "Bashundhara", "Taltola", "Uttara", "Dhanmondi"];

    var citySelect = document.getElementById("citySelect");
    var areaSelect = document.getElementById("areaSelect");

    cities.forEach(function (city) {
        var option = document.createElement("option");
        option.value = city;
        option.text = city;
        citySelect.appendChild(option);
    });

    areas.forEach(function (area) {
        var option = document.createElement("option");
        option.value = area;
        option.text = area;
        areaSelect.appendChild(option);
    });
}

function fetchValuesForCityAndArea() {
    var selectedCity = document.getElementById("citySelect").value;
    var selectedArea = document.getElementById("areaSelect").value;

    // Simulated data, replace with actual API call or database fetch
    var fetchedBaseFare = 100; // Fetched base fare
    var fetchedHourlyRate = 10; // Fetched hourly rate

    document.getElementById("baseFareInput").value = fetchedBaseFare;
    document.getElementById("hourlyRateInput").value = fetchedHourlyRate;
}

function updateDatabase() {
    var selectedCity = document.getElementById("citySelect").value;
    var selectedArea = document.getElementById("areaSelect").value;
    var newBaseFare = document.getElementById("baseFareInput").value;
    var newHourlyRate = document.getElementById("hourlyRateInput").value;

    // Simulated data, replace with actual API call or database update
    console.log("Updating database...");
}
