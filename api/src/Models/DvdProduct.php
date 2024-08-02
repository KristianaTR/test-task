<?php

namespace Model;

class Dvd extends Product
{
    private $size;

    public function __construct($sku, $name, $price, $size)
    {
        parent::__construct($sku, $name, $price);
        $this->size = $size;
    }

    public function getSize()
    {
        return $this->size;
    }

    public function setSize($size)
    {
        $this->size = $size;
    }

    public function getType()
    {
        return 'DVD';
    }

    public function getAttributes()
    {
        return ['size' => $this->size];
    }

    public function save()
    {
        // Implement save logic here using ProductService
        ProductService::save($this);
    }
}