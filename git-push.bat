git add .
rem @echo off
rem set /P mensaje=Ingrese un commit: 

@echo off
set HORA_COMPLETA=%TIME%
set HORA=%HORA_COMPLETA:~0,2%

set MINUTOS=%HORA_COMPLETA:~3,2%
set SEGUNDOS=%HORA_COMPLETA:~6,2%

if %HORA% LSS 10 (
    set HORA=0%HORA_COMPLETA:~1,1%
)    
@echo HORA
@echo %HORA%

@echo Minutos
@echo %MINUTOS%

@echo Segundos
@echo %SEGUNDOS%


set FECHA_COMPLETA=%DATE%
set DIA=%FECHA_COMPLETA:~0,2%

set MES=%FECHA_COMPLETA:~3,2%
set ANIO=%FECHA_COMPLETA:~6,2%


@echo Dia
@echo %DIA%

@echo Mes
@echo %MES%

@echo Anio
@echo %Anio%

set  Version=Version:%Anio%.%MES%.%DIA%.%HORA%%MINUTOS%
@echo %Version%

git commit -m "%Version%"

git branch -M main
rem git remote add origin https://github.com/corbaz/deno-mysql.git
git push -u origin main