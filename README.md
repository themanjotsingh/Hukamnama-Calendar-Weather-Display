# Hukamnama Calendar Weather Display

This is a simple project to easily display Sikh Ithihasik events and Hukamnama from Sachkhand Sri Harmandir Sahib Darbar Sahib Amritsar. 

Refreshes every two hours.

[DEMO](https://https://themanjotsingh.github.io/Hukamnama-Calendar-Weather-Display/)
**Note that this demo was made for a 32 inch vertically mounted monitor and you will have to adjust font sizes according to your own display.

<p align="center">
  <a href="https://themanjotsingh.github.io/Hukamnama-Calendar-Weather-Display/">
    <img src="https://themanjotsingh.github.io/Hukamnama-Calendar-Weather-Display/images/example.png" alt="Demo Example" width="80%">
  </a>
</p>

## Raspberry Pi Instructions

Although these set up instructions are written with use of a Raspberry Pi and a vertically mounted display, this can be easily modified for your own use case.

1.	Obtain Raspberry Pi and an micro SD card (minimum 8gb) and a display
-	Make sure that your Raspberry Pi comes with wifi connectivity or you have access to an ethernet cable where you intend to use this. Internet access is needed!
-	An old monitor [or even an old laptop’s display which is no longer in use can work](https://www.instructables.com/id/Home-Raspberry-Pi-Desktop-With-Old-Laptop-Screen/).
-	This project functions best when the display is vertical so keep that in mind when choosing a display (needing a stand/mount). For using a horizontally oriented display, some modifications will be required.

2.	Install OS Raspbian
-	Option 1: [Use the Raspberry Pi Imager to flash Raspbian onto your micro SD card](https://www.raspberrypi.org/downloads/)
-	Option 2: [Download the image](https://www.raspberrypi.org/downloads/raspbian/) and use a tool like [Rufus](https://rufus.ie/) or [Etcher](https://github.com/balena-io/etcher) to flash Raspbian onto your micro SD card

3.	Download project repository. Save it on a separate usb flash drive if possible. Otherwise save the files to the same sd card after flashing the os onto it first.

4.	Insert SD card into Raspbery Pi, plug in mouse/keyboard and power on

5.	Go through the on screen prompts to initialize/set up your raspberry pi. Install updates if prompted. Reboot.

6.	Open the terminal. Run the following commands to update the list of available packages and then install apache2

```console
sudo apt update
sudo apt install apache2 -y
```

7.	Open the web browser and navigate to `html://localhost`. You should see the default apache page.

8.	Run the following commands in the terminal to get permissions to put files in the `www` folder.

```console
sudo chown -R pi:www-data /var/www
sudo chmod u+rxw,g+rx-w,o-rwx /var/www
sudo chmod g+s /var/www
```

9.	Open the file browser and navigate to `/var/www/html`. Place the project files you downloaded earlier into this directory.

10.	Run the following command in the terminal to go to rotate your display.

```console
sudo nano /boot/config.
```
add the following lines to the bottom of the file

```
display_rotate=3
lcd_rotate=3
```
See [here](https://www.raspberrypi.org/forums/viewtopic.php?t=120793) if any issues arise.



11.	Open the web browser and navigate to `html://localhost` to verify that everything is showing up correctly.

12.	Next we'll configure your Raspbery Pi to open this automatically on start up and for the screen to not black out after a time period.Run the following in the terminal:

```console
sudo nano /etc/xdg/lxsession/LXDE-pi/autostart
```
At the bottom of this document add the following [lines](https://raspberrypi.stackexchange.com/questions/69204/open-chromium-full-screen-on-start-up).

```
@xscreensaver -no-splash # to disable screen saver
@xset s off # to disable screen saver
@xset -dpms # to disable Display Power Management Signaling
@xset s noblank # to disable screen going blank
@chromium-browser –kiosk -http://localhost/ # to load chromium after boot and open the page in full screen mode

```
13.	reboot.



## Some modifications

#### To set Hukamnama text sizes
1.	Edit `hukamstyle.css` in the `hukamnama` folder
2.	Edit font sizes as needed

#### To change Google Calendar
The default calendar used is a calendar published by [Experience Sikhi](https://www.experiencesikhi.com). This includes Parkash, Gurgaddi, Joti-Jot of Guru Sahibaan as well as many important ethihasik dates and more. To change to a different Google calendar such as a personal calendar, follow the following:

1.	Go to Google Calendar website and go to the `Settings and sharing` page for the calendar that you would like to use
2.	Scroll down to the `Integrate calendar` section and navigate to the url in `Public URL to this calendar`
3.	Right click/double click and view page source. Copy this into `cal.html` located into the `calendar` folder and replace the existing contents.
4.	Add the following line right below the existing css spreadsheet line

```css
<link rel="stylesheet" type="text/css" href="styles.css">
```
6.	Add `https://calendar.google.com` to any relative links in this `cal.html` file. Examples:

```
src="/calendar/_/scs/calendar-static/_/js/k=calendar.emb…
href="//calendar.google.com/calendar/static/…
```
7.	Delete the line which has the following `<span id="calendarTitle">`.

#### To change displayed weather location
Edit the `index.html` file in the main project directory. Change the `latitude` and `longitude` to wherever you would like the weather to show. You can change the title by changing ~Brampton, Ontario, Canada~ to *whatever your pind is*.

## Acknowledgments

[Hukamnama-Calendar-Weather-Display](https://github.com/themanjotsingh/Hukamnama-Calendar-Weather-Display) uses the [Gurbani Now API](https://github.com/GurbaniNow/api) which fetches the hukamnama from [SikhNet.com](http://www.sikhnet.com).
Gurmukhi Font used are Raajaa by [Paul Grosse](http://www.billie.grosse.is-a-geek.com/resources-03.html) and GurbaniAkhar by [Kulbir S. Thind](http://www.sikhnet.com/Gurmukhi-Fonts#thind). Weather from [Forecast.io/DarkSky.net](https://darksky.net)
Some code from [this instructables](https://www.instructables.com/id/Raspberry-Pi-Wall-Mounted-Calender-and-Notificatio/) project used.
