# ANSI Color Table

An interactive reference table for ANSI 256-bit color sequences.

## The Original Table

This project is based on the __[256-color mode table](https://en.wikipedia.org/wiki/ANSI_escape_code#:~:text=Select%20background%20color-,256%2Dcolor,-mode%20%E2%80%94%20foreground%3A%20ESC)__ originally posted in the __[ANSI Escape Code Wiki](https://en.wikipedia.org/w/index.php?title=ANSI_escape_code&oldid=1143439661)__ on __[Wikipedia](https://wikipedia.org/)__.



<br />

---

# Project Goals

I'm trying to create an interactive color table for the ANSI 256-color escape codes based on the table someone created in the "ANSI Escape Codes" wiki on Wikipedia.

Basically, the goal is to create a webpage dedicated to helping users configure 256-color ANSI escape codes. There will be a brief guide explaining how to use the 256-color escape codes in various CLI terminals, and page will have interactive JavaScript functionality like the following...


## Primary Features
### Quick Escape Code Copying
The __primary goal__ for this whole project is to allow users to click on a color's cell in the table, triggering a small box that gives you the option to copy that color's escape code to your clipboard with multiple formatting options like:

#### UNIX-Based Formatting: 
```bash
# Foreground Color
\e[38;5;$(NUMBER)m

# Background Color
\e[48;5;$(NUMBER)m
```

#### Windows-Based (PowerShell) Formatting:
```powershell
# Foreground Color
`e[38;5;$(NUMBER)m

# Background Color
`e[48;5;$(NUMBER)m
```

<br />

## Additional Features

Eventually I would also like to add additional options and information to the box that appears when you click on a cell, including things like...

### Prompt String Formatting
The option to use the formatting specifically used in prompt strings like `$PS1` (which I believe is designed to protect against line wrapping?). For example:
```bash
# Foreground Color
\[\e[38;5;$(NUMBER)m\]

# Background Color
\[\e[48;5;$(NUMBER)m\]
```

### Interactive Terminal Emulator
The lowest priority goal is to add an interactive terminal emulator (of sorts) to the page. However, the terminal emulator won't actually perform any commands, but instead allows you to see what the colors look like in a terminal window.

This would be a fun feature to add, but it's not necessary for the project to be successful.