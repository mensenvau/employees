git pull

cd back-end

npm i 

pm2 restart 6009_employees

cd ../front-end

npm i 

npm run build 

pm2 restart 6010_employees