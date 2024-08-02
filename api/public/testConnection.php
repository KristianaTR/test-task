<?php
require_once '../src/Database/database.php';

// Create a new database connection
$database = new Database();
$db = $database->getConnection();

if ($db) {
    echo "Connected successfully";
} else {
    echo "Connection failed";
}
