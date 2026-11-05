@echo off
call npm ci
if errorlevel 1 exit /b 1
call npm run check
if errorlevel 1 exit /b 1
call npm run build
if errorlevel 1 exit /b 1
call npm test
if errorlevel 1 exit /b 1
call build\hello.cmd
if errorlevel 1 exit /b 1
