cd ~/react-advanced
npm run build:prod

rm -rf ~/../var/www/production_project/html
mv ~/react-advanced/build ~/../var/www/production_project/html