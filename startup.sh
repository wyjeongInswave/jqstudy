#!/bin/bash

FID=$(forever list|grep nodemon|sed -r "s/\x1B\[([0-9]{1,2}(;[0-9]{1,2})?)?[m|K]//g"|sed -e 's/.*\[\([^]]*\)\].*/\1/g')

if [ -n "$FID" ]
then
        echo "the server is already running!"
	echo "forever# : $FID"
else
	echo "start server..."
	forever start -c nodemon app.js
fi


