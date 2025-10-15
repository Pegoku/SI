# FLAG
FLAG IS W3N33DMOR3FREEDOM

# Solve process

Extract the keypresses from the pcap
`tshark -r 'data.pcap' -T fields -e usb.capdata > keebData.orig.txt`

https://stackoverflow.com/questions/68656764/reading-a-wireshark-livecapture-of-usb-keystrokes-into-python-on-ubuntu-20-04

Create a script to parse the keebData and convert it to regular keypresses
`SOLUTION.py`

Keypresses list:
https://gist.github.com/MightyPork/6da26e382a7ad91b5496ee55fdc73db2?permalink_comment_id=4339074#gistcomment-4339074
