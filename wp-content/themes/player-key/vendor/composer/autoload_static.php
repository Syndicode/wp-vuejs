<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInita5900de1754498a18307d9ccf40ceffc
{
    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'StoutLogic\\AcfBuilder\\' => 22,
        ),
        'D' => 
        array (
            'Doctrine\\Inflector\\' => 19,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'StoutLogic\\AcfBuilder\\' => 
        array (
            0 => __DIR__ . '/..' . '/stoutlogic/acf-builder/src',
        ),
        'Doctrine\\Inflector\\' => 
        array (
            0 => __DIR__ . '/..' . '/doctrine/inflector/lib/Doctrine/Inflector',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInita5900de1754498a18307d9ccf40ceffc::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInita5900de1754498a18307d9ccf40ceffc::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInita5900de1754498a18307d9ccf40ceffc::$classMap;

        }, null, ClassLoader::class);
    }
}
