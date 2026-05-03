@echo off
setlocal
cd /d "%~dp0"
set "NODE_EXE=C:\Users\杨彬\AppData\Local\OpenAI\Codex\bin\node.exe"

if not exist "%NODE_EXE%" (
  set "NODE_EXE=H:\QClaw\resources\node\node.exe"
)

if not exist "%NODE_EXE%" (
  echo Cannot find Node.js.
  pause
  exit /b 1
)

echo Starting static preview at http://localhost:3000
"%NODE_EXE%" scripts\static-preview.cjs
pause
