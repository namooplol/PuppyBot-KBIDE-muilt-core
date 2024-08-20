#include <Arduino.h>
#include <puppybot.h>
#include <KB_music.h>

KB_music music;

typedef int Number;
typedef int Boolean;

${EXTINC}

${VARIABLE}

${FUNCTION}

void setup()
{
  puppybot_setup();
  music.begin();

  ${SETUP_CODE}
  ${BLOCKSETUP}
}
void loop()
{
  ${LOOP_CODE}
  ${LOOP_EXT_CODE}
}