<?php
namespace Factory;

use Model\Dvd;
use Model\Book;
use Model\Furniture;

class ProductFactory
{
    public static function createProduct($type, $data)
    {
        $classMap = [
            'dvd' => Dvd::class,
            'book' => Book::class,
            'furniture' => Furniture::class,
        ];

        if (!isset($classMap[$type])) {
            throw new \Exception('Invalid product type');
        }

        return call_user_func([$classMap[$type], 'fromArray'], $data);
    }
}