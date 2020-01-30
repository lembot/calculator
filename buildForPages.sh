#!/usr/bin/env bash
echo "<!DOCTYPE html><html lang=\"en\"><head><style>" >> ./index.html
cat ./dist/minified.css >> ./index.html
echo "</style><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"><meta name=\"theme-color\" content=\"#000000\"><link rel=\"shortcut icon\" href=\"/favicon.ico\"><title>Calculator</title></head><body><noscript>You need to enable JavaScript to run this app.</noscript><div id=\"root\"></div><script>" >> ./index.html
cat ./dist/minified.js >> ./index.html
echo "</script></body></html>" >> ./index.html