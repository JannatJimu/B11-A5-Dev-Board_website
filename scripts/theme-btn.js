let colors = ["#FFD3B6", "#A8E6CF", "#D4A5A5"]; 
        let index = 0; 

        function changeBackground() {
            document.body.style.backgroundColor = colors[index++];
            if (index === colors.length) index = 0;
        }