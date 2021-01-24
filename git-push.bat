git add .
@echo off
set /P mensaje=Ingrese un commit: 

echo "%mensaje%"
git commit -m "%mensaje%"
git branch -M main
rem git remote add origin https://github.com/corbaz/deno-mysql.git
git push -u origin main