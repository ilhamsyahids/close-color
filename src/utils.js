
export const getRandomHexColor = () => `#${Math.random().toString(16).slice(2, 8)}`;

// https://webdevtrick.com/hex-to-rgb-and-hsl-converter/
export const rgbToHsl = ([r, g, b]) => {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    }
    else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
            default:
                break;
        }

        h /= 6;
    }

    return [(h * 100 + 0.5) | 0, ((s * 100 + 0.5) | 0) + '%', ((l * 100 + 0.5) | 0) + '%'];
}
