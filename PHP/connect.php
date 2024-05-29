<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Database connection details
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "web project"; // Corrected the database name format

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare and bind the SQL statement for person table
    $stmt_person = $conn->prepare("INSERT INTO person (name, phone_number) VALUES (?, ?)");
    $stmt_person->bind_param("ss", $name, $phone_number);

    // Set parameters and sanitize input
    $name = htmlspecialchars(strip_tags(trim($_POST['name'])));
    $phone_number = htmlspecialchars(strip_tags(trim($_POST['phone_number'])));

    // Execute the statement for person table
    if (!$stmt_person->execute()) {
        // Handle error
        die("Error: " . $stmt_person->error);
    }

    // Get the ID of the last inserted record
    $person_id = $stmt_person->insert_id;

    // Prepare and bind the SQL statement for reservation table
    $stmt_reservation = $conn->prepare("INSERT INTO reservation (person_id, time, date, number_of_people, message) VALUES (?, ?, ?, ?, ?)");
    $stmt_reservation->bind_param("isiss", $person_id, $time, $date, $number_of_people, $message);

    // Set parameters and sanitize input
    $time = htmlspecialchars(strip_tags(trim($_POST['time'])));
    $date = htmlspecialchars(strip_tags(trim($_POST['date'])));
    $number_of_people = htmlspecialchars(strip_tags(trim($_POST['number'])));
    $message = htmlspecialchars(strip_tags(trim($_POST['message'])));

    // Execute the statement for reservation table
    if (!$stmt_reservation->execute()) {
        // Handle error
        die("Error: " . $stmt_reservation->error);
    }

    // Close statements and database connection
    $stmt_person->close();
    $stmt_reservation->close();
    $conn->close();

    // Redirect back to the contact.html page after successful submission
    header("Location: /HTML/contact.html");
    exit();
} else {
    // Redirect back to the form page if accessed directly
    header("Location: /HTML/contact.html");
    exit();
}
