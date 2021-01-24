git add .
@echo off
set /P IP=Ingrese un commit: 

echo '%IP%'
git commit -m '%IP%'
git branch -M main
rem git remote add origin https://github.com/corbaz/deno-mysql.git
git push -u origin main