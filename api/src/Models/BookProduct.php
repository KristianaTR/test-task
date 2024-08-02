<?php

namespace Model;

class BookProduct extends Product
{
    private $weight;

    public function __construct($sku, $name, $price, $weight)
    {
        parent::__construct($sku, $name, $price);
        $this->weight = $weight;
    }

    public function getWeight()
    {
        return $this->weight;
    }

    public function setWeight($weight)
    {
        $this->weight = $weight;
    }

    public function getType()
    {
        return 'Book';
    }

    public function getAttributes()
    {
        return ['weight' => $this->weight];
    }

    public function save()
    {
        // Implement save logic here using ProductService
        ProductService::save($this);
    }
}