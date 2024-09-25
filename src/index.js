import * as Tone from 'tone';
//this object below contains the default key associated with each instrument this will be dynamically changed
// as per the user wish
const keyMapping = {
    bass_drum: 'W',
    bottom_left_hat: 'A',
    center_left_drum: 'S',
    center_right_drum: 'D',
    hat_bass: 'Q',
    left_bottom: 'E',
    right_bottom_drum: 'R',
    right_cymbal: 'F'
};

// Function to validate key mapping values
const validateKeyMapping = (key, value) => {
    if (typeof value !== 'string' || value.trim() === '') {
        alert(`Invalid value for ${key}. Please enter a valid key.`);
        return false;
    }
    return true;
};

// Function to update key mapping from HTML elements



// the below object is used for the keys changing basically getting and setting the keys and performs 
// validation whether the field has a valid input or not
const updateKeyMapping = () => {
    const elements = {
        bass_drum: document.getElementById('bass_drum').value.toUpperCase(),
        bottom_left_hat: document.getElementById('bottom_left_hat').value.toUpperCase(),
        center_left_drum: document.getElementById('center_left_drum').value.toUpperCase(),
        center_right_drum: document.getElementById('center_right_drum').value.toUpperCase(),
        hat_bass: document.getElementById('hat_bass').value.toUpperCase(),
        left_bottom: document.getElementById('left_bottom').value.toUpperCase(),
        right_bottom_drum: document.getElementById('right_bottom_drum').value.toUpperCase(),
        right_cymbal: document.getElementById('right_cymbal').value.toUpperCase()
    };

    // Validate and update key mapping
    for (const [key, value] of Object.entries(elements)) {
        if (validateKeyMapping(key, value)) {
            keyMapping[key] = value;
        }
    }
};

// Start Tone.js context on first user interaction


document.addEventListener('keydown', event => {
    Tone.start();
    const key = event.key.toUpperCase();
    const soundMap = {
        [keyMapping.bass_drum]: "drum_ios_audio/bass_drum.mp3",
        [keyMapping.bottom_left_hat]: "drum_ios_audio/bottom_left_hat.unknown",
        [keyMapping.center_left_drum]: "drum_ios_audio/center_left_Drum.unknown",
        [keyMapping.center_right_drum]: "drum_ios_audio/center_right_drum.unknown",
        [keyMapping.hat_bass]: "drum_ios_audio/hat+bass.unknown",
        [keyMapping.left_bottom]: "drum_ios_audio/left_bottom.unknown",
        [keyMapping.right_bottom_drum]: "drum_ios_audio/right_bottom_Drum.unknown",
        [keyMapping.right_cymbal]: "drum_ios_audio/right_Cymbal.unknown"
    };

    if (soundMap[key]) {
        
        console.log(`Key pressed is ${event.key}`);
        const player = new Tone.Player(soundMap[key]).toDestination();
        player.autostart = true;
        document.body.style.backgroundColor = getColorForKey(key);
    } else {
        console.log(`Key ${event.key} has no mapping`);
    }
});

// Function to get background color based on key
const getColorForKey = (key) => {
    const colors = {
        [keyMapping.bass_drum]: "crimson",
        [keyMapping.bottom_left_hat]: "magenta",
        [keyMapping.center_left_drum]: "blue",
        [keyMapping.center_right_drum]: "green",
        [keyMapping.hat_bass]: "red",
        [keyMapping.left_bottom]: "yellow",
        [keyMapping.right_bottom_drum]: "orange",
        [keyMapping.right_cymbal]: "purple"
    };
    return colors[key] || "white";
};
