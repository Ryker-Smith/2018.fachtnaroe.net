cd /var/www/cgi-bin/events/annual
#!/bin/bash
for event in $(ls -1d 08*.EVT 09*.EVT 10*.EVT 11*.EVT 12*.EVT)
        do
                echo Doing: $1${event}
                if [ -f ${event} ]; then
			cp -f ${event} /var/www/html/calendar/$1${event}
                fi
        done

for event in $(ls -1d 01*.EVT 02*.EVT 03*.EVT 04*.EVT 05*.EVT 06*.EVT 07*.EVT 08*.EVT)
        do
                echo Doing: $2${event}
                if [ -f ${event} ]; then
                        cp -f ${event} /var/www/html/calendar/$2${event}
                fi
        done

