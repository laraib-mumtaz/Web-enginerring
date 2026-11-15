window.onload = function () {

    var links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            var section = document.querySelector(this.getAttribute("href"));
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    var themeBtn = document.createElement("button");
    themeBtn.textContent = "Toggle Light/Dark Mode";
    themeBtn.id = "theme-toggle";
    document.body.insertBefore(themeBtn, document.body.firstChild);

    var darkMode = false;
    var headings = document.querySelectorAll("h1, h2, h3");
    var tables = document.querySelectorAll("table");
    var tableHeaders = document.querySelectorAll("th");
    var tableCells = document.querySelectorAll("td");

    themeBtn.addEventListener("click", function () {
        darkMode = !darkMode;
        if (darkMode) {
            document.body.style.backgroundColor = "#1e1e1e";
            document.body.style.color = "#f5f5f5";

            headings.forEach(function (h) {
                h.style.color = "#ffffff";
            });
            document.querySelectorAll("h2").forEach(function (h2) {
                h2.style.borderBottomColor = "#666666";
            });

            tables.forEach(function (t) {
                t.style.borderColor = "#666666";
            });
            tableHeaders.forEach(function (th) {
                th.style.backgroundColor = "#444444";
                th.style.color = "#ffffff";
                th.style.borderColor = "#666666";
            });
            tableCells.forEach(function (td) {
                td.style.color = "#ffffff";
                td.style.borderColor = "#666666";
            });

        } else {
            document.body.style.backgroundColor = "#ffffff";
            document.body.style.color = "#000000";

            headings.forEach(function (h) {
                h.style.color = "";
            });
            document.querySelectorAll("h2").forEach(function (h2) {
                h2.style.borderBottomColor = "";
            });

            tables.forEach(function (t) {
                t.style.borderColor = "";
            });
            tableHeaders.forEach(function (th) {
                th.style.backgroundColor = "";
                th.style.color = "";
                th.style.borderColor = "";
            });
            tableCells.forEach(function (td) {
                td.style.color = "";
                td.style.borderColor = "";
            });
        }
    });

    var rows = document.querySelectorAll("table tr");

    rows.forEach(function (row) {
        if (row.querySelector("th")) {
            return;
        }
        row.addEventListener("mouseover", function () {
            row.style.backgroundColor = "#ffeaa7";
        });
        row.addEventListener("mouseout", function () {
            row.style.backgroundColor = "";
        });
    });

    var aboutSection = document.getElementById("about");
    if (aboutSection) {
        var extraText = document.createElement("p");
        extraText.textContent = "I am also passionate about learning new frameworks and keeping up with the latest web technologies. My goal is to become a full-stack developer and build applications that make a difference.";
        extraText.style.display = "none";

        var readMoreBtn = document.createElement("button");
        readMoreBtn.textContent = "Read More";
        readMoreBtn.style.padding = "8px 15px";
        readMoreBtn.style.cursor = "pointer";
        readMoreBtn.style.marginTop = "10px";

        readMoreBtn.addEventListener("click", function () {
            if (extraText.style.display === "none") {
                extraText.style.display = "block";
                readMoreBtn.textContent = "Read Less";
            } else {
                extraText.style.display = "none";
                readMoreBtn.textContent = "Read More";
            }
        });

        aboutSection.appendChild(extraText);
        aboutSection.appendChild(readMoreBtn);
    }

    var modalOverlay = document.createElement("div");
    modalOverlay.id = "custom-modal-overlay";
    modalOverlay.style.display = "none";
    modalOverlay.style.position = "fixed";
    modalOverlay.style.top = "0";
    modalOverlay.style.left = "0";
    modalOverlay.style.width = "100%";
    modalOverlay.style.height = "100%";
    modalOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    modalOverlay.style.zIndex = "1000";
    modalOverlay.style.justifyContent = "center";
    modalOverlay.style.alignItems = "center";

    var modalBox = document.createElement("div");
    modalBox.style.backgroundColor = "#ffffff";
    modalBox.style.padding = "25px";
    modalBox.style.borderRadius = "8px";
    modalBox.style.textAlign = "center";
    modalBox.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
    modalBox.style.minWidth = "300px";

    var modalText = document.createElement("p");
    modalText.id = "custom-modal-text";
    modalText.style.margin = "0 0 20px 0";
    modalText.style.fontSize = "16px";
    modalText.style.color = "#333";

    var modalBtn = document.createElement("button");
    modalBtn.textContent = "OK";
    modalBtn.style.padding = "8px 20px";
    modalBtn.style.cursor = "pointer";
    modalBtn.style.backgroundColor = "#007bff";
    modalBtn.style.color = "#fff";
    modalBtn.style.border = "none";
    modalBtn.style.borderRadius = "4px";

    modalBtn.addEventListener("click", function () {
        modalOverlay.style.display = "none";
    });

    modalBox.appendChild(modalText);
    modalBox.appendChild(modalBtn);
    modalOverlay.appendChild(modalBox);
    document.body.appendChild(modalOverlay);

    function showPopup(message) {
        modalText.textContent = message;
        modalOverlay.style.display = "flex";
    }

    var form = document.querySelector("form");
    var nameInput = form.querySelector('input[type="text"]');
    var emailInput = form.querySelector('input[type="email"]');
    var messageBox = form.querySelector("textarea");

    var counter = document.createElement("p");
    counter.id = "char-counter";
    counter.textContent = "100 characters remaining";
    messageBox.parentNode.appendChild(counter);

    messageBox.setAttribute("maxlength", "100");

    messageBox.addEventListener("input", function () {
        var remaining = 100 - messageBox.value.length;
        counter.textContent = remaining + " characters remaining";
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        var name = nameInput.value.trim();
        var email = emailInput.value.trim();
        var message = messageBox.value.trim();

        if (name === "" || email === "" || message === "") {
            showPopup("Please fill all input fields.");
            return;
        }

        if (email.indexOf("@") === -1) {
            showPopup("Please enter a valid email.");
            return;
        }

        showPopup("Thank you " + name + "! Your message was sent successfully.");
        form.reset();
        counter.textContent = "100 characters remaining";
    });

    var topBtn = document.createElement("button");
    topBtn.textContent = "↑ Top";
    topBtn.style.position = "fixed";
    topBtn.style.bottom = "20px";
    topBtn.style.right = "20px";
    topBtn.style.padding = "10px";
    topBtn.style.display = "none";
    document.body.appendChild(topBtn);

    window.onscroll = function () {
        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    };

    topBtn.onclick = function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

};
