<?php

namespace Ajiho\ComposerBuildBoilerplate;

class Weather
{
     /**
     * @var string
     */
    protected $key;

    /**
     * Weather constructor.
     *
     * @param string $key
     */
    public function __construct($key)
    {
        $this->key = $key;
    }
}
