function Sky(config) {
    var sky = document.querySelector(config.selector);
    this.sky = sky;
    if (config.width) {
        sky.style.width = config.width + 'px';
    }

    if (config.height) {
        sky.style.height = config.height + 'px';
    }
    if (config.backgroundColor) {
        sky.style.backgroundColor = config.backgroundColor;
    }

    this.children = [];
}

Sky.prototype.add = function (child) {
    child.parent = this.sky;
    this.children.push(child);
    this.sky.appendChild(child.celestialObject);
};

var newSky = new Sky({selector: '.sky'});

function Star(config) {
    var newStar = document.createElement('div');
       newStar.className = 'celestialObject';

    this.celestialObject = newStar;

    if (config.size) {
        newStar.style.width = config.size + 'px';
        newStar.style.height = config.size + 'px';
    }

    if (config.opacity) {
        newStar.style.opacity = config.opacity;
    }

    if (config.speed) {
        newStar.style.transition = config.speed + 's';
    }

    if (config.top) {
        newStar.style.top = config.top + 'px';
    }

    if (config.left) {
        newStar.style.left = config.left + 'px';
    }

   }

Star.prototype.getStyle = function (styleName) {
    return this.celestialObject.style[styleName];

};

Star.prototype.setStyle = function (styleName, value) {
    this.celestialObject.style[styleName] = value;

};

Sky.prototype.moveStars = function () {
    var stars = this.children;
    var centerX = document.documentElement.clientWidth / 2;
    var centerY = document.documentElement.clientHeight / 2;


    for (i = 0; i < stars.length; i++) {
        var starTop = parseInt(stars[i].getStyle('top'));
        var starLeft = parseInt(stars[i].getStyle('left'));
        /*1*/
        if (starTop <= centerY - 50 && starLeft <= centerX && starLeft >= centerX - 150) {
            stars[i].setStyle('animationName', 'star1');
        }
        /*2*/
        if (starTop <= centerY - 50 && starLeft >= centerX && starLeft <= centerX + 150) {
            stars[i].setStyle('animationName', 'star2');
        }
        /*3*/
        if (starTop <= centerY - 50 && starLeft >= centerX + 150) {
            stars[i].setStyle('animationName', 'star3');
            stars[i].setStyle('animationDuration', '3s');
        }
        /*4*/
        if (starTop >= centerY - 50 && starTop <= centerY && starLeft >= centerX) {
            stars[i].setStyle('animationName', 'star4');
        }
        /*5*/
        if (starTop <= centerY + 50 && starTop >= centerY && starLeft >= centerX) {
            stars[i].setStyle('animationName', 'star5');
        }
         /*6*/
        if (starTop >= centerY + 50 && starLeft >= centerX + 150) {
            stars[i].setStyle('animationName', 'star6');
            stars[i].setStyle('animationDuration', '3s');
        }
        /*7*/
        if (starTop >= centerY + 50 && starLeft >= centerX && starLeft <= centerX + 150) {
            stars[i].setStyle('animationName', 'star7');
        }
          /*8*/
         if (starTop >= centerY + 50 && starLeft <= centerX && starLeft >= centerX - 150) {
            stars[i].setStyle('animationName', 'star8');
        }
          /*9*/
        if (starTop >= centerY + 50 && starLeft <= centerX - 150) {
            stars[i].setStyle('animationName', 'star9');
            stars[i].setStyle('animationDuration', '3s');
        }
          /*10*/
        if (starTop <= centerY + 50 && starLeft <= centerX && starTop >= centerY) {
            stars[i].setStyle('animationName', 'star10');
        }
         /*11*/
        if (starTop >= centerY - 50 && starLeft <= centerX && starTop <= centerY) {
            stars[i].setStyle('animationName', 'star11');
        }
        /*12*/
        if (starTop <= centerY - 50 && starLeft <= centerX - 150) {
            stars[i].setStyle('animationName', 'star12');
            stars[i].setStyle('animationDuration', '4s');
        }
    }


}

function createStarStyles() {
    var randomStars = [],
        i = 0;
             setInterval( function() {
                 if (i < 20) {
                     randomStars[i] = {
                         size: Math.random() * 5,
                         opacity: Math.random(),
                         top: Math.random() * document.documentElement.clientHeight,
                         left: Math.random() * document.documentElement.clientWidth
                     };
                     newSky.add(new Star(randomStars[i]));
                     newSky.moveStars();

                 }}, 100);


}



var newStar4 = new Star({size: 5, opacity: 1,  top: 500, left: 120});
var newStar1 = new Star({size: 5, opacity: 1, top: 400, left: 700});
var newStar2 = new Star({size: 6, opacity: 1, top: 210, left: 700});
var newStar3 = new Star({size: 5, opacity: 1,  top: 40, left: 120});

newSky.add(newStar1);
newSky.add(newStar2);
newSky.add(newStar3);
newSky.add(newStar4);
createStarStyles();
newSky.moveStars();
