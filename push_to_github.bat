@echo off
echo ========================================
echo Monochrome Cinderella - Git Setup
echo ========================================
echo.

REM Check if Git is installed
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Git is not installed!
    echo.
    echo Please install Git first:
    echo https://git-scm.com/download/win
    echo.
    echo After installation, restart this script.
    pause
    exit /b 1
)

echo [OK] Git is installed
echo.

REM Check if already initialized
if exist .git (
    echo [INFO] Git repository already initialized
    echo.
) else (
    echo Initializing Git repository...
    git init
    echo [OK] Repository initialized
    echo.
)

REM Check if remote exists
git remote get-url origin >nul 2>&1
if %errorlevel% equ 0 (
    echo [INFO] Remote 'origin' already configured
    git remote -v
    echo.
) else (
    echo.
    echo Please enter your GitHub repository URL:
    echo Example: https://github.com/username/monochrome-cinderella.git
    set /p REPO_URL="Repository URL: "
    
    if "%REPO_URL%"=="" (
        echo [ERROR] No URL provided
        pause
        exit /b 1
    )
    
    git remote add origin %REPO_URL%
    echo [OK] Remote added
    echo.
)

REM Check for changes
echo Checking for changes...
git status --short
echo.

REM Add all files
echo Adding all files...
git add .
echo [OK] Files staged
echo.

REM Commit
echo.
set /p COMMIT_MSG="Enter commit message (or press Enter for default): "
if "%COMMIT_MSG%"=="" (
    set COMMIT_MSG=Update: Fix build and lint errors
)

git commit -m "%COMMIT_MSG%"
if %errorlevel% neq 0 (
    echo [INFO] No changes to commit or commit failed
    echo.
)

REM Push
echo.
echo Pushing to GitHub...
git branch -M main
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo [SUCCESS] Pushed to GitHub!
    echo ========================================
) else (
    echo.
    echo ========================================
    echo [ERROR] Push failed
    echo ========================================
    echo.
    echo Common issues:
    echo 1. Authentication required - use Personal Access Token
    echo 2. Remote URL incorrect
    echo 3. No internet connection
    echo.
    echo See git_setup_guide.md for help
)

echo.
pause
