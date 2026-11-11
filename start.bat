@echo off
chcp 65001 >nul
rem Запуск сайта Баклажан KZ: двойной клик по этому файлу.
rem Переходим в папку, где лежит этот файл (даже если она на другом диске).
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo.
  echo [!] Node.js не найден. Установите LTS-версию с https://nodejs.org и запустите этот файл снова.
  echo.
  pause
  exit /b 1
)

echo Версия Node.js:
node -v
echo.

if not exist "node_modules\next" (
  echo Устанавливаю зависимости - первый раз это занимает 1-3 минуты...
  call npm.cmd install
  if errorlevel 1 (
    echo.
    echo [!] npm install завершился с ошибкой. Скопируйте текст выше и пришлите его.
    pause
    exit /b 1
  )
)

echo.
echo Запускаю сайт: http://localhost:3000  ^(закрыть - Ctrl+C или закрыть окно^)
start "" http://localhost:3000
call npm.cmd run dev
pause
