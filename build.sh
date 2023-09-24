rm -rf public
mkdir -p public/js public/img

cp js/*.js public/js
cp -r img/** public/img
cp CNAME public/CNAME
