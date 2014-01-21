<?php
$uri = explode('?', $_SERVER["REQUEST_URI"]);
$uri = $uri[0];

if (preg_match('/\.(?:php|png|js|css|jpg|jpeg|gif)$/', $uri)) {
  // serve the requested resource as-is.
  return false;
} else {
  include_once __DIR__ .'/wordpress/index.php';
}