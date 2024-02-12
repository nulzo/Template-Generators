set language=%1
set name=%2

CMD /k "npm create vite@latest %name% -- --template %language%"
CD /D "%name%" && echo Hey!