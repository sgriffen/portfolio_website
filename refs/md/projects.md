### Senior Design - BeagleBoard IoT Gateway Extension
This two semester-long project, proposed by [Texas Instruments](https://www.ti.com/) aimed to extend the functionality of the [BeagleBoard](https://beagleboard.org/) IoT development platform by creating a "cape" that had Zigbee wireless functionality, giving the BeagleBoard the ability to be a Zigbee Coordinator or Router. This involved designing and manufacturing any new PCBs/custom hardware and developing the supporting firmware and software for the additional wireless protocol and any other services we want to add, such as connecting to cloud services and existing home automation platforms.

Mainly, I worked on the firmware for the Zigbee MCUs we developed, the supporting firmware on the BeagleBone Green Gateway we were extending, and any extra software (web servers, mobile apps, databases) needed to complete and demo the project.

At the end of the project, our development progress was made opensource on GitHub, in sprit of the open BeagleBoard platform, and our story was published on Hackster.io.

Also, a few of our team members (myself included) committed to further extending the capabilities of our platform as well as fixing bus found while finishing the project up.

What I learned:
- Development of a protocol api from scratch
- Creating firmware for custom hardware
- Communicating to wireless sensors in real time asynchronously
- Connecting to multiple third-party services and handling communication to each independently

<button class="action" onclick="toggle_display_min(findChildById(this.parentNode, 'sub_1-7_pdf0'));" title="Display Senior Design Project Report">View Report</button>
<button class="action" onclick="toggle_display_min(findChildById(this.parentNode, 'sub_1-7_pdf1'));" title="Display Senior Design Project Poster">View Poster</button>

<div class="embed pdf" id="sub_1-7_pdf0" style="display:none">
    <object data="/refs/pdf/sean_griffen-sddec21_07-final_report.pdf" type="application/pdf">
        <iframe src="/refs/js/pdf_js/web/viewer.html?file=/refs/pdf/sean_griffen-sddec21_07-final_report.pdf"></iframe>
    </object>
</div>
<div class="embed pdf" id="sub_1-7_pdf1" style="display:none">
    <object data="/refs/pdf/sean_griffen-sddec21_07-poster.pdf" type="application/pdf">
        <iframe src="/refs/pdf/pdf_js/web/viewer.html?file=/refs/pdf/sean_griffen-sddec21_07-poster.pdf"></iframe>
    </object>
</div>

[Website](https://sddec21-07.sd.ece.iastate.edu/) [Hackster.io Story](https://www.hackster.io/iowa-state-senior-design-dec-2021-proj7/beaglebone-green-wireless-zigbee-cape-c2da61) [Source code](https://github.com/iowa-state-senior-design-dec-2021-proj7/BBGreenZigbeeCape)

---

### Squirrel Hacks XI (HackISU 2019) - Hot Car Ally
My team and I made a system to alert parents if they left their child in a hot car.

Using an Arduino Uno, temperature, GPS, ultrasonic sensors, buttons, and radio transceivers, we were able to
        1) Tell if there was a child in a car seat,
        2) Know the temperature of the car,
        3) Get the location of the car seat,
        and 4) Communicate with an external "key fob" made of another Arduino Uno, buzzer, and radio transceiver.
Using all that, if the car seat and "key fob" lost communication with each other, the "key fob" would buzz if the last known location of the child was in the car seat,
and the car seat would send data (temperature, GPS location, and status of the child) over serial to a Raspberry Pi, which would then parse the data and send that to a web server to display that data on an app on the parent's phone.
The web server would also send text notifications to the parent that something was left in their car seat, with a time limit to get back before the car got too hot. If the parent's location was too far away for them to get back, the car seat (using its location data) would notify authorities to get the child out of the car.

What I learned:
- How to gather information quickly and make an informed decision
- How to make a working demo in a short period of time
- How to solve problems quickly, and switch to new solutions if one is taking too long to figure out

[Source code](https://github.com/sgriffen/hack_squirrelhacksXI_HotCarAlly)
[DevPost](https://devpost.com/software/hot-car-ally)

--- 

### School 3rd year: SE 319 Half-Semester Project - Game Zone
For this half-semester project, after learning about UI frameworks, my team and I created a web-based game platform where users could connect to each other or an AI and play against one another in a game of tic tac toe, checkers, or chess.

I mainly focused on the Spring WebSocket components which were going to be the primary way the frontend JavaScript was going to communicate with the backend.
In doing this I created a way to generate unique user IDs when a new player comes to the website, a way to associate two players with a desired game, and a way to forward game moves to each player so they would know when the other player moved.

I also created the frontend HTML, CSS, and JavaScript for the game chess. For this, I utilized the API [chess.js](https://github.com/jhlywa/chess.js) for the chess game logic, and created my own methods for communicating that resulting move to the backend.

What I learned:
- How Javascript and Spring handle WebSocket communication
- How to make interactive UI elements for a game in HTML, CSS, and JavaScript
- How to work remotly with a team online after working in-person, without the workflow being disrupted

<button class="action" onclick="toggle_display_min(findChildById(this.parentNode, 'sub_1-5_pdf'));" title="Display SE 319 final release report">View Final Report</button>

<div class="embed pdf" id="sub_1-5_pdf" style="display:none">
    <object data="/refs/pdf/sean_griffen-se319-final_release_report.pdf" type="application/pdf">
        <iframe src="/refs/js/pdf_js/web/viewer.html?file=/refs/pdf/sean_griffen-se319-final_release_report.pdf"></iframe>
    </object>
</div>

[Source code](https://github.com/sgriffen/isu_se319_GameZone)

--- 

### School 3rd year: CprE 381 Final Project - MIPS Processor
TODO

[Source code](TODO)

---

### School 2nd year: CprE 288 Final Project - Roomba<span>&#174;</span> Rover
The final project for this class was to program a Roomba with a custom embedded chip to navigate an obstacle course by user input.
My team and I had to figure out a way to get information from the ultrasonic and infrared, bump, and cliff sensors on the Roomba to display on a console on our control computer wirelessly, and display in a way that was easily digestible for us to determine our next move.

In order to display information we decided to, using PuTTY and circle equations, print a top-down view of what was in front of the Roomba.
The Roomba would figure out where obstacles were and calculate their circumferemce. It would send back a 2D array to project on our console.
Movement was handled by mapping DS4 controller inputs to keyboard presses and was sent to the robot through PuTTY to move forward 10cm, backward 10cm, or turn right or left 10 degrees.
After the goal of the obstacle course was found, we would then drive in it and play a victory song.

What I learned:
- How to gather data from multiple sensors on an embedded system and make decisions accordingly
- Display data in a console in an intuitive way
- Read an embedded processor's data sheet and initialize registers correctly
- Debug programming issues on an embedded system

[Source code](https://github.com/sgriffen/isu_cpre288_finalProject)

---

### School 2nd year: ComS 309 Semester Project - 007: Knockout
In this project, my team and I created an augmented-reality Android app based off of the game [Assassin](https://en.wikipedia.org/wiki/Assassin_(game)).

I focused on the backend functions and API that delt with HTTP requests. Using the Spring framework, I created an API to get and create players, game sessions, items, and handle game logic.
This included assigning players to a game session desired using a pass code, communication with a frontend through Tokens instead of sensitive user and game information, distance calculation between two latitude and longitude points, and item inventory for players (including keeping track of items that persist over game sessions, and the buffs that items give to certain statistics of a player)

What I learned:
- The usage of Spring for HTTP requests
- How to use MySQL databases to save and retrieve Java objects
- Hot to use Postman to test backend APIs
- How to communicate effectively with a team
- Effective coordination of large-scale projects over a long time period

<button class="action" onclick="toggle_display_min(findChildById(this.parentNode, 'sub_1-2_pdf'));" title="Display ComS 309 project report">View Report</button>

<div class="embed pdf" id="sub_1-2_pdf" style="display:none">
    <object data="/refs/pdf/sean_griffen-coms309-final_report.pdf" type="application/pdf">
        <iframe src="/refs/js/pdf_js/web/viewer.html?file=/refs/pdf/sean_griffen-coms309-final_report.pdf"></iframe>
    </object>
</div>

[Source code](https://github.com/sgriffen/isu_coms309_007Knockout)
[Postman Documentation](https://documenter.getpostman.com/view/6678646/S1ETRwMK)

--- 

### School 2nd year: CprE 281 Final Project - FPGA Traffic Light
This goal of this final project was to create a traffic control system for a 4-way intersection using the FPGA we've been using in lab. This involved keeping track of the number of cars in each lane, counting up the cars in a user-chosen lane to the user-defined max capacity of that lane, and automatically removing cars from each lane until either the lane has reached zero cars, or the lane has decreased by 5 cars.

I decided to use 4 of the number displays in conjunction with a register file to keep track of the number of cars in each lane. Each lane also had its own counter that could count up to 15, or a user-defined maximum. To decrement the cars in a lane, I used the FPGA's internal clock and slowed it down using T flip-flops to about 1 clock cycle every 2 seconds.
Using a seperate counter for each lane, I was able to detect the number of clock cycles a lane was decrementing for, and based on that or the number of the cars in the lane, I switched to the next available lane that had cars in it to keep the intersection fair. This repeated until all the lanes were empty.

What I learned:
- How to program an FPGA from project description to finalizing the last block connection
- Visualizing a project timeline and project design to follow
- Apply skills acquired in class to a "real-world" problem

<button class="action" onclick="toggle_display_min(findChildById(this.parentNode, 'sub_1-1_pdf'));" title="Display CprE 281 final project report">View Report</button>

<div class="embed pdf" id="sub_1-1_pdf" style="display:none">
    <object data="/refs/pdf/sean_griffen-cpre281-final_report.pdf" type="application/pdf">
        <iframe src="/refs/js/pdf_js/web/viewer.html?file=/refs/pdf/sean_griffen-cpre281-final_report.pdf"></iframe>
    </object>
</div>

[Source code](https://github.com/sgriffen/isu_cpre281_finalProject)

--- 

### School 1st year: CprE 186 Semester Project - DND Java
My group and I made a map and character displayer for Dungeons ‘n Dragons.

We accomplished this using JFrames and buffered images in Java and created a "fog of war" mechanic that, if turned on, covered the map and as the character model on the screen moved around, by clicking and holding the mouse, the map would uncover itself.
<br>
<br>
What I learned:
- How java handles images and layering images on each other
- Scaling projects to the time-line available
- Partitioning large projects into smaller, easier projects that are easier to focus on and work on

<button class="action" onclick="toggle_display_min(findChildById(this.parentNode, 'sub_1-0_pdf'));" title="Display CprE 186 project presentation">View Final Presentation</button>

<div class="embed pdf" id="sub_1-0_pdf" style="display:none">
    <object data="/refs/pdf/sean_griffen-cpre186-final_presentation.pdf" type="application/pdf">
        <iframe src="/refs/js/pdf_js/web/viewer.html?file=/refs/pdf/sean_griffen-cpre186-final_presentation.pdf"></iframe>
    </object>
</div>

[Source code](https://github.com/sgriffen/isu_cpre186_DNDJava)

---
