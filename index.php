<?php
    $dir = 'main';
    $filename = 'login';
    $path = null;
    //如果地址index.php后有字符串
    if (array_key_exists('PATH_INFO', $_SERVER)) {
        //定义$path接受index.php后的字符串，默认的$path格式    /main/index.html
        $path = $_SERVER['PATH_INFO'];
        //去掉第一个$path的第一个字符，变成 main/index.html
        $str = substr($path, 1);
        //用‘/’，分割$path成数组
        $arr = explode('/', $str);
        //如果$arr长度为2，说明分割成功
        if (count($arr) == 2) {
            $dir = $arr[0];
            $filename = $arr[1];
        } else {
            $filename = 'login';
        }
    }
    include './views/'.$dir.'/'.$filename.'.html';
?>