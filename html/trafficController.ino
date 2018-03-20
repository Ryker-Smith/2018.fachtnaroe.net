/* This is a starting point program only. You'll still have to finish it!

Program: Starting the Traffic Controller
Author:  faROE
Date:    2014/03
Status:  unfinished
*/

// set to value of pin with sensor (emulated by switch) attached
int trafficOverridePin = 4; // used by fire station
int sidePin=2;
int lightSensorPin=3;

// These are the test values for the input pins, change as required
const int carPassing=HIGH;
const int trafficOverride=HIGH;
const int nightLightLevel=HIGH;
const int sideRed=6;
const int mainRed=7;

// colours, use values from earlier task 2
const int red = 0;
const int amber = 1;
const int green = 2;
const int off = 3;

// times to pause for after events
const int fireDelay=1000;
const int nightDelay=1000;
const int sideDelay=2000;
const int blipDelay=250;

// other constants
const int maxCars=3; // max cars permitted waiting on side road
const int maxTicks=10000; // milli seconds

// variables
int sideCount;
int firstCarTime=0;

const int redMain=8;
const int greenMain=9;
const int blueMain=10;
const int redSide=11;
const int greenSide=12;
const int blueSide=13;

void setup () {
  Serial.begin(9600); // for debugging
  pinMode(sideRed, OUTPUT);
  pinMode(redMain,OUTPUT);
  pinMode(greenMain,OUTPUT);
  pinMode(blueMain,OUTPUT);
  pinMode(redSide,OUTPUT);
  pinMode(greenSide,OUTPUT);
  pinMode(blueSide,OUTPUT);
  pinMode(mainRed, OUTPUT);
  pinMode(5,INPUT);
  mainLight(green);
  sideLight(red);
}
#include <avr/io.h>
#include <avr/wdt.h>

void loop () {
  // commence kludge!
  if (digitalRead(5)==HIGH) { 
    //software reset
    wdt_enable(WDTO_30MS);
  }
  Serial.println(sideCount);  // for debugging
  if (fireSignal() == 1) {
    mainLight(red);
    sideLight(red);
    delay(fireDelay);
    sideCount=0;
    firstCarTime=0;
    mainLight(green);
  }
  else {
    if (nightTime() == 1) {
      // first make both lights amber
      Serial.println("night");
      mainLight(amber);
      sideLight(amber);
      // wait a moment ...
      delay(nightDelay);
      // now turn off to generate flashing
      mainLight(off);
      sideLight(off);
      delay(nightDelay);
      sideCount=0;
      firstCarTime=0;
      if (nightTime() == 0) {
        mainLight(green);
        sideLight(red);
      }
    }
    else {  // day time
      if (blip() == 1) {
        sideCount++;
        
        if (firstCarTime == 0) {
          // no timer? get clock now
          firstCarTime=millis();
        }
        Serial.println(millis() - firstCarTime);
        if (sideCount >= maxCars) {
          //|| ((millis() - firstCarTime) >= maxTicks)) 
          mainLight(amber);
          delay(sideDelay/2);
          mainLight(red);
          delay(sideDelay/2);
          sideLight(green);
          delay(sideDelay*2);
          sideCount=0;
          firstCarTime=0;
          sideLight(amber);
          delay(sideDelay/2);
          sideLight(red);
          delay(sideDelay/2);
          mainLight(green);
        }
      }
      if ( (firstCarTime != 0) && (sideCount>0) && ((millis() - firstCarTime) >= maxTicks) ) {
          mainLight(amber);
          delay(sideDelay/2);
          mainLight(red);
          delay(sideDelay/2);
          sideLight(green);
          delay(sideDelay*2);
          sideCount=0;
          firstCarTime=0;
          sideLight(amber);
          delay(sideDelay/2);
          sideLight(red);
          delay(sideDelay/2);
          mainLight(green);        
      } 
    }
  }
}

int blip () {
  // this may be better done with digitalRead
  int signal=digitalRead(sidePin);
  if (signal == carPassing) {
    delay (blipDelay);
    return 1;
  }
  else {
    return 0; 
  }
}

void mainLight (int color) {
  // We send the correct code to the mainLight RGB led here. There
  // would obviously be individual lights in a real system, but that's
  // only a matter of changing the code to match the circuit.
  unsigned char r, g, b;
  if (color == green) {
    r=0;
    g=200;
    b=0;
  }
  if (color == amber) {
    r=20;
    g=20;
    b=0;
  }
  if (color == red) {
    r=255;
    g=0;
    b=0;
  }
  if (color == off) {
    r=0;
    g=0;
    b=0;
  }
  digitalWrite(redMain, r);
  digitalWrite(greenMain, g);    
  digitalWrite(blueMain, b);  
}

void sideLight (int color) {
  // We send the correct code to the sideLight RGB led here. There
  // would obviously be individual lights in a real system, but that's
  // only a matter of changing the code to match the circuit.
  unsigned char r, g, b;
  if (color == green) {
    r=0;
    g=200;
    b=0;
  }
  if (color == amber) {
    r=20;
    g=20;
    b=0;
  }
  if (color == red) {
    r=255;
    g=0;
    b=0;
  }
  if (color == off) {
    r=0;
    g=0;
    b=0;
  }  
  digitalWrite(redSide, r);
  digitalWrite(greenSide, g);    
  digitalWrite(blueSide, b); 
}

int fireSignal () {
  // We can emulate what ever system the fire station might
  // use with just another switch.
  // Do this with digitalRead?
  int signal=digitalRead(trafficOverridePin);
  if (signal == trafficOverride) {
    return 1;
  }
  else {
    return 0; 
  }
}

int nightTime () {
  // use LDR (light dependent resistor) to sense night time
  // Check whether analog or digital read?
  int signal=digitalRead(lightSensorPin);
  if (signal == nightLightLevel) {
    return 1;
  }
  else {
    return 0; 
  }
}
