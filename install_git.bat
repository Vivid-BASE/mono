@echo off
echo ========================================
echo Git Auto-Installer for Windows
echo ========================================
echo.

REM Check if Git is already installed
git --version >nul 2>&1
if %errorlevel% equ 0 (
    echo [OK] Git is already installed!
    git --version
    echo.
    echo You can now run: push_to_github.bat
    pause
    exit /b 0
)

echo Git is not installed. Installing now...
echo.

REM Check if winget is available (Windows 10 1809+ / Windows 11)
winget --version >nul 2>&1
if %errorlevel% equ 0 (
    echo Using winget to install Git...
    winget install --id Git.Git -e --source winget --accept-package-agreements --accept-source-agreements
    
    if %errorlevel% equ 0 (
        echo.
        echo ========================================
        echo [SUCCESS] Git installed successfully!
        echo ========================================
        echo.
        echo IMPORTANT: Please close this window and open a NEW PowerShell/Terminal
        echo Then run: push_to_github.bat
        echo.
        pause
        exit /b 0
    ) else (
        echo [ERROR] Installation failed
        goto MANUAL_INSTALL
    )
) else (
    echo winget not available, trying chocolatey...
    
    REM Check if chocolatey is available
    choco --version >nul 2>&1
    if %errorlevel% equ 0 (
        echo Using chocolatey to install Git...
        choco install git -y
        
        if %errorlevel% equ 0 (
            echo.
            echo ========================================
            echo [SUCCESS] Git installed successfully!
            echo ========================================
            echo.
            echo IMPORTANT: Please close this window and open a NEW PowerShell/Terminal
            echo Then run: push_to_github.bat
            echo.
            pause
            exit /b 0
        )
    )
    
    goto MANUAL_INSTALL
)

:MANUAL_INSTALL
echo.
echo ========================================
echo Manual Installation Required
echo ========================================
echo.
echo Automatic installation not available on your system.
echo.
echo Please install Git manually:
echo 1. Open: https://git-scm.com/download/win
echo 2. Download and run the installer
echo 3. Use default settings
echo 4. Restart your terminal
echo 5. Run: push_to_github.bat
echo.
echo Opening download page in browser...
start https://git-scm.com/download/win
echo.
pause
