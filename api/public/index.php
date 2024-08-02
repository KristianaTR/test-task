<?php
require_once '../src/Database/database.php';
require_once '../src/Models/product.php';
require_once '../src/Controllers/ProductController.php';

// Initialize database and controllers
$database = new Database();
$db = $database->getConnection();
$productController = new ProductController($db);

// Route requests
$url = $_SERVER['REQUEST_URI'];
$method = $_SERVER['REQUEST_METHOD'];

if ($url === '/api/product' && $method === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    $productController->createProduct($data);
} else {
    http_response_code(404);
    echo json_encode(["message" => "Page not found."]);
}