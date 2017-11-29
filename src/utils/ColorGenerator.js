import convert from 'color-convert';

/**
 * Generates random colors for each new process.
 * @see https://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/
 * @since v0.0.1
 * @author Frank Wanye
 */
class ColorGenerator {
    /**
     * Constructs a new color generator.
     */
    constructor() {
        this.processToColorMap = {};
        this.magicNumber = 0.618033988749895;
        this.hue = Math.random();
        this.saturation = 0.3 * 100;
        this.value = 0.99 * 100; // value == brightness
    };

    /**
     * Creates a new color for a given process.
     * @param {number} processNumber - the process number
     */
    createColor(processNumber) {
        if (typeof(this.processToColorMap[processNumber]) === 'undefined') {
            this.hue += this.magicNumber;
            this.hue %= 1;
            const hue360 = this.hue * 360;
            const color = '#' + convert.hsv.hex(hue360, this.saturation, this.value);
            this.processToColorMap[processNumber] = color;
        }
    };

    /**
     * Obtains the color for a given process. Creates a new color if there is no color for this process yet.
     * @param {number} processNumber - the process number
     * @return {string} colorRGB - the RGB color string
     */
    getColor(processNumber) {
        this.createColor(processNumber);
        return this.processToColorMap[processNumber];
    };
};

export default ColorGenerator;