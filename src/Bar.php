<?php

namespace Ajiho\ComposerBuildBoilerplate;

class Bar
{
     /**
     * @var string
     */
    protected $key;

    /**
     * constructor.
     *
     * @param string $key
     */
    public function __construct($key)
    {
        $this->key = $key;
    }
}
