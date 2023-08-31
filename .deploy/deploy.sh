cd ~/react-advanced
npm run build:prod

rm -rf ~/../var/www/react-advanced/html
mv ~/react-advanced/build ~/../var/www/react-advanced/html