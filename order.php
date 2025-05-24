<?php
session_start();
include 'db.php';

$user_id = $_SESSION['user_id'];
$product_id = $_POST['product_id'];
$quantity = $_POST['quantity'];

$stmt = $conn->prepare("INSERT INTO orders (user_id, product_id, quantity) VALUES (?, ?, ?)");
$stmt->bind_param("iii", $user_id, $product_id, $quantity);
$stmt->execute();

echo "Order placed successfully!";
?>
