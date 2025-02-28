let colors = ["#FFD3B6", "#A8E6CF", "#D4A5A5"]; // Array of colors
        let index = 0; // Track current color index

        function changeBackground() {
            document.body.style.backgroundColor = colors[index++];
            if (index === colors.length) index = 0;
        }