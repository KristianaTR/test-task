<?php
class ProductController {
    private $productModel;

    public function __construct($db) {
        $this->productModel = new Product($db);
    }

    public function createProduct($data) {
        $this->productModel->setSKU($data->sku);
        $this->productModel->setName($data->name);
        $this->productModel->setPrice($data->price);

        if ($this->productModel->create()) {
            echo json_encode(["message" => "Product was added."]);
        } else {
            echo json_encode(["message" => "Unable to add product."]);
        }
    }
}