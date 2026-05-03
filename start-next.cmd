@echo off
setlocal
cd /d "%~dp0"
set "NPM_CACHE=%~dp0.npm-cache"
set "NODE_EXE=H:\QClaw\resources\node\node.exe"
set "NPM_CLI=H:\QClaw\resources\openclaw\config\npm-tools\node_modules\npm\bin\npm-cli.js"

if not exist "%NODE_EXE%" (
  echo Cannot find Node.js at: %NODE_EXE%
  pause
  exit /b 1
)

if not exist "%NPM_CLI%" (
  echo Cannot find npm at: %NPM_CLI%
  pause
  exit /b 1
)

echo Installing Next.js dependencies...
"%NODE_EXE%" "%NPM_CLI%" install --registry=https://registry.npmmirror.com --cache="%NPM_CACHE%"
if errorlevel 1 (
  echo.
  echo npm install failed.
  pause
  exit /b 1
)

echo.
echo Starting Next.js dev server at http://127.0.0.1:3000
"%NODE_EXE%" node_modules\next\dist\bin\next dev -H 127.0.0.1 -p 3000
pause
