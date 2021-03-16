const CANVAS_MARGIN = 20;
const UNIT_WIDTH = 400;
const UNIT_SPACE = 50;
const UNIT_HEIGHT = 50;
const UNIT_YSPACE = 50;
const TEXT_OFFSET_X = 10;
const TEXT_OFFSET_Y = 20;
const TEXT_BASELINE = 20;
const ROWS = 11;
const TOP_SKIP = 20;

var ZOOM = 0.4822531; // (1.2)^(-4)

var years = [1, 2, 3, 4];

var map = {};

function layout() {
    // for every year, align the units in a grid
    for (const year of years) {
        var my_units = data.filter(unit => unit.year == year);
        
        // TB4 ones first (I think this is only SPE)
        var tb4 = my_units.filter(unit => unit.tb == 4);
        var y = 1;
        for (unit of tb4) {
            unit.x = 2*year - 1;
            unit.y = y++;
        }

        // now the rest
        var y1 = y;
        var y2 = y;
        for (const unit of my_units) {
            if (unit.tb == 1) {
                unit.x = 2 * year - 1;
                unit.y = y1++;
            } else if (unit.tb == 2) {
                unit.x = 2 * year;
                unit.y = y2++;
            }
        }
    }
}

function start_x(unit) {
    return CANVAS_MARGIN + (unit.x-1)*(UNIT_WIDTH + UNIT_SPACE);
}

function start_y(unit) {
    return TOP_SKIP + CANVAS_MARGIN + (unit.y-1)*(UNIT_HEIGHT + UNIT_YSPACE);
}

function unit_width(unit) {
    return unit.tb == 4 ? 2 * UNIT_WIDTH + UNIT_SPACE : UNIT_WIDTH;
}

const DRAW_STYLES = {
    normal: {
        fill_box: "#F5F5F5",
        stroke_box: "#666666",
        fill_text: "rgb(0, 0, 0)"
    },
    selected: {
        fill_box: "#E1D5E7",
        stroke_box: "#9673A6",
        fill_text: "rgb(0, 0, 0)"
    }, 
    hidden: {
        fill_box: "rgb(255, 255, 255)",
        stroke_box: "rgb(160, 160, 160)",
        fill_text: "rgb(160, 160, 160)"
    },
    pre: {
        fill_box: "#D5E8D4",
        stroke_box: "#82B366",
        fill_text: "rgb(0, 0, 0)"
    }, 
    post: {
        fill_box: "#F8CECC",
        stroke_box: "#B85450",
        fill_text: "#000000"

    }
}

function draw_unit(d, unit, style) {
    var styles = DRAW_STYLES[style];
    d.fillStyle = styles.fill_box;
    d.strokeStyle = styles.stroke_box;
    var x = start_x(unit);
    var y = start_y(unit);
    d.strokeRect(x, y, unit_width(unit), UNIT_HEIGHT);
    d.fillRect(x, y, unit_width(unit), UNIT_HEIGHT);
    d.fillStyle = styles.fill_text;
    d.fillText(unit.code, x + TEXT_OFFSET_X, y + TEXT_OFFSET_Y);
    d.fillText(unit.title, x + TEXT_OFFSET_X, y + TEXT_OFFSET_Y + TEXT_BASELINE);
}

function draw(c, d, selected) {
    d.setTransform(1, 0, 0, 1, 0, 0);
    d.clearRect(0, 0, c.width, c.height);
    console.log("draw " + selected);
    d.setTransform(ZOOM, 0, 0, ZOOM, 0, 0);
    d.strokeStyle = "rgb(0, 0, 0)";
    d.fillStyle = "rgb(0, 0, 0)";
    d.font = "12pt sans-serif";

    // headings
    for (year of [1,2,3,4]) {
        for (tb of [1,2]) {
            // CS only special hack
            if (year == 3 && tb == 2) {
                d.fillText("years 3 and 4 TB2", (2 * year + tb - 3) * (UNIT_WIDTH + UNIT_SPACE) + CANVAS_MARGIN, 20);
            } else {
                d.fillText("year " + year + " TB" + tb, (2 * year + tb - 3) * (UNIT_WIDTH + UNIT_SPACE) + CANVAS_MARGIN, 20);
            }
        }
    }
    // CS special
    d.fillText("In year 4 (MEng only), take one unit from", 7 *(UNIT_WIDTH + UNIT_SPACE) + CANVAS_MARGIN + TEXT_OFFSET_X, 
        CANVAS_MARGIN + TEXT_OFFSET_Y + UNIT_HEIGHT + UNIT_YSPACE + TOP_SKIP);
    d.fillText("year 3 TB2 options as well (excluding projects).", 7 *(UNIT_WIDTH + UNIT_SPACE) + CANVAS_MARGIN + TEXT_OFFSET_X, 
        CANVAS_MARGIN + TEXT_OFFSET_Y + UNIT_HEIGHT + UNIT_YSPACE + TEXT_BASELINE + TOP_SKIP);

    // dependencies
    for(const unit of data) {
        // but not the transitive ones
        var trans = {}
        for (var t of unit.trans) {
            trans[t] = 1;
        }
        for (const pre_code of unit.pre) {
            if (trans[pre_code]) { continue; }
            var pre = map[pre_code];
            var pre_end_x = start_x(pre) +
                (pre.tb == 4 ? 2 * UNIT_WIDTH + UNIT_SPACE : UNIT_WIDTH);
            var pre_end_y = start_y(pre) + UNIT_HEIGHT/2;
            d.beginPath();
            d.moveTo(pre_end_x, pre_end_y);
            d.lineTo(start_x(unit), start_y(unit) + UNIT_HEIGHT/2);
            d.stroke();
        }
    }

    // units
    d.beginPath();
    for (const unit of data) {
        if (selected === null) {
            draw_unit(d, unit, "normal");
        } else {
            var style;
            if (selected.code == unit.code) {
                style = "selected";
            } else {
                style = "hidden";
            }
            draw_unit(d, unit, style);
        }
    }

    // if we have a selection, redraw the dependents
    if (selected !== null) {
        for (const pre_code of selected.pre) {
            var unit = map[pre_code];
            draw_unit(d, unit, "pre");
        }
        if ('post' in selected) {
            for (const post_code of selected.post) {
                var unit = map[post_code];
                draw_unit(d, unit, "post");
            }
        }
    }
}

function select(x, y, c, d) {
    // what did we hit?
    var element = null;
    for(unit of data) {
        if (start_x(unit) > x) { continue; }
        if (start_x(unit) + unit_width(unit) < x) { continue; }
        if (start_y(unit) > y) { continue; }
        if (start_y(unit) + UNIT_HEIGHT < y) { continue; }
        element = unit;
        break;
    }
    if (element !== null) {
        draw(c, d, element);
        if ('skills' in element) {
            document.getElementById("details").innerHTML = 
                "<p>As well as the prerequisite units, you should have the following skills to take this unit:</p><ul>" +
                element.skills.map(t => "<li>" + t + "</li>").join("\n") +
                "</ul>";
        } else {
            document.getElementById("details").innerHTML = "";    
        }
    } else {
        draw(c, d, null);
        document.getElementById("details").innerHTML = "";
    }
}

function postreqs() {
    for (unit of data) {
        for (pre_code of unit.pre) {
            var pre = map[pre_code];
            if (typeof(pre.post) == 'undefined') {
                pre.post = [];
            }
            pre.post.push(unit.code);
        }
    }
}

// Make the dependency graph cleaner by removing transitive dependencies.
function clean_trans() {
    for(var unit of data) {
        var trans = {};
        var stack = [];
        for (var pre_code of unit.pre) {
            stack.push(pre_code);
        }
        while (stack.length > 0) {
            var code = stack.pop();
            var item = map[code];
            for (var t of item.pre) {
                if (!(trans[t] == 1)) {
                    trans[t] = 1;
                    stack.push(t);
                }
            }
        }
        unit.trans = [];
        for (var [key, _] of Object.entries(trans)) {
            unit.trans.push(key);
        }
    }
}

function adjust(canvas) {
    canvas.width = (8 * UNIT_WIDTH + 7 * UNIT_SPACE + 2 * CANVAS_MARGIN) * ZOOM;
    canvas.height = (TOP_SKIP + 2 * CANVAS_MARGIN + ROWS * UNIT_HEIGHT + (ROWS - 1) * UNIT_YSPACE) * ZOOM;
}

window.onload = function() {
    data.forEach(unit => map[unit.code] = unit);
    postreqs();
    clean_trans();
    layout();

    var canvas = document.getElementById("canvas");
    adjust(canvas);

    var d = canvas.getContext('2d');
    draw(canvas, d, null);

    // no, I refuse to use jQuery for something this simple
    canvas.addEventListener('click', function(e) {
        var x = e.pageX - canvas.offsetLeft;
        var y = e.pageY - canvas.offsetTop;
        select(x / ZOOM, y / ZOOM, canvas, d);
    }, false);

    var info = document.getElementById("info");
    info.addEventListener('click', function(e) {
        info.style.visibility = "hidden";
    });

    this.document.getElementById("zoomin").addEventListener("click",
        function() {
            ZOOM = ZOOM * 1.2;
            if (Math.abs(ZOOM - 1.0) < 0.1) { ZOOM = 1.0; }
            adjust(canvas);
            draw(canvas, d, null);
        }
    );
    this.document.getElementById("zoomout").addEventListener("click",
        function() {
            ZOOM = ZOOM / 1.2;
            if (Math.abs(ZOOM - 1.0) < 0.1) { ZOOM = 1.0; }
            adjust(canvas);
            draw(canvas, d, null);
        }
    );

    console.log("complete.");
}
